/** The guide of *Jolly Old Saint Nicholas* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Jolly Old Saint Nicholas es una canción navideña que nació como un poema de Emily Huntington Miller. " +
    "Su poema se publicó como Lilly's Secret en la revista The Little Corporal en diciembre de 1865. " +
    "En general se cree que la música es de James R. Murray. " +
    "Se imprimió por primera vez en 1874, en un libro de música escolar llamado School Chimes.",
  funFact: "El director de orquesta Ray Conniff grabó la canción en 1962, para su álbum We Wish You a Merry Christmas.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí la melodía baja hasta el la y vuelve a subir.",
        "Ahora la mano izquierda sola. Mantiene una sola forma en cada compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cuatro notas iguales en una tecla. Tócalas ligeras, como pasos sobre un tejado.",
        "El dedo 2 toca el la en el compás 5 y el si en el compás 7. El resto de la mano nunca se mueve.",
        "Mantén el último do durante los cuatro tiempos, y levanta las dos manos a la vez.",
      ],
      tricky: {
        2: "El dedo 5 deja el mi, y el dedo 4 toca el re tres veces. Mantén el último re durante dos tiempos.",
        10: "Igual que el compás 2. Debajo, la mano izquierda pasa al re y al sol.",
        15: "Los dedos 4, 3, 4 y 5 tocan el re, el do, el re y el mi. Luego el dedo 3 baja al último do.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca la mano izquierda de la segunda vuelta sola: una nota del bajo, y luego su acorde.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Mantén cada acorde suave, para que las notas repetidas de la melodía se oigan claras por encima.",
        "La mano izquierda suelta el fa a la mitad del compás. La mano derecha sube hasta el mi por encima.",
        "La nota del bajo cae en el primer tiempo y el acorde en el tercero. Cuenta cuatro en cada compás.",
      ],
      tricky: {
        2: "El dedo 4 toca el re tres veces, mientras la mano izquierda mantiene un acorde de sol séptima sin su si.",
        10: "Igual que el compás 2. Toca el re repetido parejo y ligero.",
        15: "Los dedos 4, 3, 4 y 5 tocan el re, el do, el re y el mi. A la mitad del compás, la mano izquierda suelta el fa.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solos los acordes arpegiados de la segunda vuelta, y levanta la mano en cada silencio.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía suene por encima como un cascabel de trineo.",
        "Las dos manos se levantan en el silencio. La mano derecha salta una octava arriba, y la izquierda baja a un do grave.",
        "Cambia el pedal en cada medio compás, cuando la mano izquierda empieza su patrón otra vez.",
      ],
      tricky: {
        17: "La mano derecha llega una octava más arriba, en el mi, y la mano izquierda empieza sus acordes arpegiados en el do grave.",
        19: "El dedo 3 toca el do agudo cuatro veces, mientras la mano izquierda se levanta en el silencio y vuelve a caer en el do.",
        25: "Igual que el compás 17, ahora después del re largo. Pon el dedo 5 en el mi agudo.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la octava grave, y vuelve arriba al acorde.",
        "Toca los compases 4 y 5 con la mano derecha sola, y mantén ligero el pasaje rápido.",
        "Toca los arpegios de la segunda vuelta con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "El pasaje rápido después del mi largo baja deslizándose como Santa Claus por la chimenea. Tócalo más ligero que la melodía.",
        "Mantén el pulgar y el meñique abiertos a una octava de distancia, y deja que la muñeca rebote.",
      ],
      tricky: {
        21: "Las octavas bajan del mi al la después de levantar la mano un momento. Mantén la mano en forma de octava mientras viaja.",
        29: "La misma bajada al la del compás 21, mientras la mano izquierda sube por un arpegio de fa debajo.",
        31: "Las octavas avanzan por el re, el do, el re y el mi. Luego la mano se levanta y cae en el acorde de cuatro notas.",
      },
    },
  },
};
