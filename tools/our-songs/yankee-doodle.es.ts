/** The guide of *Yankee Doodle* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Yankee Doodle es una melodía tradicional que los soldados británicos cantaban para burlarse de los colonos estadounidenses. " +
    "Durante la guerra de Independencia de los Estados Unidos, los estadounidenses hicieron suya la canción y la cantaron con orgullo. " +
    "Una de sus primeras impresiones está en un libro de melodías que James Aird publicó en Glasgow en 1782.",
  funFact: "Yankee Doodle es la canción oficial del estado de Connecticut.",
  versions: {
    common: {
      practice: [
        "Toca con la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Ahora la mano izquierda sola. Cada una de sus notas dura dos tiempos o más.",
        "Junta las dos manos en los primeros cuatro compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El dedo 2 se apoya en el do, y el pulgar se estira hacia abajo hasta el sol grave al final del compás 2.",
        "Las dos notas del compás 4 duran dos tiempos, así que cuéntalos bien.",
        "Levanta la mano un momento después del do del compás 6. Vuelve a apoyarse una tecla más abajo.",
      ],
      tricky: {
        6: "Baja caminando por el fa, el mi, el re y el do con los dedos 5, 4, 3 y 2, y luego levanta la mano.",
        7: "Apoya el dedo 2 en el si, y el pulgar toma el sol grave.",
        8: "El dedo 4 toca los dos do. Mantén cada uno dos tiempos.",
      },
    },
    rare: {
      practice: [
        "Toca la estrofa con la mano derecha sola, despacio.",
        "Toca con la mano izquierda sola. Mantén cada acorde hasta la nota siguiente.",
        "Junta las manos en el estribillo, que queda más arriba en el teclado.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Primero suena la nota del bajo y el acorde le responde. Toca el acorde un poco más suave.",
        "Cambia al pulgar en el segundo sol, para que la mano pueda subir hasta el estribillo.",
        "Aquí la melodía sube a su nota más aguda. Déjala sonar, y luego llega suave al sol.",
      ],
      tricky: {
        7: "Baja el dedo 2 del sol al fa sostenido, y el pulgar llega al re de abajo.",
        12: "El pulgar toca el si, y luego baja al sol. Primero mantén el si sus dos tiempos.",
        15: "El pulgar toma el re, y luego el dedo 4 se estira hasta el sol. Mantén la mano abierta.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solo el pasaje del compás 8, y pasa el pulgar por debajo hasta el do.",
        "Toca solo el estribillo en terceras, y mantén juntas las dos notas de cada doble nota.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "El pulgar pasa por debajo del dedo 3 para llegar al do, y el pasaje sigue subiendo hasta el estribillo.",
        "Los fa sostenido chocan un momento con el bajo, a propósito.",
      ],
      tricky: {
        7: "Baja el dedo 2 del sol al fa sostenido. El resto de la mano lo sigue.",
        11: "El estribillo vuelve a bajar al re. El dedo 3 lo toma, para que la mano quede lista para el do.",
        15: "La mano se abre a una sexta sobre el si y el sol, y luego sube al fa sostenido y el la.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca las sextas y terceras de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca las octavas del estribillo con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava y deja que la mano encuentre el acorde al tacto.",
        "El pulgar toca todas las notas de abajo, y los dedos 4 y 5 llevan la melodía.",
        "Toca cortas las octavas, y deja que el pedal las una.",
      ],
      tricky: {
        3: "La melodía sube caminando mientras el bajo salta. No le quites los ojos a la mano izquierda.",
        5: "Las sextas se mueven como una sola forma. Deja que el pulgar guíe cada paso hacia arriba.",
        8: "Levanta la mano después del segundo acorde, y luego salta hasta el mi para el estribillo.",
      },
    },
  },
};
