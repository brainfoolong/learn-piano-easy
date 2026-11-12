/** A lesson of *Learn Piano* in English: its bar, its band, its steps and its end screen. */
import { formatNumber } from "../format";

export const learnLesson = {
  /** The step bar's accessible name, such as "Step 2 of 6". */
  stepOf: (step: number, count: number) => `Step ${formatNumber("en", step)} of ${formatNumber("en", count)}`,
  leave: "Leave the lesson",
  /** The dialog that asks before the learner leaves a running lesson. */
  leaveDialog: {
    title: "Leave this lesson?",
    body: "Your progress in this lesson is kept only once it ends.",
    stay: "Keep learning",
    leave: "Leave",
    close: "Close",
  },
  /** The button under a step that needs touch or the pedal, which swaps in its listening and quiz. */
  lacks: {
    touch: "My keyboard cannot play loud and soft",
    pedal: "My keyboard has no pedal",
  },
  loading: "Loading the lesson…",
  missing: "This lesson does not exist.",
  backToCourse: "Back to the course",
  /** The feedback band. */
  band: {
    continue: "Continue",
    right: "Right!",
    tryAgain: "Not quite. Try again.",
  },
  demo: {
    play: "Play",
    playAgain: "Play again",
    skip: "Skip",
    /** The keyboard's accessible name. */
    piano: "The piano playing the example",
    playing: "Playing",
  },
  quiz: {
    /** The list of answers' accessible name. */
    answers: "Answers",
    wrong: "Not quite. Try another answer.",
    hint: "The highlighted answer is right.",
  },
  findKey: {
    /** The keyboard's accessible name. */
    piano: "The piano. Press the key the step names.",
    /** What a screen reader calls each mark of the keys. */
    marks: { next: "This key", correct: "Right", mistake: "Not this one" },
    wrong: "That is another key. Try again.",
    hint: "The highlighted key is the one.",
    /** What the band says when a timed step's seconds run out. */
    timeUp: "Time is up.",
    /** The seconds a timed step has left. */
    secondsLeft: (seconds: number) => `${seconds} s`,
  },
  playNotes: {
    /** The keyboard's accessible name. */
    piano: "The piano. Play the phrase in order.",
    /** What a screen reader calls each mark of the keys. */
    marks: { next: "Play this next", correct: "Played", mistake: "Not this one" },
    wrong: "That is another note. Try again.",
    /** The hint after `HINT_AFTER` mistakes, with the next note's name, such as `E4`. */
    hint: (note: string) => `The next note is ${note}.`,
    /** The hint before a chord, with its notes' names, such as `C3` and `E4`. */
    hintChord: (...notes: string[]) => `Next, play ${notes.slice(0, -1).join(", ")} and ${notes.at(-1)} together.`,
    /** What the band says when the right key was played with the wrong touch or pedal, on a MIDI keyboard. */
    expression: {
      "too-loud": "Right key, but too loud. Play it softly.",
      "too-soft": "Right key, but too soft. Play it loudly.",
      "pedal-up": "Right key. Hold the pedal down as you play it.",
      "pedal-down": "Right key. Lift the pedal before you play it.",
    },
  },
  listen: {
    /** Which pair the learner is on, such as "Pair 2 of 5". */
    question: (n: number, count: number) => `Pair ${formatNumber("en", n)} of ${formatNumber("en", count)}`,
    playAgain: "Play again",
    /** The list of answers' accessible name. */
    group: "Is the second note higher, lower or the same?",
    /** Each answer, about the second note compared with the first. */
    answers: { higher: "Higher", lower: "Lower", same: "The same" },
    wrong: "Not quite. Listen again and try another answer.",
    hint: "The highlighted answer is right.",
    /** The band after a round with too few right, before it starts over. */
    roundAgain: (right: number, asked: number) => `${formatNumber("en", right)} of ${formatNumber("en", asked)} were right. Let's play another round.`,
  },
  readNote: {
    /** The staff's accessible name, which never gives the note away. */
    staff: { treble: "A note on the treble staff", bass: "A note on the bass staff" },
    /** Which question the learner is on, such as "Note 2 of 5". */
    count: (n: number, total: number) => `Note ${formatNumber("en", n)} of ${formatNumber("en", total)}`,
    /** The name buttons' accessible group name. */
    answers: "Note names",
    /** How a button writes each letter of C D E F G A B. */
    letters: { C: "C", D: "D", E: "E", F: "F", G: "G", A: "A", B: "B" },
    /** The keyboard's accessible name. */
    piano: "The piano. Play the note on the staff.",
    /** What a screen reader calls each mark of the keys. */
    marks: { next: "This key", correct: "Right", mistake: "Not this one" },
    wrongName: "That is another note. Look again.",
    wrongKey: "That is another key. Try again.",
    hintName: "The highlighted name is right.",
    hintKey: "The highlighted key is the one.",
    /** The band, when a round had too few right answers and starts over. */
    again: "A few were not right yet. Let's go through them again.",
  },
  rhythmTap: {
    start: "Start",
    /** The status while the metronome counts in. */
    listen: "Listen: one bar to count in.",
    /** The status while the learner taps. */
    tap: "Now tap any key with every click.",
    /** The keyboard's accessible name. */
    piano: "The tap pad. Press any key on the beat.",
    /** What a screen reader calls each mark of the keys. */
    marks: { next: "Tap here", correct: "On the beat", mistake: "Off the beat" },
    /** The band after a round with too few beats tapped. */
    short: (hits: number, beats: number) => `${formatNumber("en", hits)} of ${formatNumber("en", beats)} beats got a tap. Try again.`,
    hint: "Tap the moment you hear the click. The dots flash on the beat.",
    /** The status while the learner plays a phrase in time. */
    play: "Now play each note on its click.",
    /** The keyboard's accessible name, for a phrase played in time. */
    phrasePiano: "The keys. Play the phrase in time with the clicks.",
    /** The band after a phrase's round with too few notes on time. */
    shortNotes: (hits: number, notes: number) => `${formatNumber("en", hits)} of ${formatNumber("en", notes)} notes came on time. Try again.`,
    /** The band after a round in which a key sounded during a rest. */
    restSounded: "A key sounded in a rest. Lift your finger and stay silent there.",
    phraseHint: "Play each note on its click, and lift the key before a rest. The dots flash on the beat.",
  },
  song: {
    play: "Play it in the player",
    /** The goal before the first try, with the accuracy the step asks, as a whole percent. */
    goal: (percent: number) => `Play it with ${formatNumber("en", percent)}% of the notes right.`,
    /** After the learner came back without a take that met the goal. */
    notYet: (percent: number) => `The song waits for you. Play it again whenever you like, and aim for ${formatNumber("en", percent)}%.`,
    /** After a take that met the goal, with its accuracy. */
    played: (percent: number) => `You played it with ${formatNumber("en", percent)}% of the notes right.`,
  },
  recap: {
    heading: "What you learned",
  },
  end: {
    heading: "Lesson complete",
    /** The stars' accessible name. */
    stars: (n: number) => `${formatNumber("en", n)} of ${formatNumber("en", 3)} stars`,
    again: "Play again",
    saving: "Saving your progress…",
    saved: "Saved on this device.",
    unsaved: "This browser keeps no storage, so this result lasts until you close the tab.",
    failed: "Your progress could not be saved.",
    retry: "Try again",
    /** The XP the run earned, with its number already formatted. */
    xp: (number: string) => `+${number} XP`,
    /** The level bar's label: the level, and the XP still needed for the next. */
    level: (level: number, toNext: number) => `Level ${formatNumber("en", level)}: ${formatNumber("en", toNext)} XP to level ${formatNumber("en", level + 1)}`,
    /** After a skip test that opened its world. */
    skipOpened: (world: string) => `Every lesson of ${world} is open now.`,
    /** After a skip test with too few stars, with the stars that open the world. */
    skipShort: (stars: number) => `${formatNumber("en", stars)} stars open this world. Try again whenever you like.`,
  },
  /** The full-screen moments of a new level and a new badge. */
  moment: {
    continue: "Continue",
    level: {
      heading: "Level up!",
      name: (level: number) => `Level ${formatNumber("en", level)}`,
      text: "Every lesson takes you further. Keep going!",
    },
    /** A badge's name and sentence come from the badges' catalog. */
    badge: { heading: "New badge!" },
  },
};
