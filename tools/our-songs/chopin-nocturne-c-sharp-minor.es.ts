/** The guide of *Nocturne in C-sharp minor* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Chopin escribió este nocturno en 1830, y se publicó por primera vez en 1875, mucho después de su muerte. " +
    "Se lo envió a su hermana Ludwika, para que lo practicara antes de su segundo concierto para piano. " +
    "La película The Pianist lo toca, y abre el álbum de su banda sonora.",
  funFact: "En 1939, el pianista Władysław Szpilman lo tocaba en vivo en la Radio Polaca cuando el ataque alemán a Varsovia cortó la transmisión.",
  versions: {
    common: {
      practice: [
        "Toca los primeros dos compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 3 a 10 con la mano derecha sola. La mano empieza más arriba, con el dedo 5 en el la agudo.",
        "Ahora la mano izquierda sola. Nunca se mueve, y cada dedo se queda en su propia tecla.",
        "Junta las dos manos en los primeros cuatro compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Es una canción nocturna. Toca suave, y deja que cada nota larga cante.",
        "Usa el silencio corto después del la grave para subir la mano hasta el la agudo.",
        "Usa el silencio después del re para bajar la mano. Luego el dedo 3 cae en el do.",
      ],
      tricky: {
        1: "Empieza con el dedo 5 en el mi agudo y el dedo 4 en el re. La mano izquierda mantiene juntos el la y el mi.",
        3: "La mano subió. El dedo 5 toca el la agudo, y ahora el pulgar está sobre el re.",
        11: "La mano volvió a bajar. El dedo 3 toca el do, y el pulgar termina en el la.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Una nota grave llega en el pulso, y una doble nota le responde.",
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 5 a 12, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "La melodía salta una octava entera. El pulgar toca el la grave, y el dedo 5 el agudo.",
        "Mantén el pedal pisado solo en los compases de un único acorde, y levántalo en la siguiente línea divisoria.",
        "Usa el silencio después del mi para bajar la mano derecha, para que el dedo 3 llegue al do.",
      ],
      tricky: {
        1: "El dedo 5 toca el mi agudo. La mano izquierda toca el la en el pulso, y luego el do y el mi juntos.",
        3: "El dedo 5 cae en el la agudo después del salto de octava. Mira la tecla, no la mano.",
        13: "La mano bajó durante el silencio. El dedo 3 toca el do, y el dedo 5 toca el mi.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola hasta que sus acordes arpegiados rueden parejos, de grave a agudo.",
        "Toca la figura rápida del compás 3 con la mano derecha sola, muy despacio.",
        "Junta las manos en los primeros cuatro compases, despacio.",
        "Toca solas las terceras de la mano derecha, y presiona las dos notas de cada doble nota como una sola.",
        "Ahora toca toda la canción con las dos manos juntas a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces en cada compás.",
        "La figura después del si largo es nuestra. Tócala con libertad, como quien toma aire al cantar.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que el dedo de arriba la guíe.",
      ],
      tricky: {
        7: "El dedo 3 mantiene el re, y luego los dedos 2 y 1 bajan al si. La mano izquierda sigue rodando si, fa sostenido y re.",
        12: "Al final del compás, el pulgar se estira hacia abajo hasta el la sostenido. Luego los dedos 3 y 5 toman la primera tercera de la melodía.",
        17: "Toca el la sostenido y el do sostenido con los dedos 1 y 3, y luego el do sostenido y el mi con el 2 y el 4. La mano izquierda lleva de vuelta a si menor.",
      },
    },
    legendary: {
      practice: [
        "Toca solos los arpegios de la mano izquierda. Al subir, el dedo 3 cruza por encima del pulgar.",
        "Toca la figura rápida del compás 3 con la mano derecha sola, muy despacio.",
        "Toca solos los acordes de la mano derecha, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja que el último acorde resuene.",
      ],
      tips: [
        "Deja que los arpegios ondulen suaves bajo la melodía que canta, como agua en la noche.",
        "Usa el silencio corto al final de cada arpegio para saltar de vuelta a la nota grave.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        3: "Mantén el do sostenido agudo con el dedo 5. Luego toca la figura con ligereza: si, la, y luego fa sostenido con el pulgar.",
        8: "La mano izquierda sube desde el fa sostenido grave, y luego desde el sol sostenido grave. Salta hacia abajo en el silencio corto.",
        15: "Abre la mano sobre cuatro notas, de do sostenido a do sostenido. Luego empieza la figura con el dedo 4.",
      },
    },
  },
};
