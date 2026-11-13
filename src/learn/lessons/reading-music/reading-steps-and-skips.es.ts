/** *Reading steps and skips* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { ReadingStepsAndSkipsTexts } from "./reading-steps-and-skips.en";

export const readingStepsAndSkipsEs: Translation<ReadingStepsAndSkipsTexts> = {
  title: "Leer pasos y saltos",
  steps: {
    "moves-demo": {
      text: "Escucha. Primero las notas suben por pasos, luego por saltos. En el pentagrama, cada movimiento se ve distinto.",
    },
    "step-on-the-staff": {
      text: "Un paso en el pentagrama va de una línea al espacio siguiente, o de un espacio a la línea siguiente. En el teclado, va a la tecla blanca siguiente.",
    },
    "step-from-line-quiz": {
      text: "Una nota está en una línea. ¿Dónde está la nota que queda un paso más arriba?",
      answers: ["En el espacio justo encima", "En la línea siguiente hacia arriba", "Dos líneas más arriba"],
    },
    "skip-on-the-staff": {
      text: "Un salto en el pentagrama va de una línea a la línea siguiente, o de un espacio al espacio siguiente. En el teclado, se salta una tecla blanca.",
    },
    "step-or-skip-quiz": {
      text: "Una nota pasa de una línea a la línea siguiente hacia arriba. ¿Es un paso o un salto?",
      answers: ["Un paso", "Un salto"],
    },
    "space-to-line-quiz": {
      text: "Una nota pasa de un espacio a la línea justo encima. ¿Es un paso o un salto?",
      answers: ["Un paso", "Un salto"],
    },
    "read-by-moves": {
      text: "No hace falta nombrar cada nota. Nombra la primera y luego lee cada movimiento: hacia arriba o hacia abajo, un paso o un salto.",
    },
    "skip-from-e-quiz": {
      text: "Una nota es mi, en la línea de abajo del pentagrama en clave de sol. La nota siguiente está en la línea siguiente hacia arriba. ¿Qué nota es?",
      answers: ["Re", "Fa", "Sol"],
    },
    "first-note": {
      text: "La próxima canción empieza con esta nota. Nómbrala.",
    },
    "hand-on-d": {
      text: "Mira cómo la mano derecha sube desde la posición de do. El pulgar está en re, y los dedos 2 a 5 cubren mi, sol, la y si. Fa queda fuera, así que los dedos 2 y 3 se abren un poco más.",
    },
    "d-position": {
      text: "Ahora tú. Pon el pulgar derecho en re y toca re, mi, sol, la y si con los dedos 1 a 5. Luego baja de nuevo hasta re.",
    },
    "song-notes": {
      text: "La próxima canción usa estas cinco notas. Lee cada una y tócala con la mano derecha.",
    },
    "song-opening": {
      text: "Este es el comienzo de la próxima canción. Mantén la mano derecha en re, mi, sol, la y si, y sigue la tecla marcada.",
    },
    "opening-move-quiz": {
      text: "En esa melodía, mi baja a re. Mi está en la línea de abajo. ¿Dónde está re?",
      answers: ["En el espacio justo debajo", "En la línea de debajo", "En la misma línea"],
    },
    "dotted-demo": {
      text: "Escucha dos compases de la canción. El puntillo alarga una nota la mitad de su valor: una blanca con puntillo dura tres tiempos. El re, una negra con puntillo, dura un tiempo y medio, y un silencio de corchea llena el último medio tiempo.",
    },
    "dotted-half-quiz": {
      text: "Una blanca dura dos tiempos. ¿Cuántos tiempos dura una blanca con puntillo?",
      answers: ["Dos tiempos", "Tres tiempos", "Cuatro tiempos"],
    },
    "dotted-tap": {
      text: "Ahora tú, después de un compás de conteo previo. Toca mi, mi y re con los clics, y suelta re después de un tiempo y medio. Mantén sol durante tres tiempos y luego toca re.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes leer una melodía por sus movimientos.",
      points: [
        "Un paso va de una línea al espacio siguiente, o de un espacio a la línea siguiente.",
        "Un salto va de línea a línea, o de espacio a espacio.",
        "Nombra la primera nota y luego lee cada movimiento: su dirección y su tamaño.",
        "El puntillo alarga una nota la mitad de su valor.",
      ],
    },
  },
};
