import test from "node:test";
import assert from "node:assert/strict";

import { deterministicAnswer, NOT_DOCUMENTED_MESSAGE, validateModelAnswer } from "../../src/support/answer.mjs";
import { supportKnowledge } from "../../src/support/knowledge.mjs";
import { createGeminiProvider, ProviderUnavailableError } from "../../src/support/providers.mjs";
import { retrieveKnowledge } from "../../src/support/retrieval.mjs";
import { generateWithFallback } from "../../src/support/router.mjs";
import { validateKnowledgeBase } from "../../src/support/schema.mjs";
import { scanTrackedFiles } from "../../scripts/scan-secrets.mjs";

test("TEST-01 known project retrieval finds eCDF", () => {
  const results = retrieveKnowledge("What does eCDF actually implement?");
  assert.equal(results[0]?.project_id, "ecdf");
});

test("TEST-02 evidence-backed answer returns source identifiers", () => {
  const results = retrieveKnowledge("Which projects have automated tests?");
  const answer = deterministicAnswer("Which projects have automated tests?", results);
  assert.ok(answer.evidence_ids.length > 0);
  assert.ok(answer.answer.includes("eCDF") || answer.answer.includes("NovaForge"));
});

test("TEST-03 unsupported question refuses to invent an answer", () => {
  const results = retrieveKnowledge("What is Emeraude's favorite database engine?");
  const answer = deterministicAnswer("What is Emeraude's favorite database engine?", results);
  assert.equal(answer.answer, NOT_DOCUMENTED_MESSAGE);
  assert.deepEqual(answer.evidence_ids, []);
});

test("TEST-04 unavailable primary provider falls back", async () => {
  const primary = {
    metadata: () => ({ id: "primary" }),
    generate: async () => {
      throw new ProviderUnavailableError("quota", { provider: "primary", status: 429 });
    },
  };
  const fallback = {
    metadata: () => ({ id: "fallback" }),
    generate: async () => ({ answer: "grounded", evidence_ids: ["x"], limitations: [] }),
  };

  const routed = await generateWithFallback([primary, fallback], "prompt");
  assert.equal(routed.provider, "fallback");
  assert.equal(routed.result.answer, "grounded");
});

test("TEST-05 CPCN production question preserves explicit non-claim", () => {
  const results = retrieveKnowledge("Is CPCN already a financial platform in production?");
  const answer = deterministicAnswer("Is CPCN already a financial platform in production?", results);
  assert.match(answer.answer, /ne supportent pas|production/i);
  assert.match(answer.limitations.join(" "), /not a bank|market validation|production financial/i);
});

test("TEST-06 tracked source contains no credential pattern", () => {
  assert.deepEqual(scanTrackedFiles(), []);
});

test("TEST-07 knowledge schema is valid", () => {
  assert.deepEqual(validateKnowledgeBase(supportKnowledge), []);
  assert.equal(supportKnowledge.length, 8);
});

test("TEST-08 invented evidence IDs are rejected", () => {
  const records = retrieveKnowledge("Show eCDF evidence");
  const validation = validateModelAnswer(
    {
      answer: "Invented claim",
      evidence_ids: ["made-up-run-999"],
      limitations: [],
    },
    records,
  );
  assert.equal(validation.ok, false);
});

test("TEST-09 private-source anchors do not expose private repository URLs", () => {
  const privateEvidence = supportKnowledge
    .flatMap((record) => record.evidence)
    .filter((evidence) => evidence.access === "PRIVATE");

  assert.ok(privateEvidence.length > 0);
  assert.ok(privateEvidence.every((evidence) => !evidence.href));
});

test("Gemini adapter parses grounded JSON with a mocked HTTP response", async () => {
  const provider = createGeminiProvider({
    apiKey: "test-key-not-a-real-secret",
    fetchImpl: async () =>
      new Response(
        JSON.stringify({
          candidates: [
            {
              content: {
                parts: [
                  {
                    text: JSON.stringify({
                      answer: "eCDF is tested.",
                      evidence_ids: ["ecdf-ci-35508188094"],
                      limitations: [],
                    }),
                  },
                ],
              },
            },
          ],
        }),
        { status: 200, headers: { "content-type": "application/json" } },
      ),
  });

  const result = await provider.generate("grounded prompt");
  assert.equal(result.evidence_ids[0], "ecdf-ci-35508188094");
});
