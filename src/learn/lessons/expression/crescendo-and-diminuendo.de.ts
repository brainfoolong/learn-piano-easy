/** *Crescendo and diminuendo* in German. */
import type { CrescendoAndDiminuendoTexts } from "./crescendo-and-diminuendo.en";

export const crescendoAndDiminuendoDe: CrescendoAndDiminuendoTexts = {
  title: "Crescendo und Diminuendo",
  steps: {
    "crescendo-demo": {
      text: "Hör dir C, D, E, F und G an. Jeder Ton klingt ein wenig lauter als der davor.",
    },
    "getting-louder": {
      text: "Wird die Musik nach und nach lauter, ist das ein Crescendo. Auf dem Notenblatt steht cresc. oder eine öffnende Gabel <, die mit dem Klang breiter wird.",
    },
    "what-cresc-asks": {
      text: "Unter dem Notensystem steht cresc. Was sollst du tun?",
      answers: ["Nach und nach leiser werden", "Nach und nach lauter werden", "Schneller spielen", "Die Töne höher spielen"],
    },
    "play-crescendo": {
      text: "Spiel C, D, E, F und G ab dem mittleren C als Crescendo. Drück C, D und E sanft und langsam, dann F und G schnell und kräftig.",
    },
    "hear-crescendo": {
      text: "Hör dir C, D, E, F und G als Crescendo an. Jede Taste geht ein wenig schneller hinunter als die davor.",
    },
    "how-crescendo-changed": {
      text: "Wie hat sich der Klang vom ersten bis zum letzten Ton verändert?",
      answers: ["Er blieb leise", "Er wurde leiser", "Er blieb laut", "Er wurde lauter"],
    },
    "diminuendo-demo": {
      text: "Hör dir jetzt G, F, E, D und C an. Jeder Ton klingt ein wenig leiser als der davor.",
    },
    "getting-softer": {
      text: "Wird die Musik nach und nach leiser, ist das ein Diminuendo, kurz dim. Man sagt auch Decrescendo, kurz decresc. Eine schließende Gabel > meint dasselbe.",
    },
    "which-hairpin-softer": {
      text: "Welches Zeichen verlangt, nach und nach leiser zu werden?",
      answers: ["Die schließende Gabel >", "Die öffnende Gabel <", "Das f", "Das mf"],
    },
    "play-diminuendo": {
      text: "Spiel G, F, E, D und C als Diminuendo, ab dem G über dem mittleren C. Drück G, F und E schnell und kräftig, dann D und C sanft und langsam.",
    },
    "hear-diminuendo": {
      text: "Hör dir G, F, E, D und C als Diminuendo an. Jede Taste geht ein wenig langsamer hinunter als die davor.",
    },
    "how-diminuendo-changed": {
      text: "Wie hat sich der Klang vom ersten bis zum letzten Ton verändert?",
      answers: ["Er wurde lauter", "Er blieb laut", "Er wurde leiser", "Er blieb leise"],
    },
    "swell-and-fade": {
      text: "Eine Phrase wird oft lauter, wenn sie hinaufgeht, und leiser, wenn sie hinuntergeht. Sie schwillt an und ab wie eine Welle.",
    },
    "play-swell": {
      text: "Spiel vom mittleren C hinauf bis G und wieder hinunter zum C. Werde hinauf lauter und hinunter leiser. Hier zählen nur die Töne, also achte selbst mit den Ohren auf die Lautstärke.",
    },
    "how-it-ends": {
      text: "Eine Phrase beginnt mit p und hat eine öffnende Gabel < darunter. Wie soll sie enden?",
      answers: ["Leiser als p", "Genauso leise wie am Anfang", "Schneller als am Anfang", "Lauter als am Anfang"],
    },
    recap: {
      text: "Gut gemacht. Jetzt kannst du Musik lauter und leiser werden lassen.",
      points: [
        "Ein Crescendo wird lauter, markiert mit cresc. oder einer öffnenden Gabel <.",
        "Ein Diminuendo wird leiser, markiert mit dim., decresc. oder einer schließenden Gabel >.",
        "Eine Phrase wird oft hinauf lauter und hinunter leiser.",
      ],
    },
  },
};
