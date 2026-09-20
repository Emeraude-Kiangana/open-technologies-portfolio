export class ProviderUnavailableError extends Error {
  constructor(message, { provider, status } = {}) {
    super(message);
    this.name = "ProviderUnavailableError";
    this.provider = provider;
    this.status = status;
  }
}

export class ProviderRequestError extends Error {
  constructor(message, { provider, status } = {}) {
    super(message);
    this.name = "ProviderRequestError";
    this.provider = provider;
    this.status = status;
  }
}

function unavailableStatus(status) {
  return status === 408 || status === 429 || status >= 500;
}

function parseJsonObject(text) {
  const trimmed = String(text ?? "").trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start >= 0 && end > start) return JSON.parse(trimmed.slice(start, end + 1));
    throw new Error("provider returned non-JSON content");
  }
}

export function createGeminiProvider({
  apiKey,
  model = "gemini-2.5-flash-lite",
  fetchImpl = fetch,
} = {}) {
  return {
    metadata() {
      return { id: "gemini", model };
    },
    async health() {
      if (!apiKey) return { ok: false, provider: "gemini", reason: "missing_api_key" };
      try {
        const response = await fetchImpl(
          `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}?key=${encodeURIComponent(apiKey)}`,
        );
        return { ok: response.ok, provider: "gemini", status: response.status };
      } catch {
        return { ok: false, provider: "gemini", reason: "network_error" };
      }
    },
    async generate(prompt) {
      if (!apiKey) throw new ProviderRequestError("Gemini API key is not configured", { provider: "gemini" });

      let response;
      try {
        response = await fetchImpl(
          `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              contents: [{ role: "user", parts: [{ text: prompt }] }],
              generationConfig: {
                temperature: 0,
                responseMimeType: "application/json",
              },
            }),
          },
        );
      } catch (error) {
        throw new ProviderUnavailableError(`Gemini network failure: ${error.message}`, { provider: "gemini" });
      }

      if (!response.ok) {
        const ErrorType = unavailableStatus(response.status) ? ProviderUnavailableError : ProviderRequestError;
        throw new ErrorType(`Gemini request failed with HTTP ${response.status}`, {
          provider: "gemini",
          status: response.status,
        });
      }

      const payload = await response.json();
      const text = payload?.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("") ?? "";
      return parseJsonObject(text);
    },
  };
}

export function createGroqProvider({
  apiKey,
  model = "openai/gpt-oss-20b",
  fetchImpl = fetch,
} = {}) {
  return {
    metadata() {
      return { id: "groq", model };
    },
    async health() {
      if (!apiKey) return { ok: false, provider: "groq", reason: "missing_api_key" };
      try {
        const response = await fetchImpl("https://api.groq.com/openai/v1/models", {
          headers: { authorization: `Bearer ${apiKey}` },
        });
        return { ok: response.ok, provider: "groq", status: response.status };
      } catch {
        return { ok: false, provider: "groq", reason: "network_error" };
      }
    },
    async generate(prompt) {
      if (!apiKey) throw new ProviderRequestError("Groq API key is not configured", { provider: "groq" });

      let response;
      try {
        response = await fetchImpl("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            authorization: `Bearer ${apiKey}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            model,
            temperature: 0,
            messages: [
              {
                role: "system",
                content: "Return valid JSON only. Never invent evidence IDs.",
              },
              { role: "user", content: prompt },
            ],
          }),
        });
      } catch (error) {
        throw new ProviderUnavailableError(`Groq network failure: ${error.message}`, { provider: "groq" });
      }

      if (!response.ok) {
        const ErrorType = unavailableStatus(response.status) ? ProviderUnavailableError : ProviderRequestError;
        throw new ErrorType(`Groq request failed with HTTP ${response.status}`, {
          provider: "groq",
          status: response.status,
        });
      }

      const payload = await response.json();
      return parseJsonObject(payload?.choices?.[0]?.message?.content ?? "");
    },
  };
}
