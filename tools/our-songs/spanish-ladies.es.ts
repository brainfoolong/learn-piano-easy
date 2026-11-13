/** The guide of *Spanish Ladies* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Spanish Ladies es una canción marinera tradicional sobre una tripulación que navega de regreso a Inglaterra desde España. " +
    "Una versión de 1769 se conserva en el cuaderno de bitácora de un barco.",
  funFact: "En la película Jaws, de 1975, el cazador de tiburones Quint canta una versión de balleneros de esta canción.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 5 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 9 con la mano derecha sola, y sube la mano en el silencio corto.",
        "Ahora la mano izquierda sola. Mantiene una misma posición durante todo un compás.",
        "Junta las dos manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el pulgar en el si grave. Luego el dedo 3 toca el mi.",
        "Suelta el segundo si un poco antes. En ese hueco, sube el pulgar hasta el mi.",
        "Cuenta tres tiempos lentos en cada compás, como un barco que se mece sobre las olas.",
      ],
      tricky: {
        4: "El dedo 5 toca el sol, y luego los dedos 4 y 3 bajan hasta el mi. La mano izquierda mantiene el mi y el si.",
        6: "Ahora el pulgar toca el mi dos veces, y el dedo 2 toca el fa sostenido. La mano subió hasta el mi.",
        16: "El dedo 4 toca el la y el dedo 5 toca el si. Luego el dedo 2 baja al fa sostenido, sobre el si de la mano izquierda.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola: una nota grave, y luego dos veces una nota o un acorde más ligero.",
        "Toca los primeros nueve compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Toca la nota grave del bajo de vals un poco más fuerte que los dos acordes que la siguen.",
        "Suelta el segundo si un poco antes. En ese hueco, sube el pulgar hasta el mi.",
        "Termina con mi y sol juntos. Los dedos 1 y 3 los presionan como una sola nota.",
      ],
      tricky: {
        6: "Ahora el pulgar toca el mi dos veces, y el dedo 2 toca el fa sostenido. La mano izquierda toca un mi grave, y luego el si dos veces.",
        10: "Los dedos 5, 4, 3 y 2 bajan del si al fa sostenido. Luego el dedo 3 vuelve a subir al sol.",
        16: "Los dedos 4, 3 y 2 bajan hasta el fa sostenido. Luego los dedos 2 y 4 presionan juntos el fa sostenido y el la.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca los compases 10 a 17 con la mano derecha sola, y pasa el pulgar por debajo al subir.",
        "Toca las terceras y sextas de la mano derecha sola, y presiona las dos notas de cada doble nota como una sola.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, una vez en cada compás.",
        "Pasa el pulgar por debajo hasta el la después de que el dedo 3 toque el sol.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        16: "Los dedos 5, 4, 3 y 2 bajan desde el si. Luego el pulgar toma el re sostenido, que lleva de vuelta a casa, al mi.",
        22: "El dedo 5 toca el mi dos veces arriba, mientras la nota de abajo pasa del sol al si. Luego el pulgar alcanza el la.",
        26: "Levanta las dos manos después del acorde de si mayor, y apoya las dos juntas en el último acorde de mi menor.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola: una octava en el primer tiempo, y luego un acorde dos veces, cada uno con un silencio corto para saltar.",
        "Toca los arpegios de la mano izquierda sola. El pulgar pasa por debajo, y el dedo 3 cruza por encima.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Usa el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Deja que los arpegios rueden suave, como olas debajo del barco.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        11: "Después del sol, pasa el pulgar derecho por debajo hasta el la. Mientras tanto, la mano izquierda sube desde el la grave a lo largo de dos octavas.",
        21: "Mantén el pulgar en el sol durante todo el compás. Solo se mueve la nota de arriba, del mi al re y al si.",
        26: "Levanta las dos manos en el silencio corto del compás 25. Luego apóyalas en el último acorde, sobre la octava de mi grave.",
      },
    },
  },
};
