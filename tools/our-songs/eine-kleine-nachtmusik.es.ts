/** The guide of *Eine kleine Nachtmusik* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart terminó esta serenata para cuerdas en Viena en 1787. " +
    "No se publicó hasta 1827, más de treinta años después de su muerte. " +
    "En la película Amadeus (1984), el viejo Salieri la toca, y un sacerdote reconoce la melodía al instante.",
  funFact: "El título significa «una pequeña serenata», y Mozart la anotó él mismo en su lista de obras.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola, después de que la mano se mueva a su nuevo lugar.",
        "Ahora la mano izquierda sola. Mantiene el sol y el re, o el re solo, durante compases enteros.",
        "Junta las dos manos, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El pulgar en el re, el dedo 2 en el sol, el dedo 4 en el si y el dedo 5 en el re agudo.",
        "Toca el sol corto y brillante, como si las cuerdas lo lanzaran de un golpe.",
        "Aprovecha el silencio después del re agudo para llevar los dedos 2, 3 y 5 al fa sostenido, al la y al do.",
      ],
      tricky: {
        5: "Tu mano se movió durante el silencio. Ahora el dedo 5 toca el do, y el dedo 3 toca el la.",
        7: "Baja por el do, el la y el fa sostenido con los dedos 5, 3 y 2, y luego vuelve a subir al la.",
        13: "Sube la mano en el silencio del compás 12. El dedo 3 cae en el si, y el pulgar en el sol.",
      },
    },
    rare: {
      practice: [
        "Toca la melodía con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola. Se balancea entre la fundamental y la quinta en cada tiempo.",
        "Junta las manos en la melodía, despacio.",
        "Toca la respuesta con las dos manos juntas. El compás 11 corre en corcheas.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cuenta la mano izquierda en negras. Cada nota de la melodía cae en un tiempo junto con ella.",
        "Sube por el re, el fa sostenido, el la y el do con los dedos 1, 2, 3 y 5, y luego vuelve a bajar.",
        "La respuesta vuelve a casa en sol. Deja sonar la última nota durante todo el compás.",
      ],
      tricky: {
        5: "Mueve la mano en el silencio del compás 4. El dedo 5 cae en el do, y el dedo 3 en el la.",
        7: "Baja por el do, el la y el fa sostenido con los dedos 5, 3 y 2, y luego vuelve a subir al la.",
        13: "Sube la mano en el silencio del compás 12. El dedo 3 cae en el si, y el pulgar en el sol.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las dobles notas de la mano derecha, en terceras y sextas, y presiona las dos notas de cada par como una sola.",
        "Junta las manos en los ocho primeros compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén el bajo de Alberti suave y parejo, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada par, así que deja que el dedo de arriba guíe.",
        "Cambia el pedal en cada línea divisoria, cuando suena la nueva nota del bajo.",
      ],
      tricky: {
        16: "Levanta la mano después de la última tercera, y luego bájala al la y al re con los dedos 1 y 4.",
        17: "La respuesta empieza arriba, en el la, con el dedo 3. Aprovecha el silencio de antes para subir.",
        24: "Suelta el la en el silencio, y luego baja la mano al si, al re y al sol con los dedos 1, 2 y 5.",
      },
    },
    legendary: {
      practice: [
        "Toca las octavas de la mano derecha solas. Mantén abiertos el pulgar y el dedo 5, y mueve toda la mano.",
        "Toca solas las escalas rápidas de los compases 11 y 15, despacio, hasta que fluyan.",
        "Toca la mano izquierda sola. Salta entre octavas sobre la fundamental y la quinta.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Las octavas en las dos manos suenan como toda una orquesta de cuerdas. Tócalas con firmeza.",
        "Al subir, el pulgar pasa por debajo después del fa sostenido. Al bajar, el dedo 3 cruza por encima del sol.",
        "Después de la escala, levanta la mano en el silencio y apóyala en las cuatro notas de sol mayor.",
      ],
      tricky: {
        2: "Levanta la octava de sol, y luego salta hacia abajo a la octava de re. Mantén la mano abierta.",
        3: "Cuatro octavas seguidas: sol, re, sol y si. Levanta un poco la mano después de cada una.",
        14: "Salta hacia abajo de la octava de si a la octava de sol, y luego prepárate para la escala.",
      },
    },
  },
};
