/** The guide of *Black Flag Jig* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Black Flag Jig es una melodía nuestra, al estilo de la música de una película de aventuras con espadas y piratas. " +
    "Baila en un rápido seis por ocho, como un marinero que baila una giga en cubierta.",
  funFact: "La giga es un baile animado que se cuenta en dos grupos de tres. Llegó de las islas Británicas en el siglo XVI.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. En el compás 7, el pulgar baja hasta do sostenido.",
        "Ahora la mano izquierda sola. Mantiene dos teclas y las cambia como mucho dos veces por compás.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cuenta seis tiempos en cada compás: larga, corta, larga, corta. Ese es el brinco de la giga.",
        "El dedo 5 toma si bemol, una tecla negra. Luego toca el la al comienzo del compás 3, y los dedos bajan caminando.",
        "El pulgar toca do sostenido, la tecla negra justo debajo de re. Luego la mano se abre hasta el la.",
      ],
      tricky: {
        2: "Los dedos 3, 4 y 5 suben por las notas sol, la y si bemol. Luego el dedo 3 vuelve a sol.",
        6: "La mano baja caminando de sol a re con los dedos 5, 4, 3 y 2. El pulgar espera sobre do sostenido.",
        10: "Los dedos 4 y 5 se mecen entre sol y la. Luego el dedo 2 cae en mi.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: una nota grave larga, y luego un acorde corto.",
        "Toca la mano derecha sola en los primeros ocho compases, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cada medio compás de la mano izquierda tiene una nota larga y un acorde corto. Siente el rebote: larga, corta.",
        "Los pares rápidos de corcheas van el doble de rápido que las notas cortas. Cuéntalas parejas.",
        "Termina con re y fa a la vez. Los dedos 1 y 3 las presionan como si fueran una sola.",
      ],
      tricky: {
        4: "El pulgar mantiene re durante tres tiempos, y luego el dedo 4 mantiene el la. La mano izquierda rebota debajo de las dos.",
        6: "Los dedos 5, 4, 3 y 2 bajan caminando de sol a re. La mano izquierda pasa del acorde de sol menor al de do mayor.",
        13: "El dedo 5 llega al la, y luego el pulgar cae en re. Mi y fa son corcheas rápidas antes del siguiente la.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola hasta que los acordes arpegiados rueden por sí mismos.",
        "Toca la mano derecha sola en los compases 9 a 16, y pasa el pulgar por debajo al subir.",
        "Toca las terceras y sextas de la mano derecha sola, y presiona las dos notas de cada doble nota como si fueran una.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces en cada compás.",
        "Después de fa, pasa el pulgar por debajo hasta sol. Luego los dedos 2 y 3 llegan al la y al si bemol.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        14: "La mano salta entre si bemol, sol y re, y luego se abre hasta do. El dedo 2 se queda sobre sol todo el compás.",
        19: "El pulgar mantiene do sostenido, y luego se desliza hasta do. El dedo de arriba baja caminando por las notas la, sol, fa y mi.",
        21: "Los dedos 1 y 5 mantienen cada sexta y bajan deslizándose tecla por tecla. El dedo 4 toma el último fa.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: una octava, y luego un acorde dos veces, cada uno con un silencio corto para saltar.",
        "Toca los arpegios de la mano izquierda sola. Suben dos octavas y vuelven a bajar rodando.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Usa el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Deja que los arpegios suban y bajen como un barco sobre las olas.",
        "Toca la nota de arriba de cada acorde un poco más fuerte, para que la melodía suene clara.",
      ],
      tricky: {
        2: "La mano izquierda salta de una octava de sol grave a un acorde de sol, re y sol. La mano derecha sube por las notas sol, la y si bemol.",
        18: "Levanta la mano después de cada acorde, y llega al siguiente. El pulgar sube de si bemol a re y vuelve.",
        21: "El pulgar se queda en re durante dos acordes, y luego cae en si bemol. El dedo de arriba canta las notas si bemol, la, sol y fa.",
      },
    },
  },
};
