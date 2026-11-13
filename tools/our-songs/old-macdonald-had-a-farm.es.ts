/** The guide of *Old MacDonald Had a Farm* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Old MacDonald Had a Farm es una canción infantil sobre un granjero y sus animales. " +
    "Una versión antigua llamada Ohio se publicó en 1917, en un libro de canciones que cantaban los soldados británicos. " +
    "Cada estrofa agrega un animal y su sonido, así que la canción dura tanto como quieran los que cantan.",
  funFact: "En la canción de 1917, el granjero se llamaba Old Macdougal, y su granja estaba en Ohio.",
  versions: {
    common: {
      practice: [
        "Toca con la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Ahora la mano izquierda sola. Mantiene cada nota dos o cuatro tiempos.",
        "Junta las dos manos en los primeros ocho compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El pulgar descansa en el re y el dedo 3 en el sol. Cada dedo se queda con su propia tecla.",
        "Levanta un poco la mano antes del si agudo, para llegar a tiempo.",
        "Estos son los sonidos del animal. Hazlos rebotar, y sonríe si quieres.",
      ],
      tricky: {
        3: "El meñique se estira hasta el si agudo, mientras el pulgar se queda cerca del re.",
        7: "Otra vez el mismo estiramiento: el meñique en el si, y luego el dedo 4 en el la.",
        15: "Un último estiramiento hasta el si. Usa el silencio corto de antes para prepararte.",
      },
    },
    rare: {
      practice: [
        "Aplaude las notas rápidas de los compases 11 y 12, y luego toca con la mano derecha sola.",
        "Toca con la mano izquierda sola, y mantén cada acorde hasta el siguiente.",
        "Junta las manos en los primeros cuatro compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Los dos re rápidos son corcheas. Piensa en ellos como un tiempo partido en dos.",
        "Aquí se repite un patrón de corta, corta, larga. Di el sonido del animal en tu cabeza mientras tocas.",
        "El acorde de la mano izquierda cambia a la mitad del compás. Deja sonar cada uno dos tiempos.",
      ],
      tricky: {
        3: "El pulgar deja el re y el meñique toma enseguida el si agudo. Mantén la mano abierta.",
        7: "El mismo salto hasta el si. A la mitad del compás, el dedo 4 de la mano izquierda toma el la.",
        15: "El último salto hasta el si. Después, a las dos manos solo les queda el acorde final.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca las terceras de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en los primeros cuatro compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
        "Cambia el pedal en cada medio compás, cuando el bajo de Alberti empieza otra vez.",
      ],
      tricky: {
        7: "Las terceras saltan del re hasta el sol y el si. Mueve toda la mano, y mantén su forma.",
        15: "Después del pasaje rápido, el meñique llega al si. Deja que el pasaje lleve la mano hasta ahí.",
        16: "La mano baja del la al último acorde. El pulgar en el si, el dedo 3 en el sol.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la nota del bajo, y vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca los pasajes rápidos con la mano derecha sola, despacio al principio.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la nota del bajo y deja que la mano encuentre el acorde al tacto.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "Las notas rápidas suben por pasos, un dedo por tecla, hasta el meñique en el si.",
      ],
      tricky: {
        4: "Mantén el acorde largo durante tres tiempos, y luego baja el pulgar al sol para el acorde del cuarto tiempo.",
        8: "El pulgar toca los dos re rápidos, y queda listo para las notas sueltas del compás 9.",
        13: "El pasaje termina con el pulgar en el re. Deslízalo hacia abajo hasta el si para el acorde, con el dedo 2 en el re.",
      },
    },
  },
};
