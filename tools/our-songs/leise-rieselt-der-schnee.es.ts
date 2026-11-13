/** The guide of *Leise rieselt der Schnee* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "El título alemán Leise rieselt der Schnee significa «Cae suave la nieve». " +
    "Es una de las canciones de Adviento más conocidas en lengua alemana. " +
    "El pastor Eduard Ebel escribió la letra en 1895, y su libro la imprimió sin melodía. " +
    "Muchos libros le atribuyen también la melodía a Ebel, pero ninguna fuente lo demuestra, y otros la llaman una canción popular.",
  funFact:
    "Cada una de sus tres estrofas empieza con una imagen breve: la nieve suave, los corazones cálidos y la noche santa que pronto llega.",
  versions: {
    common: {
      practice: [
        "Toca los primeros dos compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 1 a 8 con la mano derecha sola. Es la estrofa entera, una vez.",
        "Ahora la mano izquierda sola. Mantiene una forma por compás, o dos como mucho.",
        "Toca toda la canción con las dos manos juntas, despacio.",
        "Toca toda la canción con las dos manos a velocidad completa.",
      ],
      tips: [
        "Tu pulgar derecho empieza en el do central, y el dedo 3 toma el primer mi.",
        "El dedo 4 toma el do que tu pulgar mantenía en el compás 2, y la mano baja hasta que el pulgar queda en el sol.",
        "Cada frase termina en una nota larga y un silencio corto. Deja sonar la nota y luego respira, como la nieve que cae.",
      ],
      tricky: {
        7: "El dedo 4 mantiene el re, y luego el pulgar baja dos veces al la. Toca ligero el la rápido.",
        9: "La estrofa empieza otra vez. Levanta el dedo 3 del do durante el silencio y ponlo en el mi.",
        15: "El mismo salto que en el compás 7: un re largo y luego un la rápido con el pulgar.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca sola el bajo de vals de la segunda estrofa: nota grave, acorde, acorde.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El pulgar izquierdo se queda en el sol durante toda la primera estrofa. Solo se mueven los otros dedos.",
        "En el bajo de vals, toca la nota grave un poco más fuerte que los acordes que la siguen.",
        "Do sostenido es la única tecla negra de la canción. Deja que el pulgar se deslice sobre ella y vuelva a salir.",
      ],
      tricky: {
        7: "El dedo 4 mantiene el re, y luego el pulgar baja dos veces al la, mientras la mano izquierda cambia de acorde a mitad del compás.",
        9: "La estrofa empieza otra vez, y comienza el vals. Sube el dedo 3 del do al mi durante el silencio.",
        15: "Vuelve el la rápido, ahora sobre el bajo de vals. Antes, cuenta el re largo completo.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las terceras y sextas de la mano derecha, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
        "Cambia el pedal en cada mitad de compás, cuando la mano izquierda empieza otra vez su patrón.",
      ],
      tricky: {
        7: "El la rápido cae en el pulgar mientras la mano izquierda rueda por re menor. Mantén parejo el bajo debajo.",
        13: "Las dobles notas giran en torno al do sostenido. Los dedos 1 y 3 toman el la y el do sostenido, y luego 2 y 4 vuelven a si y re.",
        14: "La mano se abre de una tercera a una sexta, con el pulgar en el mi y el dedo 3 en el do.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta abajo a la octava y vuelve arriba al acorde.",
        "Toca solos los acordes de la mano derecha, y deja que el dedo de arriba cante la melodía.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el stride, mira la octava y deja que la mano encuentre el acorde al tacto.",
        "Arriba, las octavas deben sonar como campanas. Mantén suelta la muñeca.",
        "Suelta la octava de re un momento antes, para que la mano llegue a tiempo al la rápido.",
      ],
      tricky: {
        9: "Las dos manos cambian de patrón. La derecha toca octavas, y la izquierda empieza su primer arpegio sobre dos octavas.",
        12: "Mantén la octava de sol mientras la mano izquierda sube hasta el mi agudo y vuelve a bajar.",
        14: "La misma subida que en el compás 12, ahora bajo la octava de do. Deja que el dedo 3 cruce sobre el pulgar con suavidad.",
      },
    },
  },
};
