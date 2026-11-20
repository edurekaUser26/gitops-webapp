const { test, after } = require("node:test");
const assert = require("node:assert");
const server = require("../server");

after(() => server.close());

test("home page returns the welcome message", async () => {
  const response = await fetch("http://localhost:3000/");
  assert.strictEqual(response.status, 200);
  assert.strictEqual(await response.text(), "Hello from the GitOps web app, version 1.1.0!\n");
});

test("health endpoint returns OK", async () => {
  const response = await fetch("http://localhost:3000/health");
  assert.strictEqual(response.status, 200);
  assert.strictEqual(await response.text(), "OK\n");
});