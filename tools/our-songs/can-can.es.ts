/** The guide of *Can-can* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Offenbach escribió el Galop infernal para la fiesta desenfrenada de los dioses con la que termina su opereta Orfeo en los infiernos, estrenada en 1858. " +
    "En la década de 1890, los cabarets parisinos Moulin Rouge y Folies Bergère lo tomaron para acompañar el cancán. " +
    "La película Moulin Rouge! de 2001 lo usa en su banda sonora.",
  funFact: "Su melodía comparte sus notas principales con dos canciones mucho más lentas del mismo acto, y aun así no se parece en nada a ellas.",
  versions: {
    common: {
      practice: [
        "Toca los primeros siete compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 8 a 16 con la mano derecha sola. La mano se queda en el mismo lugar.",
        "Ahora la mano izquierda sola. Mantiene una forma durante un compás entero o medio compás.",
        "Junta las dos manos en los primeros siete compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Mantén el primer sol durante cuatro tiempos. Las bailarinas esperan a que empiece la música.",
        "El dedo 5 toca los dos primeros re. Luego el dedo 4 toma el re, para que el dedo 5 alcance el mi.",
        "Toca las negras cortas y saltarinas, como bailarinas que lanzan las piernas al aire.",
      ],
      tricky: {
        4: "Cambia del dedo 5 al dedo 4 en el re. Luego el dedo 5 alcanza el mi, y el dedo 2 baja al si.",
        5: "El dedo 3 deja el do, y el dedo 2 toca el la dos veces. Mantén cada la durante dos tiempos.",
        10: "El dedo 5 toca el re, y luego el dedo 3 baja al si. El pulgar se queda sobre el sol.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Una nota del bajo llega en el pulso, y una doble nota le responde.",
        "Toca los primeros siete compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros siete compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa, como en un salón de baile a medianoche.",
      ],
      tips: [
        "La mano izquierda toca en cada tiempo: primero una nota grave, luego un acorde. Cuenta «uno, dos».",
        "Las dobles notas usan los dedos 1 y 2, 2 y 4, o 3 y 5.",
        "Toca la mano izquierda ligera y corta, para que la melodía pueda bailar por encima.",
      ],
      tricky: {
        4: "Cambia del dedo 5 al dedo 4 en el re. Luego el dedo 5 alcanza el mi, y el dedo 2 baja al si.",
        11: "Después de la pareja sol y si, el dedo 4 toma el do y el dedo 2 toma el la. La mano izquierda toca el re, y luego el la y el do.",
        15: "La mano derecha toca las notas do, la, si y do. La mano izquierda toca el re, y luego el la y el do juntos.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca sola la escala del compás 8. El pulgar pasa por debajo del dedo 3 en el do.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada acorde nuevo. En el compás 4, cámbialo a la mitad del compás.",
        "La escala sube desde el sol con los dedos 1, 2 y 3. Luego el pulgar pasa por debajo hasta el do.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que el dedo de arriba la guíe.",
      ],
      tricky: {
        11: "El pulgar cae en el do, y el dedo 3 cruza por encima de él, hacia abajo, hasta el la.",
        18: "Suelta la sexta un poco antes. Luego el dedo 2 cae en el la, y el dedo 4 alcanza el do.",
        23: "Toca la sexta corta. Luego el pulgar toma el re, y el dedo 3 toma el fa sostenido.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: una octava en el pulso y luego un acorde, cada uno con un silencio corto para saltar.",
        "Toca solas las octavas de la mano derecha. Mantén firmes los dedos 1 y 5, y rebota desde la muñeca.",
        "Toca solos los arpegios de la mano izquierda. El dedo 3 cruza por encima del pulgar.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja que el último acorde resuene.",
      ],
      tips: [
        "Aprovecha el silencio corto después de cada octava para saltar a la siguiente.",
        "La escala recorre dos octavas. El pulgar pasa por debajo en cada do y en cada sol.",
        "Deja que los arpegios fluyan suaves bajo los pasajes rápidos, y cambia el pedal en cada compás.",
      ],
      tricky: {
        17: "Abre la mano sobre sol, si, re y sol. Luego, en el silencio, la mano salta una octava hacia arriba hasta el la.",
        21: "Toca el la, el re y el la con los dedos 1, 2 y 5. En el silencio anterior, salta de vuelta desde el do agudo.",
        23: "Después del acorde, el pasaje rápido sube desde el re. El pulgar pasa por debajo en el sol.",
      },
    },
  },
};
