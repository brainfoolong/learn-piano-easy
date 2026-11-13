/** The guide of *Moonlight Sonata* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escribió esta sonata en 1801 y la publicó en 1802, dedicada a la condesa Giulietta Guicciardi. " +
    "El nombre «Claro de luna» se lo dio el crítico Ludwig Rellstab, después de la muerte de Beethoven. " +
    "La película Immortal Beloved (1994), sobre la vida de Beethoven, la usa.",
  funFact:
    "Beethoven pide tocar todo el movimiento con mucha delicadeza y con los apagadores levantados, «senza sordino».",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí la melodía sube y vuelve a bajar.",
        "Ahora la mano izquierda sola. En cada compás mantiene una nota o una quinta abierta.",
        "Junta las dos manos, despacio.",
        "Toca toda la pieza con las dos manos a velocidad completa.",
      ],
      tips: [
        "Mantén largo el primer la, y luego toca el la corto justo antes del siguiente largo.",
        "Toca muy suave. Esta música debe sonar como la luz de la luna sobre un lago tranquilo.",
        "Aquí descansa la mano derecha. Escucha la mano izquierda y cuenta cuatro tiempos lentos.",
      ],
      tricky: {
        2: "La mano izquierda baja del re y el la al la y el mi. El dedo 5 toma el la grave.",
        5: "La mano izquierda baja hasta sol con el dedo 5, y el pulgar se queda en re.",
        10: "La mano izquierda sube de fa a sol. La mano derecha vuelve con el dedo 2 en sol.",
      },
    },
    rare: {
      practice: [
        "Toca los ocho primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola. Primero llega la nota grave, y la doble nota le responde.",
        "Junta las manos en los ocho primeros compases, despacio y con el pedal.",
        "Toca la segunda mitad, donde la melodía vuelve una octava más arriba.",
        "Toca toda la pieza con las dos manos a velocidad completa.",
      ],
      tips: [
        "Mantén pisado el pedal durante cada compás entero, y cámbialo justo en la línea divisoria.",
        "El la con puntillo dura tres veces más que el la corto que lo sigue.",
        "Arriba, toca todavía más suave. La melodía debe brillar como la luna.",
      ],
      tricky: {
        4: "Toca el re con el dedo 5 de la mano izquierda, y luego el fa y el la juntos con los dedos 2 y 1.",
        10: "Usa el silencio del compás 9 para subir la mano derecha una octava. El dedo 3 llega al la agudo.",
        19: "Abre la mano izquierda sobre el re, el fa y el la con los dedos 5, 3 y 1. La mano derecha toca el fa y el la juntos.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola. Cada acorde sube rodando de tres en tres: grave, media, aguda.",
        "Toca solas las terceras y sextas de la mano derecha, y presiona las dos notas de cada doble nota como una sola.",
        "Junta las manos en los nueve primeros compases, despacio.",
        "Toca toda la pieza con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén los grupos de tres suaves y parejos, para que la melodía flote por encima.",
        "El la corto dura un grupo de tres. Cuenta los grupos de tres, y caerá solo en su lugar.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        17: "Abre la mano derecha a una sexta, con el pulgar en el la y el meñique en el fa.",
        18: "El acorde cambia a mitad de este compás. Cambia también el pedal ahí.",
        19: "Abre la mano izquierda sobre una octava entera: el dedo 5 en el re grave y el pulgar en el re de arriba.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola. El pulgar pasa por debajo y el dedo 3 cruza por encima, así que cada arpegio abarca dos octavas.",
        "Toca solas las octavas de la mano derecha. Mantén la mano abierta, con el pulgar y el meñique listos.",
        "Toca el final despacio. La mano izquierda cruza sobre la derecha para tres notas agudas.",
        "Toca toda la pieza con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar las últimas notas.",
      ],
      tips: [
        "En cada arpegio, el pulgar pasa por debajo al bajar, y el dedo 3 cruza por encima al subir.",
        "Deja que el meñique cante un poco más fuerte la nota de arriba de cada octava.",
        "Mientras la mano derecha mantiene su acorde, haz flotar la mano izquierda por encima como un rayo de luna.",
      ],
      tricky: {
        10: "Desde aquí la mano derecha toca octavas. El pulgar y el meñique caen juntos en los dos sol sostenido.",
        17: "La mano izquierda empieza su arpegio en un mi grave. Usa el silencio al final del compás 16 para llegar.",
        19: "Mantén el acorde de la mano derecha, y cruza la izquierda por encima para tocar sol sostenido, do sostenido y mi.",
      },
    },
  },
};
