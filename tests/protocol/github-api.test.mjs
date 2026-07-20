import assert from "node:assert/strict";
import test from "node:test";
import { githubApiJson } from "../../scripts/lib/github-api.mjs";

const response = (status, payload, retryAfter = null) => ({
  ok: status >= 200 && status < 300,
  status,
  json: async () => payload,
  text: async () => JSON.stringify(payload),
  headers: { get: (name) => name.toLowerCase() === "retry-after" ? retryAfter : null }
});

test("GitHub API requests retry a transient 503 and then succeed", async () => {
  const responses = [response(503, { message: "temporary" }), response(200, { ok: true })];
  const delays = [];
  const result = await githubApiJson({
    url: "https://api.github.test/resource",
    token: "test-token",
    fetchImpl: async () => responses.shift(),
    sleep: async (delay) => delays.push(delay)
  });
  assert.deepEqual(result, { ok: true });
  assert.deepEqual(delays, [250]);
});

test("GitHub API requests do not retry permanent failures", async () => {
  let attempts = 0;
  await assert.rejects(() => githubApiJson({
    url: "https://api.github.test/missing",
    token: "test-token",
    fetchImpl: async () => { attempts += 1; return response(404, { message: "missing" }); },
    sleep: async () => {}
  }), (error) => error.status === 404);
  assert.equal(attempts, 1);
});

test("GitHub API requests fail closed after bounded transient retries", async () => {
  let attempts = 0;
  await assert.rejects(() => githubApiJson({
    url: "https://api.github.test/unavailable",
    token: "test-token",
    fetchImpl: async () => { attempts += 1; return response(503, { message: "unavailable" }); },
    sleep: async () => {},
    maxAttempts: 3
  }), (error) => error.status === 503);
  assert.equal(attempts, 3);
});
