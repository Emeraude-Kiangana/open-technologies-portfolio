import { createServer } from "node:http";

export const openApiDocument = {
  openapi: "3.1.0",
  info: {
    title: "Backend Prototype Proof",
    version: "0.1.0",
  },
  paths: {
    "/health": {
      get: {
        responses: {
          200: { description: "Service is healthy" },
        },
      },
    },
    "/tasks": {
      post: {
        responses: {
          201: { description: "Task created" },
          400: { description: "Invalid input" },
        },
      },
    },
    "/tasks/{id}": {
      get: {
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          200: { description: "Task found" },
          404: { description: "Task not found" },
        },
      },
    },
  },
};

function json(res, status, body) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

export function createBackendServer() {
  const tasks = new Map();
  let sequence = 0;

  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? "/", "http://localhost");

      if (req.method === "GET" && url.pathname === "/health") {
        json(res, 200, { status: "ok" });
        return;
      }

      if (req.method === "GET" && url.pathname === "/openapi.json") {
        json(res, 200, openApiDocument);
        return;
      }

      if (req.method === "POST" && url.pathname === "/tasks") {
        const body = await readJson(req);
        const title = String(body.title ?? "").trim();

        if (!title) {
          json(res, 400, { error: "title_required" });
          return;
        }

        sequence += 1;
        const task = {
          id: `task-${sequence}`,
          title,
          status: "OPEN",
        };
        tasks.set(task.id, task);
        json(res, 201, task);
        return;
      }

      const match = url.pathname.match(/^\/tasks\/(task-\d+)$/);
      if (req.method === "GET" && match) {
        const task = tasks.get(match[1]);
        if (!task) {
          json(res, 404, { error: "not_found" });
          return;
        }

        json(res, 200, task);
        return;
      }

      json(res, 404, { error: "not_found" });
    } catch {
      json(res, 400, { error: "invalid_request" });
    }
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT || 8080);
  const server = createBackendServer();
  server.listen(port, "0.0.0.0", () => {
    console.log(`BACKEND_PROOF_LISTENING=${port}`);
  });
}
