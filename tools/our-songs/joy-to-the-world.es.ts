/** The guide of *Joy to the World* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Lowell Mason publicó esta melodía en Boston, con el nombre de Antioch. " +
    "Lleva una letra que Isaac Watts escribió en 1719. " +
    "Sus primeras cuatro notas coinciden con el comienzo del coro Lift up your heads, del Mesías de Handel.",
  funFact: "Isaac Watts escribió la letra como una nueva versión del Salmo 98, y nunca la pensó como canción de Navidad.",
  versions: {
    common: {
      practice: [
        "Toca los primeros dos compases con la mano derecha sola, un dedo para cada tecla, del do bajando hasta el fa.",
        "Toca los compases 1 a 5 con las dos manos. La mano izquierda termina la escala que baja en los compases 3 y 4.",
        "Toca los compases 13 a 16 con la mano derecha sola. Ahí las notas repetidas suben y bajan.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cada dedo baja una tecla: 5, 4, 3, 2 y luego el pulgar.",
        "La melodía salta a la mano izquierda por dos notas. Deja que la mano izquierda las cante con ganas.",
        "Cuenta parejas las notas repetidas, como campanas que suenan una tras otra.",
      ],
      tricky: {
        3: "El pulgar se desliza del fa al mi, y luego la mano izquierda toca re y do.",
        17: "Levanta la mano después del mi, y apoya el meñique en el do agudo.",
        20: "El pulgar se desliza del re al último do. Mantenlo hasta el final.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca con la mano izquierda sola. Mantiene un acorde en cada mitad del compás.",
        "Junta las manos en los compases 13 a 16, donde están las notas repetidas.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Larga, larga, corta: el la es rápido, y lleva al sol largo.",
        "Toca el fa corto y levanta la mano. El dedo 3 cae en mi, listo para bajar caminando hasta el do.",
        "La melodía sube paso a paso, del la al si y al do. Deja que la música suene un poco más fuerte cada vez.",
      ],
      tricky: {
        3: "La mano ya bajó: el dedo 3 toca mi, el dedo 2 toca re, y el pulgar espera el do.",
        19: "El pulgar toca mi, y luego se desliza hasta el re.",
        20: "El pulgar se desliza hacia abajo una vez más, hasta el último do. Mantenlo hasta el final.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca los primeros cuatro compases con la mano derecha sola. En el compás 3, el dedo 3 cruza por encima del pulgar.",
        "Toca las terceras de los compases 13 a 16 con la mano derecha sola, y presiona las dos notas como una.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la escala que baja suene clara por encima.",
        "La melodía es la nota de arriba de cada tercera, así que deja que guíe el dedo de arriba.",
        "Cambia el pedal al comienzo y a la mitad de cada compás, cuando la mano izquierda empieza su patrón otra vez.",
      ],
      tricky: {
        17: "El pulgar pasa por debajo del dedo 3 hasta el mi. Luego el meñique se estira hasta el do agudo.",
        18: "Después de que el pulgar toque el fa, el dedo 3 cruza por encima de él hasta el mi.",
        20: "Levanta las dos manos después del si y el re, y luego baja al último acorde con la mano izquierda en octavas.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el meñique cante la melodía.",
        "Toca las octavas de los compases 13 a 19 con la mano derecha sola. Mantén la mano abierta y ligera.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la nota del bajo y deja que la mano encuentre el acorde al tacto.",
        "El pasaje rápido del do subiendo hasta el sol es un adorno. Deja que brille, y luego llega al sol.",
        "En las octavas, toca el meñique un poco más fuerte, para que la melodía brille arriba.",
      ],
      tricky: {
        5: "Desde el sol agudo, la mano cae sobre las notas do, fa y la. El meñique sube una tecla, hasta el la.",
        6: "Todo el acorde sube una tecla: las notas do, fa y la se vuelven re, sol y si. Mantén la forma de la mano.",
        9: "El pulgar baja del mi al do, mientras el dedo de arriba cae del do agudo al sol.",
      },
    },
  },
};
