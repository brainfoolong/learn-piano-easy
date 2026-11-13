/** The guide of *Tochter Zion, freue dich* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tochter Zion, freue dich significa «Hija de Sion, alégrate» en alemán. " +
    "George Frideric Handel escribió el coro See, the conqu'ring hero comes en 1747 para su oratorio Josué. " +
    "En 1751 lo agregó a su oratorio Judas Macabeo. " +
    "Más tarde, en Erlangen, Friedrich Heinrich Ranke le puso letra en alemán a la melodía.",
  funFact:
    "En 1905, Henry Wood usó la melodía en su Fantasia on British Sea Songs, una pieza que suena a menudo en la Last Night of the Proms.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 9 a 16 con la mano derecha sola. Ahí la melodía baja hasta el si.",
        "Ahora la mano izquierda sola. Mantiene cada forma medio compás o más.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El compás 3 sube por el re, el mi, el fa y el sol, y luego vuelve a bajar. Toca parejas las cuatro notas que suben.",
        "Levanta la mano después del sol del compás 6. El dedo 5 llega al fa, y la mano baja caminando hasta el do.",
        "El último do del compás 13 es corto. Usa el silencio para subir la mano, con el dedo 4 en el la.",
      ],
      tricky: {
        7: "El dedo 5 llega al fa después de levantar la mano, y luego los dedos 4 y 3 tocan el mi y el re.",
        14: "El dedo 4 toca el la, y el dedo 2 toca el fa sostenido, la tecla negra entre el fa y el sol.",
        19: "El mismo movimiento que en el compás 7: levanta la mano después del sol, y apoya el dedo 5 en el fa.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca los compases 9 a 16 con la mano derecha sola. La melodía gira hacia el sol, con dos fa sostenido.",
        "Junta las manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Toca los acordes más suave que la melodía, para que la melodía resalte como un toque de trompeta.",
        "Aquí la mano izquierda cambia de acorde a la mitad del compás. Cuenta hasta cuatro, y cambia en el tres.",
        "En el compás 14, el dedo 2 izquierdo toma el fa sostenido, y en el compás 15 vuelve al fa.",
      ],
      tricky: {
        7: "Levanta la mano después del sol, apoya el dedo 5 en el fa, y presiona el acorde de sol con la mano izquierda.",
        14: "Las dos manos tocan un fa sostenido. El dedo 2 derecho y el dedo 2 izquierdo toman cada uno la tecla negra.",
        19: "El mismo movimiento que en el compás 7: levanta la mano después del sol, y apoya el dedo 5 en el fa.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solos los acordes arpegiados de la última parte, y levanta la mano en cada silencio.",
        "Junta las manos en los compases 1 a 16, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "Las dos manos se levantan al final del compás 16. La mano derecha salta una octava arriba, y la izquierda baja a un do grave.",
        "Cambia el pedal en cada tiempo, cuando la mano izquierda empieza un nuevo grupo de cuatro.",
      ],
      tricky: {
        7: "Levanta la mano después del sol, y apoya el dedo 5 en el fa, mientras el bajo de Alberti pasa al sol.",
        17: "La melodía vuelve a empezar una octava arriba, mientras la mano izquierda empieza sus acordes arpegiados en el do grave.",
        23: "Los dedos 5, 4 y 3 bajan caminando por el fa, el mi y el re. Levanta la mano en el último re para llegar al acorde final.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la octava grave, y vuelve arriba al acorde.",
        "Toca los compases 1 a 8 con la mano derecha sola, y mantén ligeros los grupos rápidos de notas.",
        "Toca los arpegios de la última parte con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "El grupeto al final del compás 4 adorna el re largo. Tócalo más suave que la melodía.",
        "Mantén el pulgar y el meñique a una octava de distancia, y deja que la muñeca rebote.",
      ],
      tricky: {
        3: "La melodía sube por el re, el mi, el fa y el sol una octava arriba, mientras el bajo stride salta por debajo.",
        7: "Levanta la mano después del sol, apoya el dedo 5 en el fa, y baja caminando mientras el bajo stride pasa al sol.",
        11: "La mano izquierda cambia del do al sol a la mitad del compás. Mantén parejo el stride.",
      },
    },
  },
};
