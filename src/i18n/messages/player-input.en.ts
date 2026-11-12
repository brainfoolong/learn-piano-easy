/** The player's input in English: the devices, the input modes, the score panel, the key dialogs and the PDF dialog. */
import type { GameEventKind } from "../../game/referee";
import { formatNumber, plural } from "../format";

export const playerInput = {
  /** A share as a whole percent, such as `90%`. */
  percent: (n: number) => `${formatNumber("en", n)}%`,
  devices: {
    heading: "MIDI devices",
    connect: "Connect MIDI devices",
    input: "MIDI input",
    output: "MIDI output",
    everyInput: "Every input",
    noOutput: "No output",
    /** A chosen device that is unplugged. */
    notConnected: (name: string) => `${name} (not connected)`,
    unsupported: "This browser cannot reach MIDI devices. Chrome, Edge and Firefox can.",
    off: "Connect your MIDI devices to play from a MIDI keyboard.",
    asking: "Waiting for the browser's permission…",
    denied: "MIDI access was refused. Allow it in the browser's site settings, then connect again.",
    noInputs: "No MIDI device is plugged in.",
    inputsFound: (n: number) => `${formatNumber("en", n)} MIDI ${plural("en", n, { one: "input", other: "inputs" })} found.`,
  },
  freePlay: {
    heading: "Free play",
    record: "Record",
    stop: "Stop",
    stopRecording: "Stop recording",
    save: "Save",
    saveTitle: "Save as a MIDI file",
    /** The take's length while recording, such as `Recording 1:05`. */
    recording: (clock: string) => `Recording ${clock}`,
    recorded: (n: number) => `Recorded ${formatNumber("en", n)} ${plural("en", n, { one: "note", other: "notes" })}. Save keeps them as a MIDI file.`,
    hint: "Play freely, or press Record to keep what you play.",
  },
  history: {
    empty: "No finished takes of this song yet. Play it to its end with scoring on.",
    hands: { both: "Both", right: "Right", left: "Left" },
    columns: {
      date: "Date",
      speed: "Speed",
      hands: "Hands",
      accuracy: "Accuracy",
      hits: "Hits",
      perfect: "Perfect",
      misses: "Misses",
      mistakes: "Mistakes",
    },
  },
  keyBinding: {
    help: "Click a note's key, then press the computer key that should play it. Escape closes this dialog.",
    /** The settings panel's button that opens the dialog. */
    open: "Change keys",
  },
  learnRange: {
    lowest: "Press your lowest key…",
    highest: "Now your highest key…",
    start: "Learn from your keyboard",
    title: "Learn the range from your keyboard",
  },
  pitchPractice: {
    heading: "Pitch practice",
    hear: "Hear it",
    hearTitle: "Hear the note",
    again: "Start again",
    againTitle: "Start a new round",
    empty: "No notes to ask",
    emptyHint: "The key has no notes between the chosen notes on your keyboard.",
    done: "Round done",
    found: (n: number, count: number) => `${formatNumber("en", n)} of ${formatNumber("en", count)} notes found.`,
    play: (note: string) => `Play ${note}`,
    progress: (i: number, count: number) => `Note ${formatNumber("en", i)} of ${formatNumber("en", count)}`,
    wrong: (note: string) => `Not ${note}. Try again.`,
    right: (note: string) => `${note} is right.`,
    results: "Pitch practice results",
    mistakes: (n: number, count: number) =>
      `${n === 0 ? "No" : formatNumber("en", n)} ${plural("en", n, { one: "mistake", other: "mistakes" })} in ${formatNumber("en", count)} notes.`,
    columns: { note: "Note", asked: "Asked", mistakes: "Mistakes", playedInstead: "Played instead" },
    firstTry: (n: number, count: number) => `${formatNumber("en", n)} of ${formatNumber("en", count)} found at the first try.`,
  },
  scoring: {
    heading: "Score",
    judgements: { perfect: "Perfect", hit: "Hit", mistake: "Mistake", miss: "Miss" },
    counts: (hits: number, perfect: number, misses: number, mistakes: number) =>
      `Hits ${formatNumber("en", hits)} · Perfect ${formatNumber("en", perfect)} · Misses ${formatNumber("en", misses)} · Mistakes ${formatNumber("en", mistakes)}`,
    history: "History",
    /** The History button's tooltip, and the title of the dialog it opens. */
    historyTitle: "Your takes of this song",
    readError: "The history could not be read.",
    saved: "Take saved to the history.",
    saveError: "This take could not be saved.",
  },
  /** The game's screen over the scene: its panel, its popups and the card that sums up a take. */
  game: {
    /** The name each difficulty shows as in the panel. */
    levels: { easy: "Easy", normal: "Normal", hard: "Hard" },
    /** The word each judgement pops up as, over its key. */
    words: {
      perfect: "Perfect",
      great: "Great",
      good: "Good",
      hold: "Hold",
      release: "Clean",
      wrong: "Wrong note",
      miss: "Miss",
      short: "Too short",
      long: "Too long",
      late: "Late",
    } satisfies Record<GameEventKind, string>,
    name: "Game",
    score: "Score",
    combo: "combo",
    multiplier: "Multiplier",
    /** A held note's points under the word of its release, such as `Hold +120`. */
    held: (points: string) => `Hold ${points}`,
    /** The burst of a rising multiplier, such as `Combo ×3!`. */
    burst: (multiplier: number) => `Combo ×${formatNumber("en", multiplier)}!`,
    inARow: (combo: number) => `${formatNumber("en", combo)} in a row`,
    /** What a screen reader hears as the multiplier rises. */
    announce: (multiplier: number, combo: number) =>
      `Combo times ${formatNumber("en", multiplier)}, ${formatNumber("en", combo)} in a row.`,
    result: "Take result",
    complete: "Take complete",
    bestCombo: (combo: number) => `Best combo ${formatNumber("en", combo)}`,
    stats: { perfect: "Perfect", great: "Great", good: "Good", wrong: "Wrong", miss: "Miss", late: "Late", short: "Too short", long: "Too long" },
    /** The tag on the result of a take played with wait mode on. */
    helped: "With “Wait for your notes”",
    close: "Close",
    closeName: "Close the take's result",
  },
  pdf: {
    noSong: "Open a song first, then save its notes as a PDF.",
    intro: (title: string) => `Saves the falling notes of ${title} above a piano, a few seconds of the song on each page.`,
    secondsPerPage: "Seconds per page",
    background: "Use background colours",
    pages: (pages: number, seconds: number) =>
      `${formatNumber("en", pages)} ${plural("en", pages, { one: "page", other: "pages" })}, each ${formatNumber("en", seconds)} seconds of the song.`,
    save: "Save PDF",
    /** The heading printed on each page, such as `Song   0:05 to 0:10   page 2 of 3`. */
    pageHeading: (title: string, from: string, to: string, page: number, count: number) =>
      `${title}   ${from} to ${to}   page ${formatNumber("en", page)} of ${formatNumber("en", count)}`,
  },
};
