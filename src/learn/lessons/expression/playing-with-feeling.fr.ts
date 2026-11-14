/** *Playing with feeling* in French. */
import type { Translation } from "../../../i18n/translation";
import type { PlayingWithFeelingTexts } from "./playing-with-feeling.en";

export const playingWithFeelingFr: Translation<PlayingWithFeelingTexts> = {
  title: "Jouer avec émotion",
  steps: {
    "all-the-marks": {
      text: "Tu connais maintenant les indications de ce monde, comme p et f, les soufflets, les liaisons, les points de staccato et rit. Ensemble, elles te disent quel caractère donner à un morceau.",
    },
    "read-the-marks": {
      text: "Une mélodie commence p. Une liaison relie ses quatre premières notes, et rit. est écrit au-dessus de sa dernière mesure. Comment la joues-tu ?",
      answers: ["Fort et court, en accélérant", "Fort et lié, en gardant le tempo", "Doux et court, en gardant le tempo", "Doux et lié, en ralentissant à la fin"],
    },
    "flat-demo": {
      text: "Écoute une petite mélodie dont toutes les notes ont la même force et la même durée. Elle est juste, mais elle ne dit rien.",
    },
    "shaped-demo": {
      text: "Maintenant, les mêmes notes encore une fois. Écoute comme, cette fois, elles sonnent autrement.",
    },
    "what-changed": {
      text: "Les notes étaient les mêmes. Qu’est-ce qui a rendu la seconde version vivante ?",
      answers: ["Elle utilisait d’autres notes", "Elle était plus rapide du début à la fin", "Elle devenait plus forte, puis plus douce, et ralentissait à la fin", "Elle sautait la dernière note"],
    },
    "bright-demo": {
      text: "Écoute une mélodie en do majeur, jouée fort, avec des notes un peu courtes.",
    },
    "sad-demo": {
      text: "Maintenant, sa jumelle en la mineur, jouée avec un son doux, lentement et de façon liée.",
    },
    "major-and-minor": {
      text: "La tonalité colore le caractère. Do majeur sonne souvent clair et joyeux, et la mineur sonne souvent triste. À toi de choisir un toucher et une vitesse qui lui vont.",
    },
    "which-sounds-sad": {
      text: "Tu veux qu’une mélodie sonne triste et tendre. Quel choix lui va le mieux ?",
      answers: ["Do majeur, fort et court", "La mineur, doux et lié", "Do majeur, rapide et staccato", "La mineur, fort et sec"],
    },
    "play-bright": {
      text: "Joue la mélodie joyeuse : le do central, mi, sol, le do suivant, puis redescends. Joue-la franchement, avec des notes un peu courtes.",
    },
    "play-sad": {
      text: "Joue la mélodie triste : le la sous le do central, do, mi, le la au-dessus, puis redescends. Joue-la en douceur et lie les notes.",
    },
    "elise-demo": {
      text: "Voici le début de l’épreuve finale, « Lettre à Élise ». Le morceau est en la mineur, joué avec un son doux sur un accord brisé à la main gauche.",
    },
    "play-softly": {
      text: "Joue ses premières notes avec un son doux, à la main droite : mi, ré dièse, mi, ré dièse, mi, si, ré, do et la. Commence sur le deuxième mi au-dessus du do central, et enfonce chaque touche en douceur.",
    },
    "hear-loud-and-soft": {
      text: "Écoute deux fois les premières notes de « Lettre à Élise ». La première fois, le son est fort. La deuxième fois, il est doux.",
    },
    "which-fits-elise": {
      text: "« Lettre à Élise » porte l’indication p. Quelle version convenait au morceau ?",
      answers: ["La deuxième, la douce", "La première, la forte", "Les deux, car elles étaient pareilles", "Aucune des deux"],
    },
    "elise-left-demo": {
      text: "Écoute la main gauche de l’épreuve finale, avec les doigts 5, 2 et 1. Elle brise l’accord de la mineur en la, mi et la, puis celui de mi majeur en mi, si et sol dièse. La position de mi majeur est plus large qu’une octave, alors laisse la main monter en jouant.",
    },
    "elise-left-hand": {
      text: "À toi. Joue la, mi et la à partir du deuxième la sous le do central, puis mi, si et sol dièse à partir du deuxième mi sous le do central. Finis de nouveau sur la, mi et la.",
    },
    "elise-octave-demo": {
      text: "À la mesure 9, la main droite de l’épreuve finale s’ouvre sur une octave. Le pouce joue le mi au-dessus du do central, et le doigt 5 le mi une octave plus haut. Puis la mélodie reprend comme au début.",
    },
    "elise-octave": {
      text: "À toi. Ouvre la main sur l’octave : le pouce sur le mi au-dessus du do central, et le doigt 5 sur le mi suivant, plus haut. Joue la phrase avec un son doux.",
    },
    "how-to-play-the-boss": {
      text: "« Lettre à Élise » est en la mineur et commence p. Comment vas-tu jouer ce morceau ?",
      answers: ["Fort et brillant", "Vite et court", "Doux et tendre, comme une chanson calme", "Avec toutes les notes égales et dures"],
    },
    recap: {
      text: "Bravo. Tu as terminé la dernière leçon de la première année, et « Lettre à Élise » t’attend.",
      points: [
        "Les indications d’un morceau te disent comment jouer : fort ou doux, lié ou détaché, vite ou lentement.",
        "Les mêmes notes prennent vie quand elles enflent, s’éteignent et ralentissent.",
        "Une tonalité majeure sonne souvent clair, et une tonalité mineure souvent triste.",
        "Tu choisis un toucher qui va avec le caractère du morceau.",
      ],
    },
  },
};
