import { expect, test } from "../testing";
import { type BackgroundOptions, songRate, trackStart } from "./background-track";

const options = (changes: Partial<BackgroundOptions> = {}): BackgroundOptions => ({ enabled: true, speed: 1, offset: 0, loop: false, ...changes });
/** Song time at half speed, from audio second 10. */
const halfSpeed = (songTime: number) => 10 + songTime * 2;

test("the_track_starts_where_the_song_is", () => {
  expect(songRate(4, 5, halfSpeed)).toBe(0.5);
  // Mid-song, the track starts at once, as far in as the song is past the offset.
  expect(trackStart(4, 5, halfSpeed, options({ offset: 1 }), 60)).toEqual({ when: 18, position: 3, rate: 0.5 });
  // The track's speed scales both its position and its rate.
  expect(trackStart(4, 5, halfSpeed, options({ speed: 1.5 }), 60)).toEqual({ when: 18, position: 6, rate: 0.75 });
});

test("the_track_waits_for_its_offset_and_ends_unless_looped", () => {
  expect(trackStart(0, 1, halfSpeed, options({ offset: 2 }), 60)).toBeUndefined();
  expect(trackStart(1.5, 2.5, halfSpeed, options({ offset: 2 }), 60)).toEqual({ when: 14, position: 0, rate: 0.5 });
  expect(trackStart(70, 71, halfSpeed, options(), 60)).toBeUndefined();
  expect(trackStart(70, 71, halfSpeed, options({ loop: true }), 60)?.position).toBe(10);
  // A negative offset skips the track's start.
  expect(trackStart(0, 1, halfSpeed, options({ offset: -5 }), 60)?.position).toBe(5);
});
