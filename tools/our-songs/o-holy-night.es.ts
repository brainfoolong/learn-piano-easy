/** The guide of *O Holy Night* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "El compositor francés Adolphe Adam le puso música al poema Minuit, chrétiens, de Placide Cappeau, con el título Cantique de Noël. " +
    "Se cantó por primera vez en la Misa de Gallo de Roquemaure, en el sur de Francia, en 1847. " +
    "La versión en inglés más conocida, O Holy Night, la escribió en 1855 el crítico y pastor estadounidense John Sullivan Dwight.",
  funFact: "Hoy Adolphe Adam es conocido sobre todo por su ballet Giselle.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 7 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la subida desde el compás 8 hasta el final con la mano derecha sola.",
        "Ahora la mano izquierda sola. Mantiene una forma, y cambia a la mitad de cada compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Mantén la nota larga de cada par con puntillo. Así la nota corta te lleva directo a la siguiente.",
        "Usa el silencio del final del compás 7 para subir la mano. El dedo 3 llega al do agudo.",
        "Esta es la subida por la que se conoce la canción. Deja que suene cada vez más fuerte hasta el mi agudo.",
      ],
      tricky: {
        2: "El meñique toca el do agudo, y la mano baja hasta el do central con los dedos 3, 2 y 1.",
        4: "El pulgar baja a buscar el fa después del la, y luego el meñique se estira hasta el do agudo.",
        8: "La mano sube después del silencio, con el dedo 3 en el do agudo. Luego el pulgar toca el la.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros siete compases con la mano derecha sola, y dale a cada nota corta su lugar.",
        "Toca con la mano izquierda sola. Mantén cada acorde hasta que llegue el siguiente.",
        "Junta las manos en la subida de los compases 8 a 10.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Toca el segundo sol con el dedo 5. Luego los dedos 3, 2 y 1 bajan hasta el do.",
        "Los fa sostenido vuelven triste la melodía por un momento. Tócalos con suavidad.",
        "Los últimos seis compases vuelven una vez más. Tócalos un poco más suave, como un eco.",
      ],
      tricky: {
        2: "Cambia del dedo 3 al dedo 5 en el sol repetido, para que la mano pueda bajar hasta el do.",
        4: "El dedo 2 toca los dos fa sostenido, y el pulgar toma el mi justo después.",
        8: "La mano sube después del silencio, con el dedo 3 en el do agudo. Luego el pulgar toca el la.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca el estribillo una octava más arriba con la mano derecha sola.",
        "Junta las manos en los primeros siete compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave y parejo el bajo de Alberti, para que la melodía cante por encima.",
        "Cambia el pedal con cada acorde nuevo, para que el bajo nunca se empañe.",
        "Después del último do, salta con la mano derecha una octava hacia arriba para el estribillo.",
      ],
      tricky: {
        4: "La mano derecha toca sus fa sostenido mientras la mano izquierda rueda sobre el mi. Mantén ligeras las dos manos.",
        13: "La melodía vuelve a casa en el do mientras la mano izquierda pasa del do al sol y vuelve.",
        19: "El mismo final del compás 13, una octava más arriba. Mantén el último do hasta el final.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava, y luego arriba al acorde.",
        "Toca la subida en octavas con la mano derecha sola. Mantén la mano en forma de octava.",
        "Toca las octavas quebradas del estribillo con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "Toca cada octava con el pulgar y el meñique, y mantén la mano en esa forma.",
        "Sobre las octavas quebradas, deja que la mano derecha cante con fuerza. La mano izquierda se queda suave.",
      ],
      tricky: {
        6: "Las octavas se mecen entre el sol y el la, y luego bajan al re. Mantén la mano en forma de octava.",
        7: "El mismo vaivén del compás 6, y luego una subida hasta el do agudo. Deja que el bajo stride mantenga su pulso.",
        12: "Las octavas saltan del sol hasta el mi agudo. Usa la breve pausa de antes para saltar.",
      },
    },
  },
};
