/** The guide of *Kling, Glöckchen, klingelingeling* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Kling, Glöckchen, klingelingeling significa «Suena, campanita, tilín, tilín». " +
    "Karl Enslin escribió la letra, que se imprimió por primera vez en 1854. " +
    "En ella, el Niño Jesús les ruega a los niños que abran la puerta, porque el invierno es muy frío. " +
    "Nadie sabe quién escribió la melodía que se canta hoy.",
  funFact: "En muchas casas alemanas suena una campanita en Nochebuena, para avisar a los niños que los regalos están listos.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 12 con la mano derecha sola. Ahí la mano se mueve dos veces.",
        "Ahora la mano izquierda sola. Mantiene una forma durante un compás o medio compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Sol, la, sol, la: es la campanita que suena. Tócala ligera y pareja.",
        "Mientras mantienes el mi largo, desliza el pulgar del re hasta el do central.",
        "Durante el último mi, sube otra vez el pulgar al re, para que el dedo 3 alcance la tecla negra fa sostenido.",
      ],
      tricky: {
        2: "Los dedos 4 y 5 se mecen entre el sol y el la, como una campana que se balancea.",
        5: "Tu pulgar ahora está en el do central, así que el dedo 2 toca los dos re.",
        14: "La campanita suena otra vez. Los dedos 4 y 5 se mecen entre el sol y el la, como en el compás 2.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca los compases 9 a 12 con la mano izquierda sola. Ahí baja hasta el sol.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Toca el do grave un poco más fuerte que el acorde que lo sigue.",
        "Aquí se mueven las dos manos. Aprovecha las últimas notas largas del compás 8 para llegar.",
        "La mano izquierda vuelve a subir al do cuando regresa la frase de la campanita.",
      ],
      tricky: {
        5: "El pulgar derecho baja al do central, mientras la mano izquierda toca do y luego su acorde.",
        9: "Las dos manos se mueven: el pulgar derecho sube al re, y la mano izquierda baja a las notas la, do y re.",
        13: "La mano izquierda vuelve a subir al do, y la mano derecha empieza otra vez la frase de la campanita.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca las terceras de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía de la campanita suene por encima.",
        "Cambia el pedal al comienzo y a la mitad de cada compás.",
        "Levanta la mano del último mi, y apóyala una octava más arriba con los dedos 2 y 4.",
      ],
      tricky: {
        17: "La mano derecha llega una octava más arriba en una tercera, y la mano izquierda empieza su bajo y sus acordes.",
        27: "El dedo 2 toca mi, y el meñique se estira hasta el la. Mantén el pulgar cerca del re.",
        29: "La frase de la campanita vuelve en terceras. Los dedos 2 y 4 toman mi y sol a la vez.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava y deja que la mano encuentre el acorde al tacto.",
        "En octavas, la figura de la campanita debe sonar como campanas de verdad. Mantén la muñeca suelta.",
        "El pulgar y el meñique tocan cada octava. Mantén la mano abierta en una sola forma.",
      ],
      tricky: {
        3: "Presiona si, re y fa a la vez, y luego los dedos 2 y 4 tocan re y sol mientras la mano izquierda salta.",
        7: "Los dedos 2 y 4 tocan la tercera, luego el dedo 4 repite fa y el meñique toma sol.",
        15: "El mismo acorde que en el compás 3. Fíjate en el salto de la mano izquierda hasta la octava de sol grave.",
      },
    },
  },
};
