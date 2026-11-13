/** *Sitting at the piano* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { SittingAtThePianoTexts } from "./sitting-at-the-piano.en";

export const sittingAtThePianoEs: Translation<SittingAtThePianoTexts> = {
  title: "Sentarse al piano",
  steps: {
    "face-middle-c": {
      text: "Tocar bien empieza por cómo te sientas. Siéntate en el centro del piano, con el do central justo frente a ti. Así las dos manos llegan fácilmente a sus teclas.",
    },
    "find-middle-c": {
      text: "Presiona el do central, la tecla frente a la que te sientas.",
    },
    "bench-and-feet": {
      text: "Siéntate en la mitad delantera del banco, no hasta el fondo. Mantén la espalda recta y relajada. Apoya bien los dos pies en el suelo.",
    },
    "bench-quiz": {
      text: "¿En qué parte del banco te sientas?",
      answers: [
        "En la mitad delantera, con los dos pies bien apoyados en el suelo",
        "Hasta el fondo, con la espalda apoyada en algo",
        "En el mismo borde, con los pies sin tocar el suelo",
      ],
    },
    forearms: {
      text: "Los antebrazos deben quedar a la altura de las teclas, sin inclinarse hacia arriba ni hacia abajo. Sube o baja el banco hasta lograrlo. Mantén los hombros sueltos.",
    },
    "forearms-quiz": {
      text: "¿Cuándo tiene el banco la altura correcta para ti?",
      answers: [
        "Cuando los codos quedan muy por debajo de las teclas",
        "Cuando los antebrazos están a la altura de las teclas",
        "Cuando las manos caen sobre las teclas desde arriba",
      ],
    },
    "curved-fingers": {
      text: "Curva los dedos con suavidad, como si sostuvieras una pelota pequeña. Presiona las teclas con las yemas de los dedos, no con los dedos planos. La mano se mantiene relajada todo el tiempo.",
    },
    "fingers-quiz": {
      text: "¿Cómo se apoyan tus dedos en las teclas?",
      answers: ["Planos y estirados", "Tensos y muy apretados entre sí", "Relajados y curvos, tocando con las yemas"],
    },
    "relaxed-play": {
      text: "Imagina una pelota pequeña en la mano y toca las teclas marcadas con las yemas de los dedos. Mantén todo suelto, desde los hombros hasta los dedos.",
    },
    "posture-quiz": {
      text: "¿Cuál de estas es una buena forma de sentarse al piano?",
      answers: [
        "En el extremo más alejado del banco, con los dedos planos",
        "Frente al do central, en la parte delantera del banco, con los antebrazos a la altura de las teclas y los dedos curvos",
        "Muy abajo, con los brazos estirados hacia arriba hasta las teclas",
      ],
    },
    recap: {
      text: "Bien hecho. Ya sabes cómo sentarte al piano.",
      points: [
        "Siéntate frente al do central, en la mitad delantera del banco, con los pies bien apoyados.",
        "Los antebrazos quedan a la altura de las teclas.",
        "Los dedos se mantienen relajados y curvos, y tocas con las yemas.",
      ],
    },
  },
};
