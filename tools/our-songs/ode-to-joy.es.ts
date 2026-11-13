/** The guide of *Ode to Joy* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escribió esta melodía para el último movimiento de su Novena Sinfonía, estrenada en Viena en 1824. " +
    "Un coro la canta con el poema de Friedrich Schiller sobre la alegría y la amistad. " +
    "Hoy es el himno de la Unión Europea, y se toca sin palabras. " +
    "En la película Die Hard, suena mientras los ladrones abren la bóveda.",
  funFact: "Beethoven estaba casi completamente sordo cuando se estrenó la Novena, y tuvieron que darle la vuelta para que viera los aplausos.",
  versions: {
    common: {
      practice: [
        "Toca con la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Ahora la mano izquierda sola. Solo cambia entre dos posiciones.",
        "Junta las dos manos en los primeros ocho compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Aquí cada dedo tiene su propia tecla: el pulgar en el do, el meñique en el sol.",
        "El último re dura el doble que las notas anteriores, así que cuenta dos tiempos.",
        "La parte del medio es la suave. Tócala suave, y vuelve con fuerza en el compás 13.",
      ],
      tricky: {
        2: "Baja desde el meñique, un dedo por tecla: 5, 4, 3, 2.",
        12: "El pulgar se estira hacia abajo hasta el sol grave, mientras los otros dedos se quedan donde están.",
        13: "Después del silencio, busca el mi con el dedo 3, y la melodía empieza de nuevo.",
      },
    },
    rare: {
      practice: [
        "Aplaude o marca con golpecitos el ritmo con puntillo del compás 4, y luego toca con la mano derecha sola.",
        "Toca con la mano izquierda sola, y mantén cada acorde hasta el siguiente.",
        "Junta las manos en la parte del medio, donde los acordes cambian cada dos tiempos.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Larga, corta, larga: el fa sostenido dura un tiempo y medio, y el mi medio tiempo.",
        "Las dos notas rápidas son corcheas. Piensa en ellas como un tiempo partido en dos.",
        "Cada acorde de la parte del medio dura dos tiempos. Déjalo sonar hasta el siguiente.",
      ],
      tricky: {
        10: "El fa sostenido y el sol pasan rápido. Mantén los dedos 3 y 4 cerca de sus teclas.",
        12: "El pulgar se desliza del re hacia abajo hasta el la grave, y la mano lo sigue.",
        13: "Desde el la grave, el dedo 3 sube a buscar el fa sostenido. Mira antes de saltar.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca las terceras de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en los primeros cuatro compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
        "Aquí el pedal cambia a la mitad de cada compás. Levántalo cuando empiece el acorde nuevo.",
      ],
      tricky: {
        8: "En el re repetido, cambia del dedo 3 al dedo 1, para que la mano quede lista para el compás 9.",
        13: "Aquí vuelven las terceras. Presiona las dos notas de cada doble nota como si fueran una.",
        16: "El pulgar baja al la grave para el último acorde, debajo del re del dedo 3.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la nota del bajo, y vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca los arpegios de la parte del medio con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la nota del bajo y deja que la mano encuentre el acorde al tacto.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "El arpegio sube con 5, 3, 2, 1, así que el pulgar llega a la nota de arriba.",
      ],
      tricky: {
        2: "La melodía baja mientras el bajo salta. No le quites los ojos a la mano izquierda.",
        6: "Los acordes cambian en cada tiempo. Mantén el pulgar en el la y mueve solo los dedos de arriba.",
        14: "La melodía baja del la al mi mientras el pulgar se queda cerca del do sostenido. Deja que el dedo de arriba la lleve.",
      },
    },
  },
};
