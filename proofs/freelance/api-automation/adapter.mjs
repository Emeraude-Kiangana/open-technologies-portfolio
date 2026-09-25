export async function transferRecords({
  sourceUrl,
  sinkUrl,
  fetchImpl = fetch,
}) {
  if (!sourceUrl || !sinkUrl) {
    throw new Error("sourceUrl and sinkUrl are required");
  }

  const sourceResponse = await fetchImpl(`${sourceUrl}/items`, {
    headers: { accept: "application/json" },
  });

  if (!sourceResponse.ok) {
    throw new Error(`source request failed: ${sourceResponse.status}`);
  }

  const sourceBody = await sourceResponse.json();
  if (!Array.isArray(sourceBody.items)) {
    throw new Error("source payload must contain an items array");
  }

  const records = sourceBody.items.map((item) => ({
    external_id: String(item.id),
    label: String(item.name ?? "").trim(),
  }));

  const sinkResponse = await fetchImpl(`${sinkUrl}/records`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({ records }),
  });

  if (!sinkResponse.ok) {
    throw new Error(`sink request failed: ${sinkResponse.status}`);
  }

  const sinkBody = await sinkResponse.json();

  return {
    fetched: sourceBody.items.length,
    delivered: sinkBody.accepted,
    records,
  };
}
