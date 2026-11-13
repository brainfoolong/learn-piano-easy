/** The guide of *Ave Maria* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Schubert compuso esta canción en 1825, a partir de una traducción alemana del poema La dama del lago, de Walter Scott. " +
    "Es la tercera canción de Ellen, y se publicó en 1826 como parte de su opus 52. " +
    "La película Fantasia (1940), de Walt Disney, la usa en su parte final, justo después de Una noche en el monte pelado.",
  funFact: "En Fantasia, las campanas del final de Una noche en el monte pelado parecen convertirse en campanas de iglesia que llevan al Ave Maria.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 7 con la mano derecha sola. La mano se queda en el mismo lugar.",
        "Ahora la mano izquierda sola. Mantiene cada nota del bajo durante medio compás o más.",
        "Junta las dos manos en los primeros siete compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Canta las notas largas en tu cabeza. La melodía es una oración, así que tócala suave.",
        "El pulgar descansa en el la y el dedo 5 en el mi. Cada nota de la mano derecha queda bajo un dedo.",
        "Las últimas cuatro notas son parejas. Cuéntalas uno, dos, tres, cuatro.",
      ],
      tricky: {
        2: "Mantén el mi con el dedo 5 casi todo el compás. Luego el dedo 4 toca el re, corto y suave.",
        4: "Los dedos 3, 2, 1 y 2 bajan y vuelven a subir. La mano izquierda pasa de fa a sol en la mitad.",
        6: "Mantén el re con el dedo 4. Luego deja caer los dedos 3 y 2 en el do y el si.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola. Primero suena una nota del bajo, y un acorde de dos notas le responde.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cuenta ocho tiempos en cada compás. La mano izquierda toca en los tiempos 1, 3, 5 y 7.",
        "La mano derecha nunca se mueve. Los dedos 1 y 3 tocan juntos el la y el do, una tercera.",
        "Toca la mano izquierda más suave que la melodía, como un arpa tranquila bajo una voz.",
      ],
      tricky: {
        3: "La mano derecha descansa medio compás. Sigue contando mientras la mano izquierda toca sola.",
        6: "En la mano izquierda, el dedo 2 toma el si y el pulgar toma el fa de arriba.",
        7: "La mano izquierda se estira del do hasta el mi grave con el dedo 5.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola. Cada medio compás sube desde la nota del bajo y vuelve a bajar.",
        "Toca solas las terceras y sextas de la mano derecha, y presiona las dos notas de cada par como si fueran una.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal con cada nota nueva del bajo, dos veces en cada compás.",
        "Deja que la mano izquierda ondule suave, como un arpa bajo la melodía.",
        "La melodía es la nota de arriba de cada par, así que deja que el dedo de arriba guíe.",
      ],
      tricky: {
        9: "Después del silencio, abre la mano a una sexta, el re y el si bemol. Los dedos 1 y 5 la mantienen casi todo el compás.",
        12: "Las terceras bajan y vuelven a subir. El pulgar toma el mi bemol, luego el fa, el mi bemol y otra vez el fa.",
        15: "Las sextas bajan una tecla a la vez, y luego la mano vuelve a saltar arriba tras un silencio corto.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: la octava, cuatro notas rápidas y luego un silencio corto para saltar.",
        "Toca solas las octavas de la mano derecha. Mantén la mano abierta, con el pulgar y el meñique listos.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Aprovecha el silencio corto al final de cada medio compás para saltar a la octava siguiente.",
        "La melodía vuelve en octavas. Deja que el meñique cante la nota de arriba.",
        "Toca el último acorde suave, y mantenlo hasta que el sonido se apague.",
      ],
      tricky: {
        9: "Después del silencio, abre la mano a una sexta, el re y el si bemol. Los dedos 1 y 5 la mantienen casi todo el compás.",
        17: "Empiezan las octavas. Mantén la mano abierta del pulgar al meñique, y muévela toda junta.",
        18: "Aprovecha el silencio corto antes de este compás para saltar arriba, a la octava de re.",
      },
    },
  },
};
