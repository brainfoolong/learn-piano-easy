import { expect, test } from "../testing";
import { contentHash, inParallel, isCurrent } from "./current";

test("the_content_hash_is_the_head_of_the_sha_256", async () => {
  // The SHA-256 of "abc" begins ba7816bf8f01cfea.
  expect(await contentHash(new TextEncoder().encode("abc"))).toBe("ba7816bf8f01cfea");
});

test("a_response_is_current_when_its_bytes_hash_to_the_hash_and_stays_unread", async () => {
  const response = new Response("abc");
  expect(await isCurrent(response, "ba7816bf8f01cfea")).toBe(true);
  expect(await isCurrent(response, "0000000000000000")).toBe(false);
  expect(await response.text()).toBe("abc");
});

test("the_pool_runs_every_task_and_never_more_than_its_limit_at_once", async () => {
  let running = 0;
  let most = 0;
  const done: number[] = [];
  await inParallel([1, 2, 3, 4, 5, 6, 7], 3, async (n) => {
    most = Math.max(most, ++running);
    await new Promise((resolve) => setTimeout(resolve, 1));
    running--;
    done.push(n);
  });
  expect(done.sort()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(most).toBe(3);
});
