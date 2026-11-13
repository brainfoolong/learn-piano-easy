/** The guide of *William Tell Overture* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La ópera Guillermo Tell, de Rossini, se estrenó en 1829, y fue la última de sus 39 óperas. " +
    "Su obertura termina con un galop rápido, que a menudo se llama «Marcha de los soldados suizos». " +
    "Ese final se volvió el tema musical de The Lone Ranger en la radio, la televisión y el cine.",
  funFact:
    "Algunos escritores han definido a un intelectual como un hombre que puede escuchar la obertura de Guillermo Tell sin pensar en el Lone Ranger.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cinco compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 6 a 9 con la mano derecha sola. Le responden a la melodía con el mismo ritmo.",
        "Ahora la mano izquierda sola. Mantiene una forma durante medio compás o un compás entero.",
        "Junta las dos manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Di «larga, corta, corta» mientras tocas. Ese ritmo es el galope de un caballo.",
        "Levanta el dedo 5 del mi un poco antes. Así el pulgar llega a tiempo al sol grave.",
        "Cada dedo se queda en su propia tecla. El pulgar toca todos los sol.",
      ],
      tricky: {
        7: "El dedo 4 toca el re tres veces. Luego los dedos 2 y 1 bajan al si y al sol.",
        8: "El dedo 3 toca el do, y luego el dedo 5 salta hasta el mi. A la mitad, la mano izquierda cambia al re y al sol.",
        15: "Los dedos 5, 4 y 3 bajan caminando del mi al do. La mano izquierda cambia al re y al sol para las dos últimas notas.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros cinco compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca con la mano izquierda sola. Toca un acorde en cada medio compás.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa, como un caballo al galope.",
      ],
      tips: [
        "Cuenta cuatro tiempos en cada compás, con dos negras por tiempo. La mano izquierda toca en cada tiempo.",
        "Los acordes de dos notas usan los dedos 1 y 3, 2 y 4, o 3 y 5.",
        "Toca ligeras las notas repetidas, con la muñeca suelta, como cascos en un camino.",
      ],
      tricky: {
        7: "Los dedos 2 y 4 tocan juntos el fa sostenido y el la. Luego el dedo 4 repite el la solo.",
        8: "Las dobles notas pasan del sol y el si al fa sostenido y el la. Mantén la mano en su lugar, y cambia solo los dedos.",
        15: "El dedo 4 repite el la, y el dedo 5 toma el si. A la mitad, la mano izquierda vuelve al sol, el si y el re.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola. Cada medio compás se mece de la nota grave a las dos notas de arriba.",
        "Toca las sextas de la mano derecha sola, y presiona las dos notas de cada doble nota como una sola.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada medio compás, cuando vuelve la nota del bajo.",
        "El pasaje sube del la al mi con los dedos 1 a 5. Mantén la muñeca nivelada.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        9: "El dedo 2 mantiene el la después del sol sostenido del pulgar. Luego la mano baja al do sostenido y al mi para el compás siguiente.",
        14: "El dedo 3 repite el do sostenido, y luego los dedos 4 y 5 se estiran hasta el re y el fa sostenido.",
        17: "Usa el silencio después del la largo para subir el pulgar hasta el mi agudo.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola: una octava grave, un acorde, otra octava, un acorde.",
        "Toca las octavas de la mano derecha sola. Mantén la mano abierta, con el pulgar y el meñique listos.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En la mano izquierda, deja que el brazo se balancee entre la octava grave y el acorde.",
        "Deja que el meñique cante la nota de arriba de cada octava un poco más fuerte.",
        "La melodía es la nota de arriba de cada acorde. El dedo 5 la toca siempre.",
      ],
      tricky: {
        13: "Las octavas bajan del fa sostenido al si. Mantén la mano abierta, y deja que rebote en cada una.",
        21: "Los acordes bajan paso a paso. Mantén el dedo 5 en la nota de arriba, y deja que la mano rebote.",
        22: "El pulgar se queda en el la. Los dedos 2, 3 y 5 pasan del do sostenido, el mi y el la al si, el re sostenido y el fa sostenido.",
      },
    },
  },
};
