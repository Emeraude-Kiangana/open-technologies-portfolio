import { answerSupportQuestion } from "../src/support/server.mjs";

function allowedOrigin(origin, configuredOrigin) {
  if (!configuredOrigin) return true;
  return origin === configuredOrigin;
}

export default async function handler(req, res) {
  const configuredOrigin = process.env.SUPPORT_ALLOWED_ORIGIN || "";
  const origin = req.headers?.origin || "";

  if (!allowedOrigin(origin, configuredOrigin)) {
    res.statusCode = 403;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: "origin_not_allowed" }));
    return;
  }

  if (origin) {
    res.setHeader("access-control-allow-origin", origin);
    res.setHeader("vary", "Origin");
  }
  res.setHeader("access-control-allow-methods", "POST, OPTIONS");
  res.setHeader("access-control-allow-headers", "content-type");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: "method_not_allowed" }));
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const question = String(body.question ?? "").trim().slice(0, 1200);

  const answer = await answerSupportQuestion(question, {
    env: process.env,
    fetchImpl: fetch,
  });

  res.statusCode = 200;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(answer));
}
