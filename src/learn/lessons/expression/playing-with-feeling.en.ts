/** *Playing with feeling* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const playingWithFeelingEn = {
  title: "Playing with feeling",
  steps: {
    "all-the-marks": {
      text: "You now know the marks of this world, such as p and f, hairpins, slurs, staccato dots and rit. Together they tell you how a piece should feel.",
    },
    "read-the-marks": {
      text: "A tune starts with p. A slur joins its first four notes, and rit. stands over its last bar. How do you play it?",
      answers: ["Loud and short, speeding up", "Loud and smooth, keeping the tempo", "Soft and short, keeping the tempo", "Soft and smooth, slowing at the end"],
    },
    "flat-demo": {
      text: "Listen to a short tune with every note just as loud and just as long. It is right, but it says nothing.",
    },
    "shaped-demo": {
      text: "Now the same notes again. Listen to how this time feels different.",
    },
    "what-changed": {
      text: "The notes were the same. What made the second one sound alive?",
      answers: ["It used other notes", "It was faster all the way", "It grew louder, then softer, and slowed at the end", "It left out the last note"],
    },
    "bright-demo": {
      text: "Listen to a tune in C major, played loud and a little short.",
    },
    "sad-demo": {
      text: "Now its twin in A minor, played soft, slow and smooth.",
    },
    "major-and-minor": {
      text: "The key colours the mood. C major often sounds bright and happy, and A minor often sounds sad. You choose a touch and a speed that fit it.",
    },
    "which-sounds-sad": {
      text: "You want a tune to sound sad and gentle. Which suits it best?",
      answers: ["C major, loud and short", "A minor, soft and smooth", "C major, fast with staccato", "A minor, loud and sharp"],
    },
    "play-bright": {
      text: "Play the bright tune: middle C, E, G, the next C, and back down. Play it firmly and a little short.",
    },
    "play-sad": {
      text: "Play the sad tune: the A below middle C, C, E, the A above, and back down. Play it gently and join the notes.",
    },
    "elise-demo": {
      text: "This is how the boss, Für Elise, begins. It is in A minor, played softly over a broken chord in the left hand.",
    },
    "play-softly": {
      text: "Play its first notes softly with your right hand: E, D♯, E, D♯, E, B, D, C and A. Start on the second E above middle C, and press each key gently.",
    },
    "hear-loud-and-soft": {
      text: "Listen to the first notes of Für Elise twice. The first time is loud, and the second time is soft.",
    },
    "which-fits-elise": {
      text: "Für Elise is marked p. Which time fitted it?",
      answers: ["The second time, the soft one", "The first time, the loud one", "Both, as they were the same", "Neither of them"],
    },
    "elise-left-demo": {
      text: "Listen to the boss's left hand, with fingers 5, 2 and 1. It breaks A minor as A, E and A, then E major as E, B and G♯. The E major shape is wider than an octave, so let your hand move up as it plays.",
    },
    "elise-left-hand": {
      text: "Your turn. Play A, E and A from the second A below middle C, then E, B and G♯ from the second E below middle C. End on A, E and A again.",
    },
    "elise-octave-demo": {
      text: "In bar 9, the boss's right hand stretches an octave. The thumb plays the E above middle C, and finger 5 the E an octave higher. Then the tune goes on as it began.",
    },
    "elise-octave": {
      text: "Your turn. Spread your hand over the octave: thumb on the E above middle C, and finger 5 on the next E up. Play the phrase softly.",
    },
    "how-to-play-the-boss": {
      text: "Für Elise is in A minor and starts with p. How will you play it?",
      answers: ["Loud and bright", "Fast and short", "Softly and gently, like a quiet song", "With every note equal and hard"],
    },
    recap: {
      text: "Well done. You have finished the last lesson of the first year, and Für Elise is waiting.",
      points: [
        "The marks of a piece tell you how loud, how smooth and how fast to play.",
        "The same notes sound alive when they grow, fade and slow down.",
        "A major key often sounds bright, and a minor key often sounds sad.",
        "You choose a touch that fits the feeling of the piece.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type PlayingWithFeelingTexts = typeof playingWithFeelingEn;
