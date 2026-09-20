import { deterministicAnswer, validateModelAnswer } from "./answer.mjs";
import { buildGroundedPrompt } from "./prompt.mjs";
import { createGeminiProvider, createGroqProvider } from "./providers.mjs";
import { retrieveKnowledge } from "./retrieval.mjs";
import { generateWithFallback } from "./router.mjs";

export function configuredProviders(env = process.env, fetchImpl = fetch) {
  const providers = [];

  if (env.GEMINI_API_KEY) {
    providers.push(
      createGeminiProvider({
        apiKey: env.GEMINI_API_KEY,
        model: env.GEMINI_MODEL || "gemini-2.5-flash-lite",
        fetchImpl,
      }),
    );
  }

  if (env.GROQ_API_KEY) {
    providers.push(
      createGroqProvider({
        apiKey: env.GROQ_API_KEY,
        model: env.GROQ_MODEL || "openai/gpt-oss-20b",
        fetchImpl,
      }),
    );
  }

  return providers;
}

export async function answerSupportQuestion(
  question,
  { env = process.env, fetchImpl = fetch, providers } = {},
) {
  const normalizedQuestion = String(question ?? "").trim();

  if (!normalizedQuestion) {
    return {
      answer: "Pose une question sur les projets Open Technologies.",
      evidence_ids: [],
      limitations: [],
      mode: "deterministic",
      provider: null,
    };
  }

  const records = retrieveKnowledge(normalizedQuestion, { limit: 6 });
  const deterministicDraft = deterministicAnswer(normalizedQuestion, records);

  if (records.length === 0) {
    return { ...deterministicDraft, provider: null };
  }

  const selectedProviders = providers ?? configuredProviders(env, fetchImpl);
  if (selectedProviders.length === 0) {
    return { ...deterministicDraft, provider: null };
  }

  const prompt = buildGroundedPrompt({
    question: normalizedQuestion,
    records,
    deterministicDraft,
  });

  let routed;
  try {
    routed = await generateWithFallback(selectedProviders, prompt);
  } catch {
    return { ...deterministicDraft, provider: null };
  }

  if (!routed.result) {
    return { ...deterministicDraft, provider: null };
  }

  const validation = validateModelAnswer(routed.result, records);
  if (!validation.ok) {
    return { ...deterministicDraft, provider: null };
  }

  return {
    ...validation.value,
    provider: routed.provider,
  };
}
