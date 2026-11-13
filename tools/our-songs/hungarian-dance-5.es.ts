/** The guide of *Hungarian Dance No. 5* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Brahms escribió sus Danzas húngaras para piano a cuatro manos, y la primera serie se publicó en 1869. " +
    "La Danza n.º 5 se volvió la más famosa de todas. " +
    "En la película The Great Dictator (1940), Charlie Chaplin afeita a un cliente al compás de esta música.",
  funFact: "Brahms basó esta danza en una csárdás de Béla Kéler, pero creía que era una melodía popular.",
  versions: {
    common: {
      practice: [
        "Toca los cuatro primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Aquí el final es nuevo.",
        "Ahora la mano izquierda sola. Mantiene una quinta abierta, y en los compases 3 y 7 solo toca el pulgar.",
        "Junta las dos manos, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cada nota larga dura seis tiempos, y la corta, dos. Cuéntalos y la danza tendrá su vaivén.",
        "El dedo 2 mantiene el sol sostenido, y luego los dedos 3 y 4 suben rápido al la y al si.",
        "El sol sostenido tira con fuerza hacia el la. Deja que se apoye un poco antes de avanzar.",
      ],
      tricky: {
        2: "El dedo 5 se estira hacia arriba hasta el do, y luego el dedo 3 vuelve al la.",
        3: "El dedo 2 mantiene el sol sostenido durante seis tiempos. Luego los dedos 3 y 4 tocan rápido el la y el si.",
        6: "Como en el compás 2, el dedo 5 toca el do y el dedo 3 toca el la.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Primero viene una nota grave y luego un acorde en el segundo tiempo.",
        "Toca los primeros ocho compases con la mano derecha sola. Ahí sube una octava.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Toca la nota grave un poco más fuerte que el acorde que la sigue. Ese es el «pum-pa» de la danza.",
        "Mientras mantienes el la largo, sube la mano derecha una octava. El pulgar cae en el mi.",
        "El silencio corto al final del compás 12 te da tiempo para saltar de nuevo hacia abajo.",
      ],
      tricky: {
        5: "La mano derecha ahora toca una octava más arriba. Tu pulgar cae en el mi agudo.",
        9: "La respuesta empieza en el do agudo con el dedo 5. Luego el dedo 3 toca el la y el dedo 4 toca el si.",
        13: "Usa el silencio del compás 12 para saltar una octava hacia abajo. Tu pulgar cae en el mi.",
      },
    },
    epic: {
      practice: [
        "Toca solo el bajo de Alberti hasta que ruede por sí solo: grave, agudo, medio, agudo.",
        "Toca solas las sextas de la mano derecha, y presiona las dos notas de cada doble nota como una sola.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Toca el bajo de Alberti ligero y ágil, para que la melodía baile por encima.",
        "El mi sostenido es la tecla blanca fa. Lo toca el dedo 2, y la mano no se mueve.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        5: "Tu pulgar se queda en el la, mientras los dedos 3 y 5 tocan encima el do sostenido y el fa sostenido.",
        7: "Los dedos 1 y 4 tocan el sol sostenido y el mi sostenido. Luego la mano sube dos veces, rápido.",
        15: "Son las mismas sextas del compás 7. Mantén el pulgar cerca del la y del si.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: salta hacia abajo a la octava y luego vuelve arriba al acorde.",
        "Toca solas las octavas de la mano derecha, con el pulgar y el meñique en una sola forma.",
        "Toca despacio las figuras rápidas de los compases 5 a 7 con la mano derecha sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa y deja que el último acorde resuene.",
      ],
      tips: [
        "Toca las octavas con fuego. Es una danza rápida, y cada nota larga debe resonar.",
        "En las figuras rápidas, el pulgar pasa por debajo para que el pasaje fluya parejo.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        4: "Mantén la octava de fa sostenido, y deja que la mano izquierda salte entre su octava y su acorde.",
        8: "Abre la mano sobre el fa sostenido, el la, el do sostenido y el fa sostenido con los dedos 1, 2, 3 y 5.",
        12: "Vuelve el acorde de cuatro notas. Primero levanta la mano del sol sostenido grave y luego apoya la mano en la octava completa.",
      },
    },
  },
};
