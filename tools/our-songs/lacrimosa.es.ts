/** The guide of *Lacrimosa* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart murió en 1791 mientras escribía su Réquiem. " +
    "Su alumno Franz Xaver Süssmayr lo terminó, y Breitkopf & Härtel imprimió la partitura en 1800. " +
    "La película Amadeus cuenta cómo Mozart escribió este Réquiem.",
  funFact: "El borrador del propio Mozart para el Lacrimosa se interrumpe después de sus primeros ocho compases.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Esos compases le responden a la melodía con una frase nueva.",
        "Ahora la mano izquierda sola. Mantiene cada forma durante medio compás.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Levanta la mano justo antes del fa agudo. Luego el dedo 5 llega a esa nota con suavidad.",
        "Cada par de notas que baja es un suspiro. Toca la primera nota un poco más fuerte que la segunda.",
        "Cada dedo se queda en su propia tecla. El dedo 2 siempre toca do sostenido.",
      ],
      tricky: {
        1: "Abre la mano derecha desde el la hasta el fa. Levántala un momento antes de que el dedo 5 toque el fa.",
        7: "La mano izquierda cambia del la al sol a la mitad del compás. El dedo 5 toma el sol grave.",
        15: "Los dedos 5, 4 y 2 bajan del fa al do sostenido. La mano izquierda cambia al la en la nota larga.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca con la mano izquierda sola. Cada acorde suena dos veces: largo, y luego corto.",
        "Junta las manos en los primeros doce compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cuenta seis tiempos en cada compás. La mano izquierda toca en los tiempos 1, 3, 4 y 6.",
        "Deja que la mano izquierda se meza con calma, como un bote lento, y tócala más suave que la melodía.",
        "El dedo 5 sube hasta el sol por una nota, y luego la mano vuelve.",
      ],
      tricky: {
        11: "Toca mi dos veces con el dedo 4. Levanta un poco el dedo entre las dos notas.",
        12: "Estira el dedo 5 hasta el sol, y luego deja que los dedos 4 y 2 vuelvan a caer en mi y do sostenido.",
        17: "El la grave se queda. El pulgar deja el re, y el dedo 2 toca el do sostenido justo debajo.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola. Cada tiempo empieza en la nota del bajo, y luego se mece entre dos notas más agudas.",
        "Toca las sextas de la mano derecha sola, y presiona las dos notas de cada doble nota como una.",
        "Junta las manos en los primeros doce compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces en cada compás.",
        "El si bemol del bajo roza contra el la mantenido. Ese roce triste es a propósito.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        13: "Las dobles notas se abren de una tercera a una sexta. Los dedos 2 y 5 toman el la y el fa a la vez.",
        25: "La melodía salta una octava arriba. Lleva el pulgar del la grave al la agudo en un solo arco suave.",
        29: "A la mitad de este compás, el dedo 2 se queda en el si bemol y el pulgar agrega el sol debajo.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola: la octava, dos notas rápidas, y luego un silencio corto para saltar.",
        "Toca las octavas de la mano derecha sola. Mantén la mano abierta, con el pulgar y el meñique listos.",
        "Junta las manos en los primeros doce compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Aprovecha el silencio corto al final de cada tiempo para saltar a la octava siguiente.",
        "Deja que el meñique cante un poco más fuerte la nota de arriba de cada octava.",
        "Toca el último acorde suave, y mantenlo hasta que el sonido se apague.",
      ],
      tricky: {
        13: "Las dobles notas se abren de una tercera a una sexta. Los dedos 2 y 5 toman el la y el fa a la vez.",
        25: "Empiezan las octavas. Abre la mano con el pulgar en el la grave y el meñique en el la de arriba.",
        27: "Aprovecha el silencio corto después del la para saltar arriba a la octava de fa.",
      },
    },
  },
};
