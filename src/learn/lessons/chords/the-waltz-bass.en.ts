/** *The waltz bass* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const theWaltzBassEn = {
  title: "The waltz bass",
  steps: {
    "waltz-demo": {
      text: "Listen to the left hand alone. It sways in threes, like a dance. This is a waltz bass.",
    },
    "three-beats": {
      text: "A waltz is in three-four time. Each bar has three beats: one, two, three. Beat one is the strong one.",
    },
    "oom-pah-pah": {
      text: "On beat one, the left hand plays the chord's root, low. On beats two and three, it plays the two upper notes together. It sounds like oom-pah-pah.",
    },
    "root-on-one": {
      text: "In a waltz bass, on which beat does the low root sound?",
      answers: ["Beat 2", "Beat 1", "Beat 3"],
    },
    "c-waltz": {
      text: "Your turn on C. Finger 5 plays C below middle C, then fingers 3 and 1 play E and G together, twice. Play two bars.",
    },
    "g-and-f-shapes": {
      text: "The same pattern works on every chord. For G, play the low G, then B and D. For F, play the low F, then A and C.",
    },
    "g-waltz": {
      text: "Move your hand down to the G below the C under middle C. Finger 5 plays G, then fingers 3 and 1 play B and D together, twice.",
    },
    "f-beats-two-and-three": {
      text: "In a bar on F, what does the left hand play on beats two and three?",
      answers: ["F alone", "F, A and C one after another", "A and C together"],
    },
    "f-waltz": {
      text: "Now move to the F one white key below that G. Finger 5 plays F, then fingers 3 and 1 play A and C together, twice.",
    },
    "chord-walk": {
      text: "Play one bar each of C, F, G and C. Move your hand on beat one, and keep counting to three.",
    },
    "waltz-tune-demo": {
      text: "Here is a short tune over the waltz bass. The right hand plays long notes while the left hand keeps the oom-pah-pah.",
    },
    "waltz-tune": {
      text: "Put your right thumb on middle C. Press each tune note together with the left-hand keys under it, and keep the waltz bass going between them.",
    },
    recap: {
      text: "Well done. Your left hand can now play a waltz bass.",
      points: [
        "A waltz is in three-four time, with three beats per bar.",
        "The left hand plays the root low on beat one.",
        "On beats two and three, it plays the upper notes together.",
        "The pattern moves with the chord: C, F and G.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TheWaltzBassTexts = typeof theWaltzBassEn;
