import assert from "node:assert/strict";
import { createServer } from "node:http";
import test from "node:test";
import { transferRecords } from "./adapter.mjs";

async function listen(handler) {
  const server = createServer(handler);
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

test("transfers and transforms records between two HTTP services", async () => {
  let received = null;

  const source = await listen((req, res) => {
    if (req.method === "GET" && req.url === "/items") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          items: [
            { id: 101, name: "Alpha" },
            { id: 102, name: "Beta" },
          ],
        }),
      );
      return;
    }

    res.writeHead(404).end();
  });

  const sink = await listen(async (req, res) => {
    if (req.method === "POST" && req.url === "/records") {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      received = JSON.parse(Buffer.concat(chunks).toString("utf8"));

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ accepted: received.records.length }));
      return;
    }

    res.writeHead(404).end();
  });

  try {
    const result = await transferRecords({
      sourceUrl: source.url,
      sinkUrl: sink.url,
    });

    assert.deepEqual(result, {
      fetched: 2,
      delivered: 2,
      records: [
        { external_id: "101", label: "Alpha" },
        { external_id: "102", label: "Beta" },
      ],
    });

    assert.deepEqual(received, {
      records: [
        { external_id: "101", label: "Alpha" },
        { external_id: "102", label: "Beta" },
      ],
    });
  } finally {
    await close(source.server);
    await close(sink.server);
  }
});

test("fails closed when the destination API rejects the request", async () => {
  const source = await listen((req, res) => {
    if (req.method === "GET" && req.url === "/items") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ items: [{ id: 1, name: "Rejected" }] }));
      return;
    }

    res.writeHead(404).end();
  });

  const sink = await listen((req, res) => {
    res.writeHead(503, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "unavailable" }));
  });

  try {
    await assert.rejects(
      transferRecords({ sourceUrl: source.url, sinkUrl: sink.url }),
      /sink request failed: 503/,
    );
  } finally {
    await close(source.server);
    await close(sink.server);
  }
});
