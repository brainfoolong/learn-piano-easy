/** The guide of *Es ist ein Ros entsprungen* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Es ist ein Ros entsprungen significa «Ha brotado una rosa» en alemán. " +
    "Es un canto navideño religioso del siglo XVI. " +
    "Su melodía se imprimió por primera vez en el himnario de Espira, en Colonia en 1599, y no se sabe quién la compuso. " +
    "Michael Praetorius la arregló para cuatro voces en 1609, y su versión se difundió mucho.",
  funFact: "Johannes Brahms construyó sobre esta melodía un preludio coral para órgano, el octavo de su Op. 122.",
  versions: {
    common: {
      practice: [
        "Toca los dos primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 3 a 6 con la mano derecha sola. La melodía baja hasta el sol en el compás 5.",
        "Ahora la mano izquierda sola. Mantiene una misma forma durante medio compás o un compás entero.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cada sol largo empieza con el dedo 5. Cambia al dedo 4 en el sol siguiente, y la mano se queda quieta.",
        "Cada compás abarca tres compases de la partitura antigua. Cuenta seis tiempos lentos, con dos negras en cada tiempo.",
        "Después del sol grave, haz una pausa breve, y luego deja que el dedo 5 suba una octava hasta el sol agudo.",
      ],
      tricky: {
        3: "El dedo 2 mantiene el do, y luego el dedo 5 se estira hasta el sol. Cambia al dedo 4 en el sol siguiente.",
        5: "Los dedos 4, 2, 3 y 2 tocan re, si, do y la, y luego el pulgar cae en el sol grave. Haz una pausa y sube con el dedo 5.",
        9: "La misma extensión que en el compás 3: el dedo 5 sube de do a sol, y el dedo 4 toma el sol siguiente.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola, y presiona juntas las notas de cada acorde. El pulgar se queda en sol.",
        "Toca los compases 7 a 13 con la mano derecha sola. La melodía sube una octava y vuelve.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Bajo el fa de la melodía, el acorde se reduce a re y sol. Mantén el pulgar en sol y deja sonar el fa.",
        "Aprovecha el silencio después del do para subir la mano derecha una octava.",
        "El mismo silencio lleva la mano derecha de vuelta abajo, para la última vuelta.",
      ],
      tricky: {
        3: "El dedo 5 se estira de do a sol, mientras la mano izquierda mantiene su acorde de do.",
        7: "Mantén el do, levanta la mano derecha en el silencio, y apoya el dedo 5 en el sol una octava más arriba.",
        13: "Mantén el do agudo, levanta la mano en el silencio, y apoya otra vez el dedo 5 en el sol de abajo.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solos los acordes arpegiados de la segunda vuelta, y levanta la mano en cada silencio.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal en la parte del medio.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "Cambia el pedal en cada tiempo, cuando la mano izquierda empieza un acorde nuevo.",
        "Las dos manos se levantan en el silencio. La mano derecha baja una octava, y la izquierda vuelve a su bajo de Alberti.",
      ],
      tricky: {
        7: "La mano derecha salta una octava hacia arriba en el silencio. El bajo de Alberti termina en un silencio, para que la mano izquierda pueda bajar.",
        8: "La mano izquierda empieza sus acordes arpegiados en el do grave. Levántala en cada silencio, y cambia el pedal en cada tiempo.",
        13: "La mano derecha vuelve a bajar en el silencio, mientras los acordes arpegiados terminan en fa.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta hacia abajo para la octava grave, y vuelve arriba para el acorde.",
        "Toca las octavas de la mano derecha solas, y mantén el pulgar y el dedo 5 a una octava de distancia.",
        "Toca los arpegios de la segunda vuelta con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "Los arpegios suben dos octavas en cada tiempo. Tócalos suave, para que las octavas de arriba resuenen.",
        "Mantén el pulgar y el dedo 5 a una octava de distancia, y deja que la muñeca rebote.",
      ],
      tricky: {
        9: "Suelta la octava de do una corchea antes, para que la mano caiga a tiempo en la octava de sol.",
        11: "Las octavas bajan paso a paso hasta el sol grave, y luego saltan una octava hacia arriba después del silencio.",
        13: "Mantén la octava de do, y luego toca la octava de sol justo cuando los arpegios terminan en fa.",
      },
    },
  },
};
