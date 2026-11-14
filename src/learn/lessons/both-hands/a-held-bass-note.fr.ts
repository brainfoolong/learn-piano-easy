/** *A held bass note* in French. */
import type { Translation } from "../../../i18n/translation";
import type { AHeldBassNoteTexts } from "./a-held-bass-note.en";

export const aHeldBassNoteFr: Translation<AHeldBassNoteTexts> = {
  title: "Une note de basse tenue",
  steps: {
    "bass-under-tune": {
      text: "Écoute et regarde. La main gauche joue une longue note grave, et la main droite joue une mélodie au-dessus.",
    },
    "hold-it": {
      text: "Cette longue note grave est une note de basse. La main gauche la joue en ronde et garde la touche enfoncée pendant quatre temps.",
    },
    "let-go-quiz": {
      text: "La main gauche tient une ronde sous quatre noires de la main droite. Quand la relâche-t-elle ?",
      answers: ["Après la quatrième noire", "Après la première noire", "Tout de suite"],
    },
    "first-bar": {
      text: "De la main gauche, joue le do sous le do central, et de la main droite, le do central. Garde le do grave enfoncé pendant que la main droite joue ré mi fa.",
    },
    "both-bars": {
      text: "Joue deux mesures, et tiens chaque note de basse. De la main gauche, joue le do sous le do central, et de la main droite, le do central, puis ré mi fa. Ensuite, joue de la même façon le sol sous le do central et le sol au-dessus du do central, puis fa mi ré.",
    },
    "half-bass": {
      text: "Une note de basse peut aussi être une blanche. Elle dure deux temps, donc la basse change deux fois par mesure.",
    },
    "half-note-bass": {
      text: "Écoute une basse en blanches. Chaque note de basse sonne pendant deux temps de la mélodie.",
    },
    "half-bass-quiz": {
      text: "La main gauche tient une blanche. Combien de noires la main droite joue-t-elle par-dessus ?",
      answers: ["Une", "Deux", "Quatre"],
    },
    "half-bass-tune": {
      text: "À toi. Joue chaque note de basse avec la note de la mélodie au-dessus, et tiens la basse pendant que la note suivante de la mélodie sonne.",
    },
    recap: {
      text: "Bravo. La main gauche tient maintenant une basse sous la mélodie.",
      points: [
        "La main gauche peut jouer une longue note de basse sous une mélodie qui avance.",
        "Joue la basse avec la note de la mélodie, puis garde sa touche enfoncée.",
        "Une basse en rondes dure quatre temps, et une basse en blanches deux.",
      ],
    },
  },
};
