/**
 * A Playwright reporter that writes `(pass) <test name>` on stderr for each passing test.
 *
 * `looper verify` proves a check's tests ran by finding these lines, as `src/testing.ts` does for Bun.
 * Playwright's list reporter marks a pass differently from one terminal to the next, so it is not read.
 *
 * A `test.describe` group passes as one test once every test in it has passed, such as
 * `each_step_kind_passes_the_layout_checks`, which runs a test per lesson so the workers share them.
 */
import type { FullResult, Reporter, Suite, TestCase, TestResult } from "@playwright/test/reporter";

export default class PassReporter implements Reporter {
  private root: Suite | undefined;

  onBegin(_config: unknown, suite: Suite): void {
    this.root = suite;
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    if (result.status === "passed") process.stderr.write(`(pass) ${test.title}\n`);
  }

  onEnd(_result: FullResult): void {
    const groups = (suite: Suite): Suite[] => suite.suites.flatMap((child) => [...(child.type === "describe" ? [child] : []), ...groups(child)]);
    for (const group of this.root === undefined ? [] : groups(this.root)) {
      const tests = group.allTests();
      if (tests.length > 0 && tests.every((test) => test.results.some((result) => result.status === "passed"))) {
        process.stderr.write(`(pass) ${group.title}\n`);
      }
    }
  }

  printsToStdio(): boolean {
    return false;
  }
}
