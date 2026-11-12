/**
 * `test` for every test file of this project: bun:test's own, which also writes `(pass) <name>` on
 * stderr once the test's body returns.
 *
 * A goal's check reads that line to know a named test ran and passed. Bun's reporter writes the same
 * line, but omits it when it runs under an AI agent. Under a plain console the line appears twice.
 */
import { test as bunTest } from "bun:test";

export { afterAll, afterEach, beforeAll, beforeEach, describe, expect } from "bun:test";

/** A test named `name`. `timeout` is in ms, bun:test's 5 s without one. */
export function test(name: string, body: () => void | Promise<void>, timeout?: number): void {
  bunTest(
    name,
    async () => {
      await body();
      process.stderr.write(`(pass) ${name}\n`);
    },
    timeout,
  );
}
