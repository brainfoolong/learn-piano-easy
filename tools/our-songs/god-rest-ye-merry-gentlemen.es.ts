/** The guide of *God Rest Ye Merry, Gentlemen* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "God Rest Ye Merry, Gentlemen es uno de los villancicos ingleses más antiguos que todavía se cantan. " +
    "Desde alrededor de 1760, su letra se vendía en Londres en hojas impresas baratas. " +
    "William Sandys imprimió la melodía en su libro de villancicos de Navidad en 1833. " +
    "Su primer verso quería decir, hace siglos: que Dios les conceda paz y felicidad.",
  funFact:
    "En Cuento de Navidad, de Charles Dickens, un niño canta este villancico por la cerradura de Scrooge. Scrooge lo ahuyenta con una regla.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cinco compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 10 a 14 con la mano derecha sola. Ahí la melodía sube hasta el la agudo.",
        "Ahora la mano izquierda sola. Mantiene siempre una nota grave o una quinta abierta.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Tu pulgar empieza en el la debajo del do central, y el meñique descansa sobre el mi.",
        "Levanta la mano un momento después del la, y deja caer el pulgar sobre el sol de abajo.",
        "Este es el estribillo. Déjalo sonar un poco más fuerte que la estrofa.",
      ],
      tricky: {
        3: "Los dedos 3, 2 y 1 bajan hasta el la. Levanta la mano, y el pulgar cae sobre el sol.",
        11: "Los dedos 4 y 5 suben hasta el la agudo. Levanta la mano, y el meñique cae sobre el mi de abajo.",
        19: "Los dedos 3, 2 y 1 bajan hasta el do. Levanta la mano, y el dedo 2 cae sobre el si.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: una nota grave y luego las notas de arriba, dos veces en cada compás.",
        "Toca los compases 2 a 5 con la mano derecha sola. En el camino, la mano se mueve dos veces.",
        "Toca los compases 7 y 8 con la mano derecha sola. Ahí una nota repetida ayuda a la mano a moverse.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El dedo 4 se desliza del re al do. En el compás siguiente, el pulgar se desliza del sol al la.",
        "Cambia de dedo en el segundo de los dos la rápidos, y también de los dos re. Así la mano avanza sin saltar.",
        "El do y el si comparten un tiempo. Cuenta «uno-y», y tócalos como dos pasos rápidos y parejos.",
      ],
      tricky: {
        11: "Los dedos 4 y 5 suben hasta el la agudo. Luego el meñique salta hacia abajo al mi, y el dedo 4 toma el re.",
        18: "El dedo 2 se desliza del re al mi. Luego cada dedo toma la tecla siguiente, hasta el la agudo.",
        19: "El meñique salta del la agudo hacia abajo al mi. Luego la mano baja paso a paso hasta el si.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola los acordes arpegiados, hasta que rueden por sí mismos: grave, agudo, medio, agudo.",
        "Toca los compases 3 y 4 con la mano derecha sola. Ahí los dedos se cruzan en los dos sentidos.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Toca suaves los acordes arpegiados, para que la melodía cante por encima.",
        "Al bajar, el dedo 3 cruza por encima del pulgar hasta el si. Al subir, el pulgar pasa por debajo hasta el do.",
        "El pulgar pasa por debajo hasta el mi, y la mano sube hasta el la agudo.",
      ],
      tricky: {
        12: "El dedo 2 cruza por encima del pulgar hasta el do. Al final del compás, el pulgar pasa por debajo hasta el do.",
        18: "El pulgar pasa por debajo hasta el mi. Los dedos 2 y 3 suben, y el meñique llega al la agudo.",
        19: "El dedo 3 cae sobre el mi y baja hasta el do. Luego el dedo 2 cruza por encima del pulgar hasta el si.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la octava grave y vuelve arriba al acorde.",
        "Toca los compases 4 a 6 con la mano derecha sola, y mantén ligero el grupeto.",
        "Junta las manos en los primeros nueve compases, a la mitad de la velocidad.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "El grupeto alrededor del mi es un adorno. Tócalo más suave que la melodía.",
        "Levanta la mano después del si, y luego baja al último acorde con las dos manos juntas.",
      ],
      tricky: {
        9: "Una escala rápida empieza en el sol agudo. Los dedos 5, 4, 3 y el pulgar bajan corriendo, y luego el dedo 2 toma el mi.",
        15: "Cambia al meñique en el mi repetido, y baja un dedo por tecla. La mano izquierda salta al mi grave.",
        19: "El dedo 2 cruza por encima del pulgar para el si. Tócalo corto, y baja la mano para el último acorde.",
      },
    },
  },
};
