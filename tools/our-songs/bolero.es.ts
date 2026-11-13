/** The guide of *Boléro* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Ravel escribió el Boléro para orquesta en 1928, y Durand lo publicó por primera vez en 1929. " +
    "Dos melodías se turnan sobre un único ritmo de caja, que crece de suave a fuerte. " +
    "La película 10, de 1979, le dio un lugar destacado, y sus ventas se dispararon.",
  funFact: "Ravel tocó la melodía por primera vez con un solo dedo para su amigo Gustave Samazeuilh, y le preguntó si tenía algo insistente.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. La melodía baja despacio hasta el do.",
        "Ahora la mano izquierda sola. Mantiene una nota o una quinta durante todo un compás.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Toca suave y parejo, como una flauta a lo lejos. El volumen de la melodía casi no debe cambiar.",
        "Toma el do largo con el dedo 5. Así el dedo 2 puede bajar hasta el mi sin mover la mano.",
        "Al comienzo del compás 6, toca el mi otra vez con el dedo 3. Así el pulgar queda listo para el do.",
      ],
      tricky: {
        2: "El dedo 2 toca el la, y luego el dedo 5 toma el do largo. Después los dedos 4 y 5 tocan el si y el do.",
        9: "Usa el silencio corto para bajar la mano izquierda al fa y al do. La mano derecha empieza en el fa con el dedo 4.",
        12: "Baja el pulgar derecho de re a do. La mano izquierda cae en el do y el sol después de su silencio.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: la fundamental, la quinta y luego las dos, una en cada tiempo.",
        "Toca los compases 5 y 6 con la mano derecha sola. El pulgar baja dos veces.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cuenta tres tiempos lentos en cada compás. La mano izquierda toca una vez en cada tiempo, como un tambor tranquilo.",
        "Después del mi, el pulgar baja al re. En el compás siguiente vuelve a bajar, hasta el do.",
        "Presiona el do y el mi a la vez, y déjalos sonar hasta el final.",
      ],
      tricky: {
        5: "Después del sol largo, los dedos 4 y 5 suben hasta el si. Al final, el pulgar toca el mi y luego baja al re.",
        6: "El dedo 2 toca el mi, y el pulgar toca el re. Luego el pulgar baja al do y se queda ahí.",
        9: "Usa el silencio corto para bajar la mano izquierda al fa. La mano derecha empieza en el fa con el dedo 4.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola. Primero viene una nota larga, y luego tres notas rápidas, como una caja.",
        "Toca la mano derecha sola en los compases 9 a 16. Pasa el pulgar por debajo en los pasajes rápidos.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal en los compases 9 a 16.",
      ],
      tips: [
        "Las tres notas rápidas caben en el tiempo de dos notas de la melodía. Tócalas ligeras y parejas.",
        "Pasa el pulgar por debajo hasta el fa, y luego sube con los dedos 2 a 5 hasta el do.",
        "La melodía vuelve más llena. Deja que su nota de arriba cante sobre las notas de abajo.",
      ],
      tricky: {
        6: "El pulgar baja de re a do, mientras la mano izquierda sigue con el ritmo del tambor.",
        9: "La mano izquierda empieza el bajo de Alberti en fa. Toca a la vez el fa y el la de la mano derecha con los dedos 1 y 3.",
        17: "Toca el mi y el do a la vez con los dedos 1 y 4. La mano izquierda vuelve a tocar el ritmo del tambor.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola en los dos primeros compases. Apoya la mano firme en cada octava, y luego toca ligeras las notas rápidas.",
        "Toca el pasaje rápido de los compases 11 y 12 con la mano derecha sola, muy despacio.",
        "Toca solas las octavas de la mano derecha en los compases 17 a 24. Mantén la mano abierta, con el pulgar y el meñique listos.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja que crezca hasta el último acorde.",
      ],
      tips: [
        "En el bajo stride, usa cada silencio corto para saltar entre la octava grave y el acorde.",
        "El pulgar pasa por debajo hasta el re, y el dedo 3 vuelve a cruzar por encima hasta el do. Mantén la muñeca nivelada.",
        "Empieza las octavas suave y ve subiendo el volumen, como hace toda la orquesta en la pieza.",
      ],
      tricky: {
        9: "La mano izquierda salta de la octava de fa grave hasta el acorde. Usa cada silencio corto para el salto.",
        15: "Pasa el pulgar por debajo hasta el sol y sube hasta el re. La mano izquierda salta entre el sol y su acorde.",
        17: "Empiezan las octavas. Abre la mano, con el pulgar en el do y el meñique en el do de arriba.",
      },
    },
  },
};
