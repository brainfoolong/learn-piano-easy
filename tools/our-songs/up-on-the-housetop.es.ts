/** The guide of *Up on the Housetop* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Benjamin Hanby escribió esta canción navideña en 1864, cuando dirigía una escuela de canto en New Paris, Ohio. " +
    "La editorial Root & Cady la publicó por primera vez en la revista Our Song Birds. " +
    "Se cree que es la primera canción navideña que trata sobre todo de Santa Claus. " +
    "Hanby escribió unas 80 canciones antes de morir de tuberculosis en 1867.",
  funFact:
    "Un libro la cuenta como la segunda canción navideña no religiosa más antigua. Solo Jingle Bells, publicada en 1857, es más antigua.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca el estribillo con la mano derecha sola. Ahora se suma el dedo 3 en el fa.",
        "Ahora la mano izquierda sola. Mantiene una forma durante medio compás o un compás entero.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Apoya el pulgar en el re, y los dedos 2 a 5 en el mi, el fa, el sol y el la.",
        "Levanta un poco la mano después del re, para que el pulgar baje al do en el compás 2.",
        "Aquí empieza el estribillo. Tócalo un poco más brillante que la estrofa.",
      ],
      tricky: {
        1: "Los dedos 4 y 5 se mecen entre el sol y el la. Luego el dedo 2 toca el mi y el pulgar toca el re.",
        2: "Levanta la mano después del re, y apoya el pulgar en el do. El dedo 2 toca el mi y el dedo 4 mantiene el sol.",
        5: "Vuelve el comienzo. Esta vez el dedo 2 mantiene el mi más tiempo, y no hay un re antes del do.",
      },
    },
    rare: {
      practice: [
        "Toca la estrofa con la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca el estribillo con la mano izquierda sola: la fundamental de cada acorde, y luego su quinta.",
        "Toca los compases 5 a 8 con la mano derecha sola, donde llegan las notas cortas.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Mantén cada acorde suave hasta su final, para que la melodía cante por encima.",
        "Después del primer la, los dos la siguientes y los dos sol van el doble de rápido. Tócalos parejos.",
        "En el estribillo, toca cada fundamental un poco más fuerte que la quinta que la sigue.",
      ],
      tricky: {
        2: "El pulgar se desliza del re al do. El dedo 2 toca el mi y el dedo 4 mantiene el sol.",
        6: "El mismo movimiento que en el compás 2: el pulgar se desliza del re al do, mientras empieza el siguiente acorde.",
        7: "El dedo 5 toca el la tres veces, y luego el dedo 4 toca el sol dos veces. Después el dedo 2 toca el mi.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca las terceras de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en la estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía suene por encima.",
        "Presiona a la vez las dos notas de cada tercera, y deja que cante el dedo de arriba.",
        "Cambia el pedal cada medio compás, cuando la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        2: "El pulgar se desliza del re al do, mientras el bajo de Alberti sigue rodando por debajo.",
        6: "El mismo movimiento que en el compás 2. Mantén firme la mano izquierda mientras el pulgar se desliza.",
        13: "Las terceras suben del mi y el sol al fa y el la, y vuelven. Los dedos 2 y 4 les pasan el turno al 3 y al 5.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava grave, y vuelve arriba al acorde.",
        "Toca la estrofa con la mano derecha sola, y mantén ligeros los rellenos rápidos.",
        "Toca los arpegios del estribillo con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "En el relleno rápido, los dedos 5, 4, 3 y 2 bajan caminando del la al mi.",
        "Levanta la mano después del sol, y apoya el acorde de cuatro notas con el pedal pisado.",
      ],
      tricky: {
        3: "El dedo 5 toca el la dos veces, y luego la mano rueda hacia abajo hasta el mi. La mano izquierda salta del fa al do.",
        4: "Después del sol largo, los dedos 3, 2 y 3 tocan rápido el fa, el mi y el fa, y luego la melodía vuelve al sol.",
        7: "El dedo 5 repite el la, y luego el dedo 4 repite el sol. Mantén ligeras las notas rápidas sobre el stride.",
      },
    },
  },
};
