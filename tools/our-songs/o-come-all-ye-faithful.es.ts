/** The guide of *O Come, All Ye Faithful* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "John Francis Wade copió a mano esta melodía hacia 1751, con una letra en latín que empieza Adeste fideles. " +
    "Wade era un católico inglés que vivía de copiar música en Francia. " +
    "Frederick Oakeley escribió en 1841 la letra en inglés que casi todos cantan hoy.",
  funFact: "En Londres se lo llamó una vez el «himno portugués», porque la gente lo escuchaba en la capilla de la embajada de Portugal.",
  versions: {
    common: {
      practice: [
        "Toca los primeros tres compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 1 a 9 con la mano derecha sola, hasta llegar abajo al sol grave largo.",
        "Ahora la mano izquierda sola. Mantiene una forma en cada mitad del compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El dedo 2 empieza en el do central, y el pulgar espera en el sol debajo de él.",
        "Larga, corta: mantén el la, y luego deja que el sol rápido te lleve al siguiente compás.",
        "El estribillo hace la misma llamada tres veces. Toca cada llamada un poco más fuerte que la anterior.",
      ],
      tricky: {
        4: "El dedo 3 llega al mi después del silencio corto. Luego los dedos 2, 3 y 4 se mecen entre re, mi y fa.",
        10: "Levanta la mano durante el silencio, y apoya el meñique en el sol agudo. Los dedos 4 y 3 bajan al fa y al mi.",
        11: "Esta vez el meñique toma el fa, así que el dedo 4 queda listo para el mi.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona a la vez las notas de cada acorde.",
        "Toca los primeros nueve compases con la mano derecha sola, y siente el contraste de larga y corta en el compás 8.",
        "Junta las manos en el estribillo, compases 14 a 17.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Aquí el pulgar izquierdo se queda en el sol en cada acorde, así que la mano casi no se mueve.",
        "Larga, corta: el la dura tres veces lo que dura el sol.",
        "La última línea es la más grande. Deja que crezca, y luego descansa en el último do.",
      ],
      tricky: {
        4: "Abre bien la mano: el pulgar deja el sol grave mientras el dedo 3 sube hasta el mi.",
        11: "Esta vez el meñique toma el fa, así que el dedo 4 queda listo para el mi.",
        12: "El dedo 2 vuelve a recogerse en el do, entre el mi y el re. Mantén la mano quieta y deja que se muevan los dedos.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca los primeros nueve compases con la mano derecha sola, una octava arriba del do central.",
        "Toca las terceras y sextas de los compases 14 a 17 con la mano derecha sola. Presiona las dos notas como una sola.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
        "Cambia el pedal a la mitad de cada compás, cuando la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        7: "La mano derecha sube del si al mi, un dedo por tecla, mientras la mano izquierda cambia de acorde.",
        16: "Las dobles notas pasan de terceras a sextas y vuelven. Mira la siguiente doble nota antes de tocarla.",
        21: "Levanta la mano izquierda después del último re, y luego apóyala en la octava de do grave junto con el acorde final.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el meñique cante la melodía.",
        "Toca las octavas de los compases 14 a 21 con la mano derecha sola. Mantén la mano abierta y ligera.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la nota del bajo y deja que la mano encuentre el acorde al tacto.",
        "En las octavas, toca el meñique un poco más fuerte, para que la melodía brille arriba.",
        "El bajo de octavas quebradas rueda del meñique al pulgar y vuelve.",
      ],
      tricky: {
        3: "Abre la mano para el acorde de sol de cuatro notas. Luego deja que se cierre sobre el re y el sol.",
        8: "El acorde se desliza del sol y el si hacia abajo, al fa y el la. Luego el dedo 2 se acomoda en el sol.",
        12: "El meñique sube hasta el mi entre los acordes. Luego la mano baja al la y al do.",
      },
    },
  },
};
