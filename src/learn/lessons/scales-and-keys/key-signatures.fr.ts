/** *Key signatures* in French. */
import type { Translation } from "../../../i18n/translation";
import type { KeySignaturesTexts } from "./key-signatures.en";

export const keySignaturesFr: Translation<KeySignaturesTexts> = {
  title: "L’armure",
  steps: {
    "signs-at-the-start": {
      text: "En sol majeur, tu joues fa dièse à la place de chaque fa. La partition ne met pas un dièse devant chacun. Elle en place un seul, au début de chaque ligne.",
    },
    "every-octave": {
      text: "Ces signes forment l’armure. Un dièse sur la ligne du fa veut dire que chaque fa est un fa dièse, aigu ou grave. Un bémol sur la ligne du si veut dire que chaque si est un si bémol.",
    },
    "one-sharp": {
      text: "L’armure montre un dièse, sur la ligne du fa. En quelle tonalité est le morceau ?",
      answers: ["Sol majeur", "Fa majeur", "Do majeur"],
    },
    "one-flat": {
      text: "L’armure montre un bémol, sur la ligne du si. En quelle tonalité est le morceau ?",
      answers: ["Do majeur", "Fa majeur", "Sol majeur"],
    },
    "no-signs": {
      text: "L’armure ne montre ni dièse ni bémol. En quelle tonalité est le morceau ?",
      answers: ["Fa majeur", "Sol majeur", "Do majeur"],
    },
    "letter-stays": {
      text: "Nomme chaque note. L’armure change la touche que tu joues, mais la note garde son nom.",
    },
    "f-in-g-major": {
      text: "L’armure a un dièse. La portée montre un fa. Quelle touche joues-tu ?",
      answers: ["Fa dièse, la touche noire", "Fa, la touche blanche"],
    },
    "phrase-in-g": {
      text: "Voici une phrase en sol majeur. Le pouce droit commence sur le deuxième ré au-dessus du do central. Écoute bien le fa dièse tout en haut.",
    },
    "play-in-g": {
      text: "À toi. L’armure a un dièse, donc chaque fa est un fa dièse.",
    },
    "b-in-f-major": {
      text: "L’armure a un bémol. La portée montre un si. Quelle touche joues-tu ?",
      answers: ["Si, la touche blanche", "Si bémol, la touche noire"],
    },
    "play-in-f": {
      text: "Maintenant, une phrase en fa majeur. Pose le pouce droit sur le fa au-dessus du do central. L’armure a un bémol, donc chaque si est un si bémol.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant lire une armure. Ensuite vient un morceau en do majeur, sans dièse ni bémol.",
      points: [
        "L’armure se place au début de chaque ligne.",
        "Ses dièses ou ses bémols valent pour chaque note de ce nom, dans toutes les octaves.",
        "Un dièse sur fa veut dire sol majeur, et un bémol sur si veut dire fa majeur.",
        "Sans dièse ni bémol, c’est do majeur.",
      ],
    },
  },
};
