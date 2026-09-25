import assert from "node:assert/strict";
import test from "node:test";
import { createBackendServer } from "./server.mjs";

async function start() {
  const server = createBackendServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  return {
    server,
    url: `http://127.0.0.1:${address.port}`,
  };
}

async function close(server) {
  await new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
}

test("health and OpenAPI endpoints are available", async () => {
  const app = await start();

  try {
    const health = await fetch(`${app.url}/health`);
    assert.equal(health.status, 200);
    assert.deepEqual(await health.json(), { status: "ok" });

    const openapi = await fetch(`${app.url}/openapi.json`);
    assert.equal(openapi.status, 200);
    const document = await openapi.json();
    assert.equal(document.openapi, "3.1.0");
    assert.ok(document.paths["/tasks"]);
  } finally {
    await close(app.server);
  }
});

test("creates and retrieves a task", async () => {
  const app = await start();

  try {
    const created = await fetch(`${app.url}/tasks`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: "Verify proof pack" }),
    });

    assert.equal(created.status, 201);
    const task = await created.json();
    assert.deepEqual(task, {
      id: "task-1",
      title: "Verify proof pack",
      status: "OPEN",
    });

    const fetched = await fetch(`${app.url}/tasks/task-1`);
    assert.equal(fetched.status, 200);
    assert.deepEqual(await fetched.json(), task);
  } finally {
    await close(app.server);
  }
});

test("rejects invalid input and returns 404 for missing resources", async () => {
  const app = await start();

  try {
    const invalid = await fetch(`${app.url}/tasks`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: "   " }),
    });
    assert.equal(invalid.status, 400);
    assert.deepEqual(await invalid.json(), { error: "title_required" });

    const missing = await fetch(`${app.url}/tasks/task-999`);
    assert.equal(missing.status, 404);
    assert.deepEqual(await missing.json(), { error: "not_found" });
  } finally {
    await close(app.server);
  }
});
