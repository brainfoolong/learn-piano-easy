/** The guide of *In the Hall of the Mountain King* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg escribió esta música para la obra de teatro Peer Gynt, de Henrik Ibsen, estrenada en Christiania, la actual Oslo, en 1876. " +
    "En esta escena, los trols rodean a Peer en la sala de su rey. " +
    "La misma melodía corta vuelve una y otra vez, cada vez más fuerte y más rápida, hasta que termina con un estruendo. " +
    "La película The Social Network la usa durante una regata de remo.",
  funFact: "El propio Grieg escribió que esta pieza apestaba a estiércol de vaca y a presunción de trol, y que casi no soportaba oírla.",
  versions: {
    common: {
      practice: [
        "Toca la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Ahora la mano derecha sola en los compases 9 a 16, donde la melodía sube más alto.",
        "La mano izquierda mantiene una quinta o una nota en cada compás. Junta las manos en los primeros ocho compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Aquí cada dedo tiene su propia tecla: el pulgar en el la, el meñique en el mi.",
        "Toca corto y suave, como un trol que cruza una cueva de puntillas.",
        "Aquí la melodía sube más alto. Deja que suene un poco más fuerte, como si los trols despertaran.",
      ],
      tricky: {
        4: "En el compás 3, el dedo 4 se estiró hacia dentro para el re sostenido, y aquí el dedo 2 se estira hacia dentro para el si bemol.",
        9: "El pulgar cae sobre el mi, y los dedos 2, 3 y 4 suben una tecla cada uno. La mano izquierda baja al mi.",
        17: "La melodía empieza otra vez. Durante el silencio, lleva el pulgar de vuelta al la, y la mano izquierda también al la.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Va y viene entre dos notas en cada tiempo, como una marcha de trols.",
        "Toca los compases 3 y 4 con la mano derecha sola, y cuida el sostenido y el bemol.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Junta las manos en los compases 9 a 16, donde la melodía sube.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Re sostenido y si bemol son teclas negras. Los dedos 4 y 2 se estiran un poco más hacia dentro.",
        "Las dos manos tocan en cada tiempo. Marcha con ellas, y mantén parejos los tiempos.",
        "En esta parte los trols se acercan. Tócala un poco más fuerte que el comienzo.",
      ],
      tricky: {
        4: "El dedo 2 se estira hacia dentro para el si bemol, mientras la mano izquierda va y viene entre sol y re.",
        9: "Aprovecha el silencio para bajar la mano izquierda al mi grave. El pulgar derecho empieza la subida en mi.",
        17: "Durante el silencio, las dos manos vuelven al la, y la melodía empieza una vez más.",
      },
    },
    epic: {
      practice: [
        "Toca solos los acordes arpegiados de la mano izquierda hasta que rueden solos: grave, medio, agudo, medio.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí el pulgar pasa por debajo.",
        "Toca el tema con la mano izquierda sola, desde el compás 17.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja que suene cada vez más fuerte hacia el final.",
      ],
      tips: [
        "El bajo se desliza del do sostenido al do. Ese deslizamiento tenebroso hace que los trols suenen sigilosos.",
        "Después del do sostenido con el dedo 2, pasa el pulgar por debajo para el re, y la mano sube.",
        "Ahora la mano izquierda toca la melodía. La mano derecha solo da toques de acordes cortos entre los tiempos.",
      ],
      tricky: {
        9: "Baja la mano izquierda al fa sostenido grave durante el silencio corto. El pulgar derecho empieza la subida.",
        17: "Las manos intercambian sus tareas. La mano izquierda toca la melodía en los tiempos, y la derecha da toques entre ellos.",
        23: "La mano izquierda sube por las notas fa sostenido, la sostenido, do sostenido y mi, y luego suelta para buscar el si grave.",
      },
    },
    legendary: {
      practice: [
        "Toca solas las octavas de la mano izquierda, cortas y punteadas, con un silencio después de cada una.",
        "Toca solas las octavas de la mano derecha. Mantén la mano en una misma forma y muévela como una sola pieza.",
        "Toca solas las octavas insistentes de la mano izquierda, ocho por compás.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, de suave al principio a fuerte al final.",
      ],
      tips: [
        "Empieza suave. Toda la pieza crece en volumen hasta el final, así que deja espacio para crecer.",
        "En las octavas, el pulgar y el meñique mantienen la misma forma. Deja que la muñeca haga el movimiento.",
        "Estos son los últimos golpes de los trols. Toca cada acorde fuerte y corto.",
      ],
      tricky: {
        9: "La mano derecha empieza sus octavas, y la mano izquierda empieza sus corcheas. Mantén sueltas las dos manos.",
        13: "Las octavas suben otra vez por las notas fa sostenido, sol sostenido, la sostenido y si. Deja que la muñeca rebote de tecla en tecla.",
        27: "Los acordes alternan entre si menor y fa sostenido mayor. Mantén los dedos 1, 2, 3 y 5 en su forma.",
      },
    },
  },
};
