import { expect, test } from "../testing";
import { ranged } from "./ranged";

/** A cached file of the ten bytes 0 to 9, as a video's type. */
const file = () => new Response(new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), { headers: { "content-type": "video/mp4" } });

const ask = (range?: string) => new Request("https://example.test/a.mp4", { headers: range ? { range } : {} });

async function bytesOf(response: Response): Promise<number[]> {
  return [...new Uint8Array(await response.arrayBuffer())];
}

test("a_range_is_cut_from_the_cached_file_as_a_partial_answer", async () => {
  const answer = await ranged(ask("bytes=2-4"), file());
  expect(answer.status).toBe(206);
  expect(answer.headers.get("content-range")).toBe("bytes 2-4/10");
  expect(answer.headers.get("content-length")).toBe("3");
  expect(answer.headers.get("content-type")).toBe("video/mp4");
  expect(await bytesOf(answer)).toEqual([2, 3, 4]);
});

test("an_open_range_and_a_suffix_range_run_to_the_files_end", async () => {
  const open = await ranged(ask("bytes=0-"), file());
  expect(open.headers.get("content-range")).toBe("bytes 0-9/10");
  expect(await bytesOf(open)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const suffix = await ranged(ask("bytes=-3"), file());
  expect(await bytesOf(suffix)).toEqual([7, 8, 9]);
  const past = await ranged(ask("bytes=8-99"), file());
  expect(past.headers.get("content-range")).toBe("bytes 8-9/10");
});

test("a_range_past_the_end_gets_416_and_no_range_gets_the_whole_file", async () => {
  const beyond = await ranged(ask("bytes=10-"), file());
  expect(beyond.status).toBe(416);
  expect(beyond.headers.get("content-range")).toBe("bytes */10");
  for (const range of [undefined, "bytes=0-1,4-5", "items=0-1"]) {
    const whole = await ranged(ask(range), file());
    expect({ range, status: whole.status, bytes: await bytesOf(whole) }).toEqual({ range, status: 200, bytes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] });
  }
});
