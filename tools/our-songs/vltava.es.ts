/** The guide of *Vltava* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Smetana escribió Vltava en 1874. Es el segundo de seis poemas sinfónicos de su ciclo Má vlast, «Mi patria». " +
    "Su música pinta el río que pasa por Praga. " +
    "La película The Tree of Life (2011), de Terrence Malick, la usa.",
  funFact:
    "Su famosa melodía es una adaptación de La Mantovana, una melodía que se atribuye al tenor italiano del Renacimiento Giuseppe Cenci.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 5 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 9 con la mano derecha sola. Ahí la melodía baja caminando hasta el mi.",
        "Ahora la mano izquierda sola. Mantiene cada forma un compás entero, y nunca se mueve.",
        "Junta las dos manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el pulgar en el si. Luego los dedos 2 a 5 suben del mi al la.",
        "Suelta el la un poco antes. En el hueco corto, sube la mano una tecla, con el dedo 4 en el si.",
        "Cuenta seis tiempos en cada compás: largo, corto, largo, corto. El río sigue fluyendo y nunca se apura.",
      ],
      tricky: {
        3: "El dedo 4 toca el si tres veces. La mano acaba de subir una tecla, así que el dedo 5 espera sobre el do.",
        5: "Después de los dos do agudos, el dedo 4 vuelve a tocar el si. Mantén quieta la mano, y deja que los dedos bajen caminando.",
        8: "Toca los dos primeros fa sostenido con el pulgar, y el tercero con el dedo 2. Así el pulgar queda libre para el mi.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola: una nota grave larga, y luego una nota o un acorde corto.",
        "Toca los primeros nueve compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cada medio compás tiene una nota larga y una corta, en las dos manos. Siente el vaivén: largo, corto.",
        "Suelta el la un poco antes. En el hueco corto, sube la mano una tecla, con el dedo 4 en el si.",
        "Termina con el mi y el sol juntos. Los dedos 1 y 3 los presionan como una sola nota.",
      ],
      tricky: {
        3: "Después de que la mano suba, el dedo 4 toca el si tres veces. La mano izquierda toca un mi largo, y luego un si corto.",
        5: "El dedo 4 vuelve a tocar el si tres veces, y el dedo 3 espera sobre el la para el compás siguiente.",
        12: "Los dedos 3, 4 y 5 suben del sol al si. Luego el la y el sol vuelven rápido antes del si largo.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola hasta que los acordes arpegiados fluyan solos.",
        "Toca los compases 10 a 17 con la mano derecha sola, y haz el paso del pulgar al subir.",
        "Toca las terceras y sextas de la mano derecha sola, y presiona las dos notas de cada doble nota como una sola.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces en cada compás.",
        "Pasa el pulgar por debajo hasta el sol después del fa sostenido. Luego los dedos 2, 3 y 4 llegan al la, al si y al do.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        16: "El pulgar toma el re sostenido, y la mano izquierda toca un re sostenido grave debajo. Los dos llevan de vuelta a casa, al mi.",
        17: "Los dedos 3, 2 y 1 bajan caminando hasta el mi. Luego el pulgar salta abajo al si, la anacrusa de la melodía.",
        24: "Los dedos 1 y 3 mantienen el re sostenido y el fa sostenido. Luego el pulgar se estira hacia abajo hasta el la para la sexta.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola: una octava en el pulso, y luego un acorde dos veces, cada uno con un silencio corto para saltar.",
        "Toca los arpegios de la mano izquierda sola. El pulgar pasa por debajo, y el dedo 3 cruza por encima.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Usa el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Deja que los arpegios fluyan suaves, como el río bajo la melodía.",
        "Algunos acordes chocan con el bajo a propósito. Toca la nota de arriba de cada acorde un poco más fuerte.",
      ],
      tricky: {
        20: "Abre la mano sobre el do, el mi, el la y el do para el primer acorde. Luego el pulgar sube al mi para el segundo.",
        22: "El acorde de la menor suena tres veces. Mantén la mano suelta, y toca el último con los dedos 2 y 5.",
        24: "Mantén los acordes de si mayor, y luego usa el silencio corto para abrir la mano sobre el mi, el sol, el si y el mi.",
      },
    },
  },
};
