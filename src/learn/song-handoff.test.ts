import { expect, test } from "../testing";
import { SongHandoff, type SongRequest } from "./song-handoff";

const request = (file: string): SongRequest => ({ file, practice: 0, accuracy: 0.8, goal: "Play it." });

test("a_take_ends_the_request_and_reaches_the_step", async () => {
  const handoff = new SongHandoff();
  const changes: (string | undefined)[] = [];
  handoff.subscribe(() => changes.push(handoff.current?.file));
  const asked = handoff.ask(request("ours/a/common.mid"));
  expect(handoff.current?.file).toBe("ours/a/common.mid");
  handoff.end({ accuracy: 0.9 });
  expect(await asked).toEqual({ accuracy: 0.9 });
  expect(handoff.current).toBeUndefined();
  expect(changes).toEqual(["ours/a/common.mid", undefined]);
});

test("a_new_request_ends_the_last_without_a_take", async () => {
  const handoff = new SongHandoff();
  const first = handoff.ask(request("ours/a/common.mid"));
  const second = handoff.ask(request("ours/b/common.mid"));
  expect(await first).toBeUndefined();
  handoff.end(undefined);
  handoff.end({ accuracy: 1 });
  expect(await second).toBeUndefined();
});
