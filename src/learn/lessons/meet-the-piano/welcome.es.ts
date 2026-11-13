/** *Welcome to the piano* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { WelcomeTexts } from "./welcome.en";

export const welcomeEs: Translation<WelcomeTexts> = {
  title: "Te damos la bienvenida al piano",
  steps: {
    hello: {
      text: "¡Te damos la bienvenida! Aquí aprendes piano poco a poco, un paso pequeño a la vez. Cada lección te enseña una idea, y la pruebas enseguida.",
    },
    "sound-check": {
      text: "Primero, una prueba de sonido. El piano toca cuatro notas. Si no oyes nada, sube el volumen y selecciona Escuchar otra vez.",
    },
    "ways-to-play": {
      text: "Puedes tocar cada lección en las teclas de la pantalla, en el teclado de la computadora o en un teclado MIDI. Para usar un teclado MIDI, conéctalo y selecciona una vez Conectar dispositivos MIDI en la configuración del reproductor.",
    },
    "ways-quiz": {
      text: "¿En qué puedes tocar una lección?",
      answers: ["Solo en un teclado MIDI", "Solo en las teclas de la pantalla", "En cualquiera: la pantalla, el teclado de la computadora o un teclado MIDI"],
    },
    "first-key": {
      text: "¡Tu primera nota! Presiona la tecla marcada.",
    },
    "three-keys": {
      text: "Ahora tres teclas seguidas. Toca cada tecla marcada, de izquierda a derecha.",
    },
    recap: {
      text: "Bien hecho. Ya tocaste tus primeras notas.",
      points: [
        "La prueba de sonido muestra que puedes oír el piano.",
        "Puedes tocar en la pantalla, en el teclado de la computadora o en un teclado MIDI.",
        "La tecla marcada es siempre la que tocas a continuación.",
      ],
    },
  },
};
