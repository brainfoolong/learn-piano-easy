/** The guide of *The Entertainer* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Scott Joplin, el Rey del Ragtime, publicó este rag en San Luis en 1902. " +
    "Un rag pone una melodía saltarina y a contratiempo sobre un bajo constante que hace um-pa. " +
    "Esta es la primera parte, la que todo el mundo tararea. " +
    "La película The Sting la hizo famosa en todo el mundo en 1973.",
  funFact: "Joplin recibió un Premio Pulitzer especial en 1976, casi sesenta años después de su muerte.",
  versions: {
    common: {
      practice: [
        "Toca los primeros dos compases con la mano derecha sola, hasta que el salto del mi al do te resulte fácil.",
        "Toca toda la frase con la mano derecha sola.",
        "Junta las dos manos en los primeros ocho compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El pulgar en el mi, el dedo medio en el do agudo. Mantén la mano abierta y déjala mecerse entre los dos.",
        "Toca cada mi corto y con rebote. Ese pequeño hueco es el saltito del rag.",
        "Los dedos 2 a 5 se apoyan en el si, el do, el re y el mi, uno junto al otro.",
      ],
      tricky: {
        2: "La mano se mece del do abajo al mi, y vuelve. Suelta cada tecla rápido, para que el salto tenga tiempo.",
        9: "Desde el si, el pulgar vuelve a bajar al mi. Mantén la mano abierta, y la melodía empieza otra vez.",
        10: "El mismo compás de antes, el que se mece: el dedo medio en el do, el pulgar en el mi, y notas cortas.",
      },
    },
    rare: {
      practice: [
        "Toca la anacrusa y los primeros dos compases con la mano derecha sola.",
        "Toca con la mano izquierda sola: una nota grave, y luego un acorde, como una pequeña marcha.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El re sostenido y el mi comparten el dedo 2. Deslízalo una tecla hacia arriba para entrar en la melodía.",
        "En cada compás, la mano izquierda hace «um» en el primer tiempo y «pa» en el tercero.",
        "Deja que la subida do, re, re sostenido, mi suene un poco más fuerte en cada paso.",
      ],
      tricky: {
        2: "El dedo 2 se desliza del re sostenido al mi, y el meñique busca el do agudo.",
        3: "Mantén el meñique sobre el do y el dedo 2 sobre el mi. Solo se mece la muñeca.",
        10: "Después del silencio, el dedo 2 salta abajo al mi. Mira la tecla antes de llegar.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola: salta abajo a la nota del bajo, y luego arriba al acorde.",
        "Toca la segunda frase con la mano derecha sola, donde un fa sostenido lleva la melodía al sol.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Pisa el pedal con cada nota del bajo y levántalo para el acorde, para que el acorde suene nítido.",
        "El bajo se desliza una tecla hacia abajo, del mi al mi bemol. Deja que se oiga.",
        "La última frase repite tres veces un grupo corto de notas. Cuéntalo para saber en cuál estás.",
      ],
      tricky: {
        4: "La mano izquierda salta del fa grave arriba al acorde, mientras la mano derecha mantiene el la y el do.",
        5: "Después del silencio, sube la mano derecha para que el dedo 2 llegue al do de la subida.",
        21: "Vuelve la subida del compás 5. Sube la mano durante el silencio, y el dedo 2 toma el do.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: una octava abajo en lo grave, y luego el acorde arriba.",
        "Toca las sextas de la mano derecha sola, con el pulgar y el meñique moviéndose juntos.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "Toca la nota de arriba de cada sexta un poco más fuerte, para que la melodía cante.",
        "Las octavas del bajo bajan del mi al mi bemol, y luego siguen hasta el re.",
      ],
      tricky: {
        4: "La mano izquierda salta de la octava grave de fa arriba al acorde, mientras la mano derecha se abre sobre el fa, el la y el do.",
        12: "Vuelve el acorde de fa. Apoya primero la octava grave, y luego deja que la mano salte arriba.",
        20: "El acorde de fa llega por tercera vez, con los mismos saltos que en el compás 4. Mantén firme el pulso.",
      },
    },
  },
};
