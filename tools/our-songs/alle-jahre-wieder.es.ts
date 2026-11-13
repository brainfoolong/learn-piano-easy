/** The guide of *Alle Jahre wieder* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Alle Jahre wieder significa «Cada año otra vez» en alemán. " +
    "Es una de las canciones de Navidad alemanas más conocidas. " +
    "Wilhelm Hey escribió sus tres estrofas en 1837, y estas cuentan cómo el Niño Jesús baja a la tierra cada año. " +
    "Friedrich Silcher escribió la melodía y la publicó en 1842, en una colección de doce canciones para niños.",
  funFact:
    "La misma letra también se canta con una melodía de Christian Heinrich Rinck. " +
    "Hoy esa melodía suele llevar otro poema, Abend wird es wieder.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí la melodía sube hasta el do agudo.",
        "Ahora la mano izquierda sola. Mantiene una forma y la cambia como mucho una vez por compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El primer sol es largo y el la es corto, como un pequeño impulso antes de que vuelva el sol.",
        "Después del re largo, levanta la mano y pon el pulgar en el do central.",
        "Mientras suena el do agudo, desliza el meñique hacia abajo hasta el si.",
      ],
      tricky: {
        3: "El pulgar toma el do central. Luego los dedos 2, 3 y 4 suben hasta el fa y vuelven al mi.",
        6: "El meñique toca el do agudo y luego se desliza hasta el si. Los dedos 4 y 3 toman el la y el sol.",
        14: "El mismo deslizamiento que en el compás 6: mantén el do agudo y luego baja el meñique hasta el si.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca solo el bajo de la segunda estrofa: nota grave, nota aguda, una en cada tiempo.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Para el acorde de fa, el pulgar sube del sol al la, y vuelve para el acorde siguiente.",
        "En la segunda estrofa, toca las notas graves un poco más fuerte que las agudas.",
        "Re y mi son rápidos, y el fa cae en la mitad del compás junto con el acorde.",
      ],
      tricky: {
        3: "El pulgar derecho baja hasta el do central, mientras la mano izquierda suelta el mi para el segundo acorde.",
        6: "Aquí se mueven las dos manos. El pulgar izquierdo sube hasta el la, y el meñique derecho se desliza hasta el si.",
        14: "Sobre el fa y el do graves, el meñique derecho mantiene el do agudo y luego se desliza hasta el si.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las terceras y sextas de la mano derecha, y mantén juntas las dos notas de cada par.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante encima.",
        "La melodía es la nota de arriba de cada par, así que deja que el dedo de arriba guíe.",
        "Cambia el pedal en la mitad del compás, donde cambia el acorde.",
      ],
      tricky: {
        6: "En la mitad del compás, el bajo de Alberti pasa de fa a sol séptima. Cambia el pedal con él.",
        9: "La mano derecha salta una octava hacia arriba y toca pares. Encuentra el primer par antes de que empiece el compás.",
        14: "El la y el do, luego el sol y el si, luego el fa y el la: los pares bajan paso a paso mientras el meñique guía.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta hacia abajo para la octava y vuelve arriba para el acorde.",
        "Toca solos los acordes de la mano derecha, y deja que el meñique cante la melodía.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava y deja que la mano encuentre el acorde al tacto.",
        "Arriba, las octavas deben sonar como campanas. Mantén la muñeca suelta.",
        "En cada arpegio, el dedo 3 cruza por encima del pulgar al subir.",
      ],
      tricky: {
        10: "Después del arpegio de do, la mano izquierda baja hasta el sol grave en el silencio corto.",
        12: "La mano derecha mantiene su octava, así que fíjate en la mano izquierda durante los dos arpegios de sol.",
        14: "Las octavas saltan hasta el do agudo, mientras la mano izquierda sube por fa y luego por sol séptima.",
      },
    },
  },
};
