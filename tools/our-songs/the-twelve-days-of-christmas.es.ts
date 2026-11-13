/** The guide of *The Twelve Days of Christmas* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Twelve Days of Christmas es un villancico inglés y también una canción infantil. " +
    "Su letra se imprimió por primera vez en Londres en 1780, en un libro para niños llamado Mirth Without Mischief. " +
    "La melodía que se canta hoy viene del cantante inglés Frederic Austin, y su arreglo se publicó en 1909.",
  funFact:
    "Hace tiempo, la gente usaba la canción para un juego de memoria. Cada persona repetía los regalos, y cada error costaba una prenda, como un beso o un dulce.",
  versions: {
    common: {
      practice: [
        "Toca los primeros tres compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 4 a 7 con la mano derecha sola, desde los anillos de oro hasta el la grave.",
        "Ahora la mano izquierda sola. Cambia de forma solo al comienzo y a la mitad de cada compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El pulgar toca los tres sol graves, y el dedo 2 toma cada do del compás 2.",
        "Mantén el sol largo durante todo el compás mientras cuentas hasta ocho. Ese es el anillo de oro.",
        "Después del silencio corto, el pulgar llega al la grave. El dedo 5 soltó el fa un momento antes.",
      ],
      tricky: {
        3: "Los dedos 3, 4 y 5 suben hasta el fa. Luego el pulgar se desliza arriba al re, y el dedo 2 mantiene el mi largo.",
        4: "El dedo 3 mantiene el sol, y luego el dedo 5 sube hasta el la. La mano izquierda pasa de su quinta a un re solo.",
        6: "Toca otra vez el sol con el dedo 5, y luego baja hasta el do con el pulgar. Levanta la mano antes del la grave.",
      },
    },
    rare: {
      practice: [
        "Toca la primera estrofa con la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca los compases 3 a 5 con la mano derecha sola, donde los anillos de oro suben al la y al fa sostenido.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El dedo 4 toca el fa sostenido, una tecla negra. Luego el dedo 5 llega al sol largo.",
        "Después del sol grave, la mano sube para que el dedo 2 toque el mi. El sol es largo, así que hay tiempo.",
        "En la segunda estrofa, toca la nota grave un poco más fuerte que el acorde que la sigue.",
      ],
      tricky: {
        3: "Los dedos 3, 4 y 5 suben hasta el fa. Luego el pulgar se desliza arriba al re, y el dedo 2 mantiene el mi largo.",
        10: "El pulgar deja el último do y llega al sol grave para la siguiente estrofa. La mano izquierda toca el do, y luego el re y el fa.",
        12: "Las mismas notas que en el compás 3, ahora sobre un bajo y un acorde que se turnan.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca los acordes arpegiados de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía suene por encima.",
        "Aquí bajan las dos manos. El pulgar derecho llega al sol grave, y la mano izquierda a un sol grave.",
        "Cambia el pedal en cada medio compás, cuando la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        12: "Los dedos 3, 4 y 5 suben hasta el fa, y el pulgar se desliza arriba al re. La mano izquierda pasa de sol a do.",
        15: "La mano derecha baja del sol al do, y luego el dedo 5 sube hasta el fa. Levanta la mano izquierda después de cada acorde.",
        17: "La mano derecha sube desde el sol grave, para que el dedo 2 toque el mi. La mano izquierda pasa de do a fa.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava grave, y vuelve arriba al acorde.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Toca los compases 13 a 15 con las dos manos, despacio, donde los arpegios corren debajo de los anillos de oro.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "En cada arpegio, el dedo 3 cruza por encima del pulgar al subir.",
        "Deja sonar la octava de sol durante todo el compás, como un anillo de oro levantado hacia la luz.",
      ],
      tricky: {
        14: "La mano derecha mantiene la octava de sol, mientras la mano izquierda corre por arpegios de sol debajo.",
        15: "El dedo 5 toca otra vez el sol y la mano baja hasta el do. Debajo, los arpegios pasan de sol a do, y luego a fa.",
        17: "La mano derecha sube desde el sol, para que el dedo 2 toque el mi. La mano izquierda pasa de do a fa.",
      },
    },
  },
};
