/** The guide of *Angels We Have Heard on High* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Angels We Have Heard on High es un villancico tradicional francés. " +
    "En francés se llama Les Anges dans nos campagnes, que significa «Los ángeles en nuestros campos». " +
    "La edición impresa más antigua que se conoce con letra y música es de 1842, en una colección de Louis Lambillotte. " +
    "La letra inglesa es una paráfrasis de 1862 de James Chadwick, el obispo católico romano de Hexham y Newcastle.",
  funFact: "En el estribillo Gloria in excelsis Deo, la o de Gloria se sostiene durante una larga serie de notas que suben y bajan.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca el Gloria, los compases 5 a 7, con la mano derecha sola. Deja que las notas rápidas suban y bajen parejas.",
        "Ahora la mano izquierda sola. Mantiene una forma en cada medio compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el dedo 3 en el mi. El pulgar descansa en el do central, y el dedo 5 en el sol.",
        "Después de cada nota larga vienen cuatro rápidas. Cuéntalas como uno, dos, tres, cuatro.",
        "Deja sonar el último do durante todo el compás, y levanta las dos manos a la vez.",
      ],
      tricky: {
        6: "El dedo 2 toca el re, y luego el pulgar se estira hacia abajo hasta el sol grave. La mano se queda donde está.",
        7: "Desde el sol grave, los dedos 2 a 5 suben por do, re, mi y fa, una tecla cada uno.",
        10: "La misma subida que en el compás 7: los dedos 2 a 5 en do, re, mi y fa.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca el Gloria, los compases 5 a 7, con la mano derecha sola. Mantén parejas las notas rápidas.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda no se mueve: el dedo 5 en do, el 4 en re, el 3 en mi, el 2 en fa y el pulgar en sol.",
        "La mano derecha descansa mientras la izquierda toca un acorde de sol séptima. Te lleva de vuelta al principio.",
        "La segunda vez, toca la nota grave un poco más fuerte que el acorde que la sigue.",
      ],
      tricky: {
        6: "El dedo 2 toca el re, y luego el pulgar se estira hasta el sol grave, mientras la mano izquierda mantiene re y fa.",
        9: "Las mismas notas que en el compás 6. Mantén quieta la mano derecha y deja que el pulgar se estire hacia abajo.",
        17: "Otra vez el compás 6, ahora en la segunda vuelta. Mantén suaves los acordes bajo la melodía.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca los acordes arpegiados de la segunda vuelta con la mano izquierda sola.",
        "Toca el Gloria agudo, los compases 16 a 18, con la mano derecha sola.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante encima.",
        "Levanta la mano después del sol, el la y el si, y pon el dedo 3 en el mi una octava más arriba.",
        "Cambia el pedal cada vez que la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        17: "El dedo 2 toca el re agudo, y el pulgar se estira hacia abajo hasta el sol mientras la mano izquierda sube.",
        19: "Ahora el Gloria corre por arriba. Deja que los dedos 5, 4, 3 y 2 rueden hacia abajo del la al mi.",
        20: "El pulgar toma el do, y luego el dedo 2 cae en el re. Mantén parejos los acordes arpegiados de abajo.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta hacia abajo para la octava grave y vuelve arriba para el acorde.",
        "Toca solas las octavas de la mano derecha, y deja que el dedo 5 cante la melodía.",
        "Toca el bajo de octavas arpegiadas de la segunda vuelta con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "Después de cada octava, el dedo 5 se queda arriba y guía las notas rápidas hacia abajo.",
        "La carrera rápida hasta el sol es una pequeña fanfarria. Tócala ligera y brillante.",
      ],
      tricky: {
        2: "Levanta la mano de cada nota suelta antes de la octava siguiente, para que caiga sin estirarse.",
        3: "Otra vez el comienzo. Mantén parejas las octavas mientras la mano izquierda salta.",
        11: "Cuatro notas rápidas corren de do hasta fa, y el dedo 5 cae en el sol. Abajo, el bajo stride sigue.",
      },
    },
  },
};
