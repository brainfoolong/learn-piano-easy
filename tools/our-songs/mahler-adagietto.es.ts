/** The guide of *Adagietto* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "El Adagietto es el lento cuarto movimiento de la Quinta Sinfonía de Mahler, estrenada en Colonia en 1904. " +
    "La película Death in Venice, de Luchino Visconti, de 1971, lo hizo famoso mucho más allá de la sala de conciertos.",
  funFact: "Desde esa película, es la música más conocida que Mahler escribió.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. El compás 5 tiene un si, y los compases 6 y 7 un fa sostenido.",
        "Ahora la mano izquierda sola. Mantiene cada nota medio compás o un compás entero.",
        "Toca los primeros ocho compases con las dos manos juntas, despacio.",
        "Toca toda la canción con las dos manos a velocidad completa.",
      ],
      tips: [
        "Cuenta cinco negras de silencio. Luego do, re y mi llevan suavemente a la melodía.",
        "Toca el segundo fa con el pulgar. Luego los dedos 4 y 3 alcanzan el si bemol y el la.",
        "Esta música es lenta y tierna. Deja cantar cada nota larga, y nunca te apures.",
      ],
      tricky: {
        4: "Toca el primer do con el dedo 5, y repítelo con el dedo 4. Luego el dedo 5 toma el re.",
        5: "El si es una tecla blanca, y el si bemol que sigue es una tecla negra. Los dedos 3 y 2 los tocan.",
        11: "Los dedos 4, 3 y 2 bajan de si bemol a sol. Luego el pulgar toma el mi.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola. Una nota grave llega en el pulso, y un acorde le responde.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda toca en cada tiempo: una nota grave y luego un acorde. Cuéntalo como uno, dos.",
        "Mantén muy suave la mano izquierda, para que la melodía flote por encima.",
        "Los dedos 3 y 5 presionan juntos el si bemol y el re. Deja que el re cante un poco más.",
      ],
      tricky: {
        5: "El si es una tecla blanca, y el si bemol que sigue es una tecla negra. Al principio la mano izquierda toca solo sol y re.",
        7: "El pulgar toca primero el fa sostenido y al final el fa. La mano izquierda pasa de si bemol a do a mitad del compás.",
        14: "El dedo 4 toca el si bemol dos veces en este compás. La mano izquierda pasa de fa a sol a mitad del compás.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las terceras y sextas de la mano derecha, y presiona las dos notas de cada doble nota como una sola.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces en cada compás.",
        "Mantén el bajo de Alberti suave y parejo, como un arpa debajo de los violines.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        18: "El pulgar baja del do al la para la sexta. Luego sube al fa para las notas sueltas.",
        23: "Abre la mano de re a si bemol para la sexta. Luego los dedos 4, 3 y 2 bajan hasta el fa.",
        24: "El pulgar baja de mi a si bemol, mientras los dedos 3 y 5 toman mi y sol.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola: una octava en el pulso y luego un acorde, cada uno con un silencio corto para saltar.",
        "Toca solos los arpegios de la mano izquierda. El pulgar pasa por debajo, y el dedo 3 cruza por encima.",
        "Toca solos los acordes de la mano derecha, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Usa el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Deja que los arpegios fluyan suaves debajo de la melodía, y cambia el pedal en cada acorde nuevo.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        14: "La mano izquierda sube dos octavas desde el si bemol, y luego desde el sol. El dedo 3 cruza sobre el pulgar cada vez.",
        16: "La mano derecha mantiene el fa todo el compás, mientras la izquierda sube dos veces desde el fa.",
        17: "Después del fa, el pulgar salta arriba al do. Luego los dedos 2 y 3 suben a re y mi.",
      },
    },
  },
};
