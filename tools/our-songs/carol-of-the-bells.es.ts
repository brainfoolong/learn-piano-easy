/** The guide of *Carol of the Bells* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Shchedryk es una canción ucraniana de Año Nuevo, y su nombre viene de «Noche generosa». " +
    "Mykola Leontovych, compositor, director y maestro ucraniano, la construyó sobre una figura de cuatro notas en compás de 3/4. " +
    "Se cantó por primera vez en diciembre de 1916 en Kiev. " +
    "Más tarde, Peter J. Wilhousky la convirtió en el villancico inglés Carol of the Bells.",
  funFact: "Wilhousky le puso una letra sobre campanas porque la melodía le recordaba a las campanas de mano.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola: do, si, do, la, una y otra vez.",
        "Toca los compases 12 a 16 con la mano derecha sola, hasta el la agudo y de vuelta abajo.",
        "Ahora la mano izquierda sola. Mantiene una forma en cada compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Las cuatro notas suenan como campanitas. Tócalas ligeras y parejas.",
        "El pulgar toma el último do, para que el meñique pueda estirarse hasta el la agudo.",
        "En el tercer mi, cambia del dedo 2 al dedo 3. La mano se queda donde está.",
      ],
      tricky: {
        12: "Toca el último do con el pulgar, y usa el silencio corto para abrir la mano hacia el la agudo.",
        18: "Los dedos 4 y 5 se mecen entre el re y el mi, y luego el dedo 3 cae en el do.",
        20: "Igual que el compás 18. Mantén el do durante toda su blanca antes de que vuelvan las campanas.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Presiona juntas las tres notas de cada acorde.",
        "Toca los compases 17 a 20 con la mano derecha sola, y levanta la mano después del sol sostenido.",
        "Junta las manos en los primeros doce compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda deja fuera el do, para que nunca choque con el si de la melodía.",
        "Pasa el último la al dedo 3. Así el pulgar queda libre para el mi grave.",
        "Toca corto el sol sostenido, levanta la mano y deja caer el pulgar en el la.",
      ],
      tricky: {
        12: "El pulgar toma el último do, para que el meñique alcance el la agudo en el compás siguiente.",
        17: "Toca corto el sol sostenido, luego levanta la mano y deja caer el pulgar en el la.",
        19: "La misma subida del compás 17. Levanta la mano después del sol sostenido, y mantén el pulso firme.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola hasta que se meza por sí misma: grave, sube, sube, arriba, baja, baja.",
        "Toca solas las sextas y terceras de la mano derecha, y mantén juntas las dos notas de cada doble nota.",
        "Toca la subida de los compases 17 a 20 con la mano derecha sola. El pulgar pasa por debajo en el la.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El bajo baja un paso en cada compás, del la al mi, mientras las campanas siguen sonando por encima.",
        "La melodía es la nota de arriba de cada sexta, así que deja que el dedo de arriba la guíe.",
        "Después del sol sostenido, pasa el pulgar por debajo hasta el la, y la mano sigue subiendo.",
      ],
      tricky: {
        9: "La mano salta de las sextas graves hacia arriba, al sol y al mi. Levántala en el silencio corto al final del compás 8.",
        10: "El pulgar pasa por sol, fa, sol y mi, mientras los dedos 5 y 4 hacen repicar la melodía arriba.",
        19: "Pasa el pulgar por debajo después del sol sostenido, sin que el sonido tropiece.",
      },
    },
    legendary: {
      practice: [
        "Toca solas las octavas de la mano izquierda. Repican la misma figura de cuatro notas dos octavas más abajo.",
        "Toca solo el bajo stride: salta hacia abajo a la octava, y luego vuelve arriba al acorde.",
        "Toca solos los acordes de la mano derecha, y deja que el dedo de arriba cante la melodía.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja que el último acorde resuene.",
      ],
      tips: [
        "Las dos manos repican la misma figura, a dos octavas de distancia, como una campana grande y una pequeña.",
        "La mano izquierda sigue con la figura de cuatro notas bajo la melodía, para que las campanas nunca se callen.",
        "Las dos manos suben juntas. El pulgar derecho pasa por debajo, y el dedo 3 izquierdo cruza por encima.",
      ],
      tricky: {
        6: "La mano derecha hace sonar su mi grave entre las notas de la melodía, mientras la mano izquierda salta para el bajo stride.",
        15: "Toca ligero el acorde de sol, luego el mi y el re con los dedos 5 y 4, y levanta la mano para el acorde siguiente.",
        16: "La mano derecha repite un mismo acorde mientras la mano izquierda salta. Deja que el la de arriba siga sonando.",
      },
    },
  },
};
