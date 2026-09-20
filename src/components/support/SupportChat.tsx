"use client";

import { useState } from "react";
import { deterministicAnswer, resolveEvidence } from "@/support/answer.mjs";
import { retrieveKnowledge } from "@/support/retrieval.mjs";

type SupportAnswer = {
  answer: string;
  evidence_ids: string[];
  limitations: string[];
  mode: string;
  provider?: string | null;
};

type Evidence = {
  id: string;
  label: string;
  kind: string;
  access: string;
  href?: string;
  project_name?: string;
};

const suggestions = [
  "Explore my projects",
  "Show tested projects",
  "Show backend evidence",
  "Show AI/LLM projects",
  "Show field validation",
  "Show current limitations",
];

function isSupportAnswer(value: unknown): value is SupportAnswer {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.answer === "string" &&
    Array.isArray(item.evidence_ids) &&
    Array.isArray(item.limitations)
  );
}

function localAnswer(question: string): SupportAnswer {
  const records = retrieveKnowledge(question, { limit: 6 });
  return {
    ...deterministicAnswer(question, records),
    provider: null,
  };
}

export default function SupportChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<SupportAnswer | null>(null);
  const [evidence, setEvidence] = useState<Evidence[]>([]);
  const [loading, setLoading] = useState(false);

  async function ask(value?: string) {
    const nextQuestion = (value ?? question).trim();
    if (!nextQuestion || loading) return;

    setQuestion(nextQuestion);
    setLoading(true);

    let nextAnswer: SupportAnswer;
    const endpoint = process.env.NEXT_PUBLIC_SUPPORT_API_URL;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ question: nextQuestion }),
        });

        const payload: unknown = await response.json();
        if (!response.ok || !isSupportAnswer(payload)) throw new Error("invalid support response");
        nextAnswer = payload;
      } catch {
        nextAnswer = localAnswer(nextQuestion);
      }
    } else {
      nextAnswer = localAnswer(nextQuestion);
    }

    setAnswer(nextAnswer);
    setEvidence(resolveEvidence(nextAnswer.evidence_ids) as Evidence[]);
    setLoading(false);
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-sm shadow-black/20 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Ask Open Technologies
          </p>
          <h2 className="mt-2 text-2xl font-bold">Evidence-grounded support</h2>
        </div>
        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-semibold text-zinc-300">
          NO EVIDENCE → NO CLAIM
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="support-question" className="sr-only">
          Question
        </label>
        <input
          id="support-question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") void ask();
          }}
          placeholder="Ask about projects, tests, architecture, limitations or evidence…"
          className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none placeholder:text-zinc-600 focus:ring-2 focus:ring-zinc-300"
        />
        <button
          type="button"
          onClick={() => void ask()}
          disabled={loading || !question.trim()}
          className="rounded-xl bg-zinc-100 px-5 py-3 font-semibold text-zinc-950 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Checking evidence…" : "Ask"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => void ask(suggestion)}
            className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 hover:bg-zinc-900"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {answer ? (
        <div className="mt-7 border-t border-zinc-800 pt-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
            <span>Mode: {answer.mode}</span>
            {answer.provider ? <span>Provider: {answer.provider}</span> : null}
          </div>

          <div className="mt-3 whitespace-pre-wrap leading-7 text-zinc-200">{answer.answer}</div>

          <div className="mt-6">
            <h3 className="font-semibold">Evidence</h3>
            {evidence.length ? (
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {evidence.map((item) => (
                  <li key={item.id} className="rounded-lg border border-zinc-800 p-3">
                    <div className="font-medium">{item.label}</div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {item.project_name} · {item.kind} · {item.access}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-2 inline-block text-xs underline underline-offset-4"
                      >
                        Verify source
                      </a>
                    ) : (
                      <p className="mt-2 text-xs text-zinc-500">Private source anchor — no private URL exposed.</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-zinc-500">No evidence source is available for this answer.</p>
            )}
          </div>

          {answer.limitations.length ? (
            <div className="mt-6">
              <h3 className="font-semibold">Limitations</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
                {answer.limitations.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
