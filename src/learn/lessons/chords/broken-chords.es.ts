/** *Broken chords* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { BrokenChordsTexts } from "./broken-chords.en";

export const brokenChordsEs: Translation<BrokenChordsTexts> = {
  title: "Acordes arpegiados",
  steps: {
    "broken-demo": {
      text: "Escucha do mayor tocado nota por nota. Sube y vuelve a bajar. Aun así oyes el acorde.",
    },
    "one-after-another": {
      text: "Un acorde arpegiado toca las notas de un acorde una tras otra, en vez de a la vez. Las notas son las mismas, así que el acorde es el mismo.",
    },
    "chord-together": {
      text: "Primero toca do mayor a la vez: do, mi y sol desde el do central, con los dedos 1, 3 y 5.",
    },
    "broken-up": {
      text: "Ahora arpégialo. Deja la mano en su lugar y toca do, luego mi, luego sol.",
    },
    "which-chord-broken": {
      text: "Tocaste do, mi y sol una por una. ¿Qué acorde tocaste?",
      answers: ["Fa mayor", "Do mayor", "La menor", "Sol mayor"],
    },
    "up-and-down": {
      text: "Un acorde arpegiado suele subir y volver a bajar: do, mi, sol, mi. Tocado una y otra vez, se mece como una ola.",
    },
    "broken-up-and-down": {
      text: "Toca do, mi, sol, mi dos veces y termina en do. Deja la mano quieta mientras los dedos se mecen.",
    },
    "three-chords-broken": {
      text: "Arpegia tres acordes con la mano derecha, empezando en el do central: do-mi-sol-mi, fa-la-do-la y sol-si-re-si. Termina en do, mi y sol. Mueve la mano con cada acorde.",
    },
    "which-is-broken": {
      text: "¿Cuál de estos es un acorde de do mayor arpegiado?",
      answers: ["Do-re-mi-fa", "Do-re-do-re", "Mi-fa-sol-la", "Do-mi-sol-mi"],
    },
    "left-hand-broken": {
      text: "La mano izquierda suele tocar un acorde arpegiado debajo de una melodía. Mantiene sonando el acorde mientras la mano derecha canta.",
    },
    "left-hand-demo": {
      text: "Escucha una melodía corta. La mano izquierda arpegia do mayor, luego sol mayor y luego do mayor otra vez.",
    },
    "left-hand-alone": {
      text: "Toca la mano izquierda sola, empezando en el do debajo del do central: do-mi-sol-mi, luego sol-si-re-si desde el sol siguiente hacia abajo, y luego do-mi-sol-mi.",
    },
    "tune-over-broken-chords": {
      text: "Ahora agrega la melodía con la mano derecha, en la posición de do. Cada nota de la melodía empieza junto con una nota de la mano izquierda.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes arpegiar acordes con las dos manos.",
      points: [
        "Un acorde arpegiado toca sus notas una tras otra.",
        "Las notas son las mismas, así que el acorde suena igual.",
        "Un patrón común sube y vuelve a bajar: do, mi, sol, mi.",
        "La mano izquierda suele arpegiar acordes debajo de una melodía.",
      ],
    },
  },
};
