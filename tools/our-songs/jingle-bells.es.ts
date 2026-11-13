/** The guide of *Jingle Bells* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "James Lord Pierpont publicó esta canción en Boston en 1857, con el título One Horse Open Sleigh. " +
    "Cuenta un paseo rápido por la nieve en un trineo tirado por un solo caballo. " +
    "La canción nunca menciona la Navidad, y aun así se volvió una de las canciones navideñas más conocidas del mundo.",
  funFact: "En 1965, dos astronautas tocaron Jingle Bells en el espacio, con una armónica pequeña y un puñado de cascabeles.",
  versions: {
    common: {
      practice: [
        "Toca con la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí la melodía sube hasta el fa.",
        "Junta las dos manos. La mano izquierda mantiene una nota grave o una quinta en cada compás.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Corta, corta, larga: el tercer mi dura dos tiempos, como el tintineo de un cascabel.",
        "Aquí cada dedo tiene su propia tecla: el pulgar en do, el meñique en sol.",
        "Ve un poco más despacio en las últimas notas, y deja sonar el do grave.",
      ],
      tricky: {
        5: "El dedo 4 toca fa tres veces, mientras el meñique izquierdo baja hasta el fa grave.",
        13: "Vuelven los fa. Mantén el dedo 4 en fa, y baja otra vez el meñique izquierdo al fa grave.",
        15: "El dedo 5 toca sol dos veces, y luego los dedos 4 y 2 bajan, listos para el último do del pulgar.",
      },
    },
    rare: {
      practice: [
        "Aplaude el ritmo del compás 3, y luego toca con la mano derecha sola.",
        "Toca con la mano izquierda sola, y mantén cada acorde hasta el siguiente.",
        "Junta las manos en los compases 5 a 8, donde están las notas rápidas.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Larga, corta: el do dura un tiempo y medio, y el re llega rápido después.",
        "Los dos últimos mi son corcheas. Piensa en un tiempo partido en dos.",
        "Toca la nota del bajo de la mano izquierda un poco más fuerte que el acorde que la sigue.",
      ],
      tricky: {
        5: "Cuatro fa con el dedo 4: el último es rápido, así que te lleva directo al compás 6.",
        9: "El meñique izquierdo vuelve a subir de si a do cuando la melodía empieza de nuevo.",
        13: "Vuelven los fa. Deja que el dedo 4 rebote en fa, y cuenta el último, que es corto.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti con la mano izquierda sola hasta que ruede solo: grave, agudo, medio, agudo.",
        "Toca las terceras y sextas de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en los primeros cuatro compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que los cascabeles de la melodía suenen por encima.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
        "Cambia el pedal al comienzo y a la mitad de cada compás, cuando la mano izquierda empieza su patrón otra vez.",
      ],
      tricky: {
        12: "Después de la tercera, la mano baja corriendo por sol, fa, mi y re con los dedos 5, 4, 3 y 2.",
        14: "En el segundo tiempo, la sexta se vuelve tercera: el pulgar deja el la, y los dedos 2 y 4 toman do y mi.",
        16: "Levanta las dos manos después del re, y luego baja al último acorde con la mano izquierda en octavas.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la nota del bajo, y vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el meñique cante la melodía.",
        "Toca los pasajes de semicorcheas de los compases 9 a 12 con la mano derecha sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la nota del bajo y deja que la mano encuentre el acorde al tacto.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "Cada pasaje cabe en un tiempo: cuatro notas rápidas, y el cascabel vuelve a sonar.",
      ],
      tricky: {
        6: "En el segundo tiempo, el pulgar y el meñique bajan una tecla, mientras el dedo 2 se queda en do.",
        7: "La melodía baja de mi a re sobre un sol y un si mantenidos. El dedo 4 toma el re.",
        8: "Abre la mano para cuatro notas a la vez: sol, si, fa y sol. Deja que el meñique cante.",
      },
    },
  },
};
