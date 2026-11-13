/** The guide of *Ihr Kinderlein, kommet* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "El título alemán Ihr Kinderlein, kommet significa «Vengan, niñitos». " +
    "El sacerdote Christoph von Schmid escribió la letra y llamó a su poema «Los niños junto al pesebre». " +
    "Johann Abraham Peter Schulz escribió la melodía en 1794 para un poema de primavera de Wilhelm Gottlieb Becker. " +
    "Más tarde, la letra de Schmid se cantó con esa melodía de primavera, y juntas se volvieron un villancico.",
  funFact: "Christoph von Schmid también escribió cuentos para niños, como Das Blumenkörbchen, «La canasta de flores».",
  versions: {
    common: {
      practice: [
        "Toca los cinco primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los cuatro últimos compases con la mano derecha sola. Ahí la melodía sube hasta el do agudo.",
        "Ahora la mano izquierda sola. Mantiene una sola forma en cada compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cada compás empieza con una nota larga y termina con dos cortas, como una cuna que se mece.",
        "El compás 13 tiene un silencio después del primer la. Levanta el dedo, cuenta el silencio y vuelve a tocar el la.",
        "El dedo 5 toca el do agudo. Luego la mano baja paso a paso, y el pulgar termina en el si.",
      ],
      tricky: {
        2: "El dedo 4 toca el sol y el dedo 2 baja al mi. Mantén la mano quieta sobre las teclas del re al la.",
        15: "El dedo 5 se estira hacia arriba hasta el do agudo, y luego los dedos 3 y 2 tocan el sol y el mi.",
        16: "Los dedos 3 y 2 tocan el fa y el re, y el pulgar se estira hacia abajo hasta el si.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola y presiona juntas las tres notas de cada acorde.",
        "Toca los compases 10 a 17 con la mano izquierda sola, dos acordes en cada compás.",
        "Junta las manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Mantén cada acorde suave, para que la melodía que se mece se oiga clara por encima.",
        "El pulgar izquierdo sube al la para el acorde de fa del compás 13, y vuelve al sol en el compás 14.",
        "Ahora la mano izquierda toca un acorde en cada mitad del compás. Cuenta uno, dos, y presiona en cada tiempo.",
      ],
      tricky: {
        14: "El dedo 3 toca el sol tres veces, mientras el pulgar izquierdo se desliza de vuelta del la al sol.",
        15: "El dedo 5 se estira hacia arriba hasta el do agudo, y luego el dedo 3 vuelve al sol.",
        16: "Los dedos 3, 2 y 1 bajan por el fa, el re y el si sobre un acorde de sol séptima.",
      },
    },
    epic: {
      practice: [
        "Toca solo el bajo de Alberti hasta que ruede por sí solo: grave, agudo, medio, agudo.",
        "Toca solos los acordes arpegiados de la segunda vuelta, y levanta la mano en cada silencio.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Toca suave el bajo de Alberti, para que la melodía cante por encima.",
        "Las dos manos se levantan en un silencio. La derecha salta hacia arriba hasta el sol agudo, y la izquierda baja a un do grave.",
        "Cambia el pedal en cada medio compás, cuando la mano izquierda vuelve a empezar su patrón.",
      ],
      tricky: {
        17: "Mantén el do, levanta la mano en el silencio y apoya el dedo 4 en el sol agudo.",
        18: "La melodía vuelve a empezar una octava más arriba, mientras la mano izquierda empieza sus acordes arpegiados en el do grave.",
        21: "La melodía descansa después del mi largo. Cuenta el silencio, y luego el dedo 4 toca el sol.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta hacia abajo a la octava grave y luego vuelve arriba al acorde.",
        "Toca los compases 2 a 9 con la mano derecha sola, y toca ligeros los grupos rápidos de notas.",
        "Toca los arpegios de la segunda vuelta con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa y deja que el último acorde resuene.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde por tacto.",
        "El grupo rápido de notas después del mi largo es un saltito. Tócalo más suave que la melodía.",
        "Mantén el pulgar y el meñique a una octava de distancia, y deja que la muñeca rebote.",
      ],
      tricky: {
        20: "Las octavas pasan por el fa, el re y el fa sobre un arpegio de sol. Mantén la mano en su forma de octava.",
        24: "Los mismos pasos del compás 20. Deja que el arpegio siga corriendo debajo de las octavas.",
        29: "La octava del la llega después de levantar la mano un momento. Cuenta el silencio y vuelve a tocar el la.",
      },
    },
  },
};
