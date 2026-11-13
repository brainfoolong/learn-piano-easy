/** *Playing with feeling* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { PlayingWithFeelingTexts } from "./playing-with-feeling.en";

export const playingWithFeelingEs: Translation<PlayingWithFeelingTexts> = {
  title: "Tocar con sentimiento",
  steps: {
    "all-the-marks": {
      text: "Ya conoces las indicaciones de este mundo, como p y f, los reguladores, las ligaduras, los puntos de staccato y rit. Juntas te dicen cómo debe sentirse una pieza.",
    },
    "read-the-marks": {
      text: "Una melodía empieza con p. Una ligadura une sus primeras cuatro notas, y rit. está sobre su último compás. ¿Cómo la tocas?",
      answers: ["Fuerte y corta, acelerando", "Fuerte y ligada, sin cambiar el tempo", "Suave y corta, sin cambiar el tempo", "Suave y ligada, más despacio al final"],
    },
    "flat-demo": {
      text: "Escucha una melodía corta con todas las notas igual de fuertes e igual de largas. Está bien tocada, pero no dice nada.",
    },
    "shaped-demo": {
      text: "Ahora las mismas notas otra vez. Escucha qué distinta se siente esta vez.",
    },
    "what-changed": {
      text: "Las notas eran las mismas. ¿Qué hizo que la segunda sonara viva?",
      answers: ["Usó otras notas", "Fue más rápida todo el tiempo", "Se hizo más fuerte, luego más suave, y fue más despacio al final", "Omitió la última nota"],
    },
    "bright-demo": {
      text: "Escucha una melodía en do mayor, tocada fuerte y un poco corta.",
    },
    "sad-demo": {
      text: "Ahora su gemela en la menor, tocada suave, lenta y ligada.",
    },
    "major-and-minor": {
      text: "La tonalidad le da color al ánimo. La tonalidad de do mayor suele sonar brillante y alegre, y la de la menor suele sonar triste. Tú eliges un toque y una velocidad que le queden bien.",
    },
    "which-sounds-sad": {
      text: "Quieres que una melodía suene triste y tierna. ¿Qué le queda mejor?",
      answers: ["En do mayor, fuerte y corta", "En la menor, suave y ligada", "En do mayor, rápida y con staccato", "En la menor, fuerte y brusca"],
    },
    "play-bright": {
      text: "Toca la melodía alegre: el do central, mi, sol, el do siguiente y de vuelta hacia abajo. Tócala con firmeza y un poco corta.",
    },
    "play-sad": {
      text: "Toca la melodía triste: el la debajo del do central, do, mi, el la de arriba y de vuelta hacia abajo. Tócala con suavidad y une las notas.",
    },
    "elise-demo": {
      text: "Así empieza el jefe final, Für Elise. Está en la menor y se toca suave sobre un acorde arpegiado en la mano izquierda.",
    },
    "play-softly": {
      text: "Toca sus primeras notas suave con la mano derecha: mi, re♯, mi, re♯, mi, si, re, do y la. Empieza en el segundo mi encima del do central y presiona cada tecla con suavidad.",
    },
    "hear-loud-and-soft": {
      text: "Escucha dos veces las primeras notas de Für Elise. La primera vez suenan fuerte, y la segunda, suave.",
    },
    "which-fits-elise": {
      text: "Für Elise está marcada p. ¿Cuál de las dos veces le queda bien?",
      answers: ["La segunda, la suave", "La primera, la fuerte", "Las dos, porque eran iguales", "Ninguna de las dos"],
    },
    "elise-left-demo": {
      text: "Escucha la mano izquierda del jefe final, con los dedos 5, 2 y 1. La mano arpegia el acorde de la menor como la, mi y la, y luego el de mi mayor como mi, si y sol♯. La forma de mi mayor es más ancha que una octava, así que deja que tu mano suba mientras toca.",
    },
    "elise-left-hand": {
      text: "Ahora tú. Toca las notas la, mi y la desde el segundo la debajo del do central, y luego mi, si y sol♯ desde el segundo mi debajo del do central. Termina otra vez en el la, el mi y el la.",
    },
    "elise-octave-demo": {
      text: "En el compás 9, la mano derecha del jefe final se abre una octava. El pulgar toca el mi encima del do central, y el dedo 5, el mi una octava más arriba. Luego la melodía sigue como empezó.",
    },
    "elise-octave": {
      text: "Ahora tú. Abre la mano sobre la octava: el pulgar en el mi encima del do central y el dedo 5 en el mi siguiente hacia arriba. Toca la frase suave.",
    },
    "how-to-play-the-boss": {
      text: "Für Elise está en la menor y empieza con p. ¿Cómo la vas a tocar?",
      answers: ["Fuerte y brillante", "Rápida y corta", "Suave y con delicadeza, como una canción tranquila", "Con todas las notas iguales y duras"],
    },
    recap: {
      text: "¡Bien hecho! Terminaste la última lección del primer año, y Für Elise te espera.",
      points: [
        "Las indicaciones de una pieza te dicen qué tan fuerte, qué tan ligado y qué tan rápido tocar.",
        "Las mismas notas suenan vivas cuando crecen, se apagan y van más despacio.",
        "Una tonalidad mayor suele sonar brillante, y una menor suele sonar triste.",
        "Tú eliges un toque que vaya con el sentimiento de la pieza.",
      ],
    },
  },
};
