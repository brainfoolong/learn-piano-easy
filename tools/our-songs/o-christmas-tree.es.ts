/** The guide of *O Christmas Tree* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "El título alemán O Tannenbaum significa «Oh, abeto». " +
    "La melodía viene de una vieja canción popular alemana, y nadie sabe quién la escribió. " +
    "Ernst Anschütz, un maestro de Leipzig, escribió en 1824 la letra que se canta hoy. " +
    "Su canción alaba al abeto porque se mantiene verde durante todo el invierno.",
  funFact: "La misma melodía lleva la canción oficial del estado de Iowa, y la canción del estado de Maryland la usó hasta 2021.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cinco compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 9 con la mano derecha sola. Ahí la melodía sube hasta el la.",
        "Ahora la mano izquierda sola. Solo mantiene dos formas, una por compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Larga, corta, larga: la segunda nota, rápida, se apoya en la tercera, como un saltito.",
        "El pulgar empieza en el sol debajo del do central, y el dedo 2 toma el do central.",
        "Levanta la mano antes del sol grave, y deja que el pulgar baje hasta esa nota.",
      ],
      tricky: {
        3: "El dedo 4 toca el mi cuatro veces. Tócalas ligero, para que el segundo mi, el rápido, también suene.",
        4: "Los dedos 3, 4 y 5 suben hasta el fa, y luego el pulgar baja a buscar el si.",
        6: "El meñique toca el sol, el dedo 3 toma el mi, y el meñique se estira hacia arriba hasta el la.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona a la vez las tres notas de cada acorde.",
        "Toca solo el bajo de vals de la segunda estrofa: nota grave, acorde, acorde.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Después del último do, el pulgar sube al siguiente sol. Así la segunda estrofa empieza una octava más arriba.",
        "En el bajo de vals, toca la nota grave un poco más fuerte que los acordes que la siguen.",
        "La frase del medio aparece dos veces, la segunda vez un paso más abajo. Toca el eco un poco más suave.",
      ],
      tricky: {
        13: "Los dedos 2 y 1 tocan el re y el do, y luego el pulgar salta hacia arriba hasta el siguiente sol.",
        16: "Una octava más arriba, los dedos 3, 4 y 5 suben hasta el fa, y el pulgar vuelve a buscar el si.",
        24: "El mismo estiramiento del compás 16: sube hasta el fa, y luego recoge el pulgar hacia abajo hasta el si.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca las sextas de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
        "Cambia el pedal en el segundo tiempo, donde el acorde pasa de sol a do.",
      ],
      tricky: {
        16: "La mano se abre hasta una séptima, sol y fa. Luego el pulgar baja del sol al re para la última doble nota.",
        17: "Después de las dos dobles notas, el meñique sube a buscar el sol agudo.",
        25: "Abre la mano para los dos últimos acordes, y deja sonar el do de arriba.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el meñique cante la melodía.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava y deja que la mano encuentre el acorde al tacto.",
        "Allá arriba, las octavas deben sonar como campanas. Mantén suelta la muñeca.",
        "En cada arpegio, el dedo 3 cruza por encima del pulgar al subir.",
      ],
      tricky: {
        4: "El meñique toca el re, el mi y el fa arriba. Luego la mano baja al acorde de sol, con el meñique en el si.",
        5: "Levanta la mano después del acorde de do, y sube a buscar el sol agudo con el meñique.",
        12: "Los mismos acordes del compás 4. Mantén el meñique en la melodía mientras el pulgar baja un paso.",
      },
    },
  },
};
