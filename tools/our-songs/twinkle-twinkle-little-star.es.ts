/** The guide of *Twinkle Twinkle Little Star* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Esta melodía empezó como una canción francesa, Ah! vous dirai-je, maman, impresa por primera vez en 1761. " +
    "Mozart escribió doce variaciones sobre ella para piano. " +
    "En 1806, Jane Taylor publicó su poema sobre una estrellita, que más tarde se cantó con esta melodía.",
  funFact: "La canción del alfabeto en inglés y Baa, Baa, Black Sheep se cantan con esta misma melodía.",
  versions: {
    common: {
      practice: [
        "Toca con la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Ahora la mano izquierda sola. Solo se mueve entre el do, el fa y el sol.",
        "Junta las dos manos en los primeros cuatro compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Pon el pulgar en el do central. El dedo 4 toca el sol, y el meñique toca el la.",
        "El último do dura el doble que las notas anteriores, así que cuenta dos tiempos.",
        "La parte del medio dice lo mismo dos veces. Tócala más suave la segunda vez, como un eco.",
      ],
      tricky: {
        3: "Aquí la mano baja una tecla, así que el dedo 4 deja el sol y llega al fa.",
        5: "Ahora el meñique toca el sol. Baja desde ahí, un dedo por tecla: 5, 4, 3, 2.",
        11: "Es otra vez el compás 3. Desliza la mano una tecla abajo, para que el dedo 4 llegue al fa.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano derecha sola, despacio, y siente las dos notas rápidas del compás 4.",
        "Toca con la mano izquierda sola. Mantiene cada acorde dos o cuatro tiempos.",
        "Junta las dos manos en la parte del medio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El re y el mi comparten un tiempo. Di «uno-y» mientras los tocas.",
        "La mano izquierda se queda en un mismo lugar, y cada acorde conserva sus propios dedos.",
        "Los últimos cuatro compases son una coda, una despedida corta. Ve un poco más despacio al final.",
      ],
      tricky: {
        3: "Aquí el dedo 4 baja del sol al fa. Deja que toda la mano se deslice una tecla abajo con él.",
        11: "Es otra vez el compás 3. Desliza la mano una tecla abajo, para que el dedo 4 llegue al fa.",
        14: "El dedo 4 se desliza del sol al fa una vez más, mientras la coda vuelve a casa.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca las terceras de la mano derecha sola, y presiona las dos notas de cada doble nota como una sola.",
        "Toca sola la escala del compás 15, con el paso del pulgar después del dedo 3.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Toca suave el bajo de Alberti, para que la melodía quede arriba.",
        "Las dos notas rápidas al final de los compases 4 y 6 llevan hasta el sol. Tócalas ligeras.",
        "El pulgar pasa por debajo en el fa, para que la escala suba hasta el do sin un hueco.",
        "Cambia el pedal dos veces por compás, en los tiempos uno y tres.",
      ],
      tricky: {
        3: "El dedo 4 se desliza del sol al fa, mientras el bajo de Alberti sigue rodando.",
        9: "El pulgar se desliza del re al do. Luego los dedos 2 y 4 toman la primera tercera.",
        14: "El dedo 4 se desliza del sol al fa, como en el compás 3.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca despacio las semicorcheas de la parte del medio, con la mano derecha sola.",
        "Toca las octavas de la mano derecha sola, y levanta la mano entre una y otra.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Mira los saltos de la mano izquierda, y deja que la mano derecha encuentre sus acordes al tacto.",
        "Cada nota de la melodía empieza un grupo de cuatro semicorcheas. Apóyate un poco en ella, para que la melodía se siga oyendo.",
        "Toca las octavas cortas y brillantes, como campanas.",
      ],
      tricky: {
        3: "El pulgar baja del la al sol mientras el dedo 2 mantiene el do. Mueve la mano como un todo.",
        14: "Es otra vez el compás 3. El pulgar baja del la al sol, y el dedo 2 se queda en el do.",
        15: "El dedo 3 cruza por encima del pulgar en el si mientras el pasaje baja. Luego la mano vuelve a subir por sol mayor.",
      },
    },
  },
};
