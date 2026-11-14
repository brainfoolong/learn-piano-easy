/** *Changing the bass on the beat* in French. */
import type { Translation } from "../../../i18n/translation";
import type { ChangingTheBassOnTheBeatTexts } from "./changing-the-bass-on-the-beat.en";

export const changingTheBassOnTheBeatFr: Translation<ChangingTheBassOnTheBeatTexts> = {
  title: "Changer la basse sur le temps",
  steps: {
    "bass-changes": {
      text: "Écoute la main gauche. Elle tient une quinte pendant toute une mesure, puis passe à une nouvelle. La main droite ne s’arrête jamais.",
    },
    "beat-one": {
      text: "La basse change sur le premier temps d’une nouvelle mesure. Elle arrive en même temps que la note de la main droite sur ce temps.",
    },
    "when-it-changes": {
      text: "Sur quel temps la main gauche passe-t-elle à sa nouvelle quinte ?",
      answers: ["Sur le 1er temps de la nouvelle mesure", "Sur le 4e temps, un peu en avance", "Quand la main droite a un silence"],
    },
    "count-the-bars": {
      text: "Tape chaque temps pendant deux mesures, et compte en même temps : un, deux, trois, quatre. Sens comme chaque mesure commence sur le un.",
    },
    "land-on-one": {
      text: "Tiens l’ancienne quinte jusqu’à la fin du quatrième temps. Puis relâche-la et arrive sur la nouvelle quinte pile sur le un.",
    },
    "c-to-g": {
      text: "Main gauche seule. Joue la quinte sur le do sous le do central, descends à la quinte sur le sol en dessous, puis reviens au do.",
    },
    "change-under-tune": {
      text: "Maintenant, à deux mains. Les quintes sont sur do, puis sur le sol en dessous, puis de nouveau sur do. Chaque mesure commence par une nouvelle quinte et une note de la mélodie, ensemble.",
    },
    "four-basses": {
      text: "Écoute quatre mesures, chacune avec sa quinte : do, fa, sol, puis de nouveau do. Chaque changement tombe sur le un.",
    },
    "four-bars": {
      text: "À toi. Joue les quatre mesures avec les quintes sur do, puis sur le fa et le sol en dessous, puis de nouveau sur do. Change de quinte en même temps que la première note de chaque mesure.",
    },
    recap: {
      text: "Bravo. La main gauche change maintenant sur le temps.",
      points: [
        "La basse change sur le premier temps d’une nouvelle mesure.",
        "La nouvelle quinte arrive en même temps que la note de la main droite.",
        "Tiens l’ancienne quinte jusqu’à la fin de la mesure, puis déplace la main.",
      ],
    },
  },
};
