/** The guide of *Mary Had a Little Lamb* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Sarah Josepha Hale publicó el poema sobre Mary y su corderito en Boston en 1830. " +
    "La melodía con la que se canta hoy es tradicional, y nadie sabe quién unió primero el poema y la melodía. " +
    "La melodía usa solo cuatro notas, y por eso tantos libros de piano para principiantes empiezan con ella.",
  funFact:
    "En 1877, Thomas Edison recitó sus primeros versos en su nuevo fonógrafo. Fue el primer verso grabado y reproducido de la historia.",
  versions: {
    common: {
      practice: [
        "Toca con la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Ahora la mano izquierda sola. Mantiene una nota durante cada compás entero.",
        "Junta las dos manos, todavía despacio.",
        "Toca toda la canción con las dos manos a velocidad completa.",
      ],
      tips: [
        "Aquí cada dedo tiene su propia tecla: el pulgar en el do y el dedo 3 en el mi.",
        "El meñique de la mano izquierda toma el sol grave, y el pulgar espera encima, en el do.",
        "El último do dura todo el compás, así que cuenta cuatro tiempos antes de levantar la mano.",
      ],
      tricky: {
        3: "La mano izquierda va al sol grave mientras la derecha repite el re. Usa el meñique.",
        4: "La melodía salta el fa, de mi a sol. Toca el sol con el meñique, y deja los otros dedos sobre sus teclas.",
        7: "La mano derecha se mece entre re y mi con los dedos 2 y 3, mientras el bajo baja al sol.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano derecha sola en la segunda mitad, donde entran las corcheas.",
        "Toca con la mano izquierda sola, y mantén presionado cada acorde hasta el siguiente.",
        "Junta las manos en los primeros ocho compases.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cada par rápido es un tiempo partido en dos. Cuenta «uno y, dos y».",
        "El meñique de la mano izquierda baja hasta el fa sostenido para este acorde.",
        "Presiona juntos si y re al final del compás, como si fueran una sola tecla.",
      ],
      tricky: {
        9: "El dedo 4 toca el do rápido, y luego el dedo 2 toma el la. Mantén quieta la mano.",
        11: "La mano izquierda baja hasta el fa sostenido mientras la derecha agrega un si rápido.",
        13: "Aquí vuelven las notas rápidas. Cuenta «uno y, dos y» para que salgan parejas.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las terceras de la mano derecha, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en los primeros cuatro compases, despacio.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "El fa rápido al final del compás te lleva de vuelta al mi para la frase siguiente.",
        "La melodía es la nota de arriba de cada tercera, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        9: "Aquí empiezan las terceras. Tu pulgar pasa de do a si debajo de cada doble nota.",
        13: "Después de la doble nota larga empieza la última frase. Presiona las dos notas de cada doble nota como una sola.",
        15: "Las dobles notas cambian en cada tiempo, y el bajo cambia de acorde a mitad del compás.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta abajo a la nota del bajo y vuelve arriba al acorde.",
        "Toca solos los acordes de la mano derecha, y deja que el dedo de arriba cante la melodía.",
        "Junta las manos en los primeros ocho compases a tres cuartos de velocidad.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el stride, mira la nota del bajo y deja que la mano encuentre el acorde al tacto.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "Mantén el último acorde con el pedal hasta que se apague.",
      ],
      tricky: {
        3: "El bajo salta abajo a la octava de sol grave. Echa un vistazo a la mano izquierda antes de que empiece el compás.",
        11: "Deja el pulgar en el sol y la forma del acorde quieta, para que solo viaje la mano izquierda.",
        15: "Levanta la mano después del último re, para que tenga tiempo de abrirse bien para el acorde final.",
      },
    },
  },
};
