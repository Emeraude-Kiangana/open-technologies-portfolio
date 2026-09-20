import { ProviderUnavailableError } from "./providers.mjs";

export async function generateWithFallback(providers, prompt) {
  if (!Array.isArray(providers) || providers.length === 0) {
    return { result: null, provider: null, errors: [] };
  }

  const errors = [];

  for (const provider of providers) {
    try {
      const result = await provider.generate(prompt);
      return {
        result,
        provider: provider.metadata().id,
        errors,
      };
    } catch (error) {
      errors.push({
        provider: provider.metadata().id,
        name: error.name,
        message: error.message,
        status: error.status,
      });

      if (!(error instanceof ProviderUnavailableError)) {
        throw error;
      }
    }
  }

  return { result: null, provider: null, errors };
}
