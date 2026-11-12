/**
 * The take history's key of each Hard version of our songs, so the `legendary` badge can find their
 * takes. The Hard version's id is `legendary`, which names its file and this badge.
 *
 * The take history of `src/input/history.ts` keys a song by `songKey`, a hash of its notes, and never
 * by its file. Reading the 42 files on each show would cost about 242 kB, so the keys are written here.
 * `legendary-keys.test.ts` reads each `public/songs/ours/<slug>/legendary.mid` and fails on any key
 * that differs or is missing. Its message prints the rows to paste here.
 */

/** Each Hard version's slug under `public/songs/ours/` and its `songKey`. */
export const LEGENDARY_KEYS: ReadonlyMap<string, string> = new Map([
  ["alle-jahre-wieder", "notes-2e6b0361"],
  ["angels-we-have-heard-on-high", "notes-1016b10f"],
  ["away-in-a-manger", "notes-45c8377a"],
  ["canon-in-d", "notes-5f86f458"],
  ["carol-of-the-bells", "notes-1f94e00b"],
  ["deck-the-halls", "notes-93d92908"],
  ["ding-dong-merrily-on-high", "notes-e1467459"],
  ["es-ist-ein-ros-entsprungen", "notes-7a8618a5"],
  ["fur-elise", "notes-3a4d9945"],
  ["god-rest-ye-merry-gentlemen", "notes-f99881fa"],
  ["good-king-wenceslas", "notes-1e57b3be"],
  ["hall-of-the-mountain-king", "notes-0c91e355"],
  ["happy-birthday", "notes-956fe448"],
  ["hark-the-herald-angels-sing", "notes-22af984c"],
  ["ihr-kinderlein-kommet", "notes-9d3ecb1a"],
  ["it-came-upon-the-midnight-clear", "notes-906dd5a4"],
  ["jingle-bells", "notes-c3baf766"],
  ["jolly-old-saint-nicholas", "notes-5c260c2c"],
  ["joy-to-the-world", "notes-1d2ad1c2"],
  ["kling-gloeckchen", "notes-855e3b16"],
  ["kommet-ihr-hirten", "notes-3ccacdd6"],
  ["leise-rieselt-der-schnee", "notes-ace7cf51"],
  ["mary-had-a-little-lamb", "notes-0abab3f5"],
  ["morgen-kinder", "notes-9a4561a9"],
  ["o-christmas-tree", "notes-eb9eebb3"],
  ["o-come-all-ye-faithful", "notes-5a2380dc"],
  ["o-du-froehliche", "notes-bec79394"],
  ["o-holy-night", "notes-59e2cbb0"],
  ["o-little-town-of-bethlehem", "notes-be69dd98"],
  ["ode-to-joy", "notes-dc3cc863"],
  ["old-macdonald-had-a-farm", "notes-03945d5e"],
  ["row-row-row-your-boat", "notes-ff1f3acf"],
  ["silent-night", "notes-59993f58"],
  ["suesser-die-glocken", "notes-5760b1fc"],
  ["the-entertainer", "notes-e71d5443"],
  ["the-first-noel", "notes-5580224e"],
  ["the-twelve-days-of-christmas", "notes-f916c7e5"],
  ["tochter-zion", "notes-fed0d8a4"],
  ["twinkle-twinkle-little-star", "notes-a4f0aee7"],
  ["up-on-the-housetop", "notes-34580260"],
  ["we-three-kings", "notes-6ccaf85b"],
  ["yankee-doodle", "notes-ec18b168"],
]);
