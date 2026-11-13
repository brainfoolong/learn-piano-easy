/** The guide of *Last Horizon* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Last Horizon es una melodía nuestra, al estilo de la música de una película moderna. " +
    "Una figura lenta se repite bajo acordes largos y mantenidos, como cuando termina un viaje largo.",
  funFact: "Una figura que se repite una y otra vez debajo de una melodía se llama ostinato, una palabra italiana que significa «terco».",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. El dedo 5 sube una tecla, hasta el si bemol.",
        "Ahora la mano izquierda sola. Mantiene una nota grave o una quinta durante cada compás entero.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el dedo 4 en el la. El pulgar espera sobre el re, y el dedo 5 sobre el si bemol.",
        "Cuenta cuatro tiempos lentos en cada compás. La mano izquierda mantiene cada nota hasta que termina el compás.",
        "Toca suave y parejo, como la música al final de una película larga.",
      ],
      tricky: {
        4: "Mantén el la con el dedo 5 durante cuatro tiempos. La mano izquierda toca fa y do a la vez con los dedos 5 y 2.",
        5: "El dedo 5 sube una tecla, hasta el si bemol. Luego los dedos 4 y 3 bajan caminando hasta el la y el sol.",
        15: "Cuatro notas parejas bajan caminando del fa al do sostenido. El pulgar toca el do sostenido, y luego el dedo 2 toma el re.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola: una nota grave, y luego la quinta de arriba, una y otra vez.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda toca las mismas dos notas en cada tiempo, grave y aguda. Mantenla firme y tranquila.",
        "Suelta el último sol del compás 3 un poco antes. Así la mano izquierda tiene tiempo de bajar al fa.",
        "Presiona do sostenido y mi a la vez, con el pulgar y el dedo 3.",
      ],
      tricky: {
        5: "El dedo 5 sube una tecla, hasta el si bemol. La mano izquierda se mece entre el sol y el re.",
        6: "El dedo 3 baja del sol al fa. Luego los dedos 2 y 1 tocan mi y re.",
        16: "Termina con re y fa a la vez, con los dedos 2 y 4. La mano izquierda mantiene el re y el la debajo.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola hasta que los acordes arpegiados rueden por sí mismos.",
        "Toca los compases 9 a 12 con la mano derecha sola, y pasa el pulgar por debajo al subir.",
        "Toca los acordes de la mano derecha sola en los compases 17 a 24, y deja que cante la nota de arriba.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal al comienzo de cada compás, donde cambia el acorde.",
        "Mantén suave la mano izquierda. Su figura se repite como un motor silencioso debajo de la melodía.",
        "Después del mi bemol, pasa el pulgar por debajo hasta el fa. Luego los dedos 2 y 4 alcanzan el sol y el do.",
      ],
      tricky: {
        6: "El dedo 3 baja del fa al mi bemol. Luego los dedos 2 y 1 bajan caminando hasta el do.",
        15: "La mano sube por sol, si y re, y luego vuelve a bajar caminando. El pulgar termina en el fa.",
        22: "Mantén sol, do y mi bemol con los dedos 1, 2 y 3. Luego los dedos 2 y 1 tocan re y do.",
      },
    },
    legendary: {
      practice: [
        "Toca los compases 9 a 12 con la mano izquierda sola. Hace rodar la misma figura en cada tiempo.",
        "Toca los primeros ocho compases con la mano derecha sola, una octava más arriba que la melodía.",
        "Toca los acordes grandes de la mano derecha sola en los compases 17 a 24, y deja que cante el dedo de arriba.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Aquí la mano izquierda hace rodar corcheas. En el compás 9 se vuelven semicorcheas, y la música crece.",
        "Cuenta cuatro semicorcheas en cada tiempo: fundamental, quinta, octava, quinta. Nunca dejes que la figura se apure.",
        "Esta es la última vez que suena el tema, y la más llena. Toca la nota de arriba de cada acorde un poco más fuerte.",
      ],
      tricky: {
        17: "Abre la mano sobre cuatro notas para cada acorde. Levántala antes, al final del compás, para saltar hacia abajo.",
        18: "Mantén el mi bemol, el la bemol, el do y el mi bemol durante tres tiempos. Luego el dedo 4 toma el do.",
        23: "Levanta la mano después del primer acorde. Luego el dedo 5 llega al si, con fa y re debajo.",
      },
    },
  },
};
