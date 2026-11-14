/** *Sitting at the piano* in French. */
import type { Translation } from "../../../i18n/translation";
import type { SittingAtThePianoTexts } from "./sitting-at-the-piano.en";

export const sittingAtThePianoFr: Translation<SittingAtThePianoTexts> = {
  title: "S’asseoir au piano",
  steps: {
    "face-middle-c": {
      text: "Bien jouer commence par la façon de s’asseoir. Assieds-toi au milieu du piano, le do central juste devant toi. Ainsi, les deux mains atteignent facilement leurs touches.",
    },
    "find-middle-c": {
      text: "Joue le do central, la touche juste devant toi.",
    },
    "bench-and-feet": {
      text: "Assieds-toi sur la moitié avant de la banquette, pas tout au fond. Garde le dos droit et détendu. Pose les deux pieds à plat sur le sol.",
    },
    "bench-quiz": {
      text: "Où t’assieds-tu sur la banquette ?",
      answers: [
        "Sur la moitié avant, les deux pieds à plat sur le sol",
        "Tout au fond, le dos appuyé contre quelque chose",
        "Tout au bord, les pieds en l’air",
      ],
    },
    forearms: {
      text: "Les avant-bras doivent être à l’horizontale, à hauteur des touches, sans pencher vers le haut ni vers le bas. Monte ou baisse la banquette pour y arriver. Garde les épaules souples.",
    },
    "forearms-quiz": {
      text: "Quand la banquette est-elle à la bonne hauteur pour toi ?",
      answers: [
        "Quand les coudes sont bien plus bas que les touches",
        "Quand les avant-bras sont à l’horizontale, à hauteur des touches",
        "Quand les mains tombent d’en haut sur les touches",
      ],
    },
    "curved-fingers": {
      text: "Arrondis légèrement les doigts, comme si tu tenais une petite balle. Enfonce les touches du bout des doigts, pas avec les doigts à plat. La main reste détendue tout le temps.",
    },
    "fingers-quiz": {
      text: "Comment les doigts se posent-ils sur les touches ?",
      answers: [
        "À plat et tendus",
        "Crispés, serrés les uns contre les autres",
        "Détendus et arrondis, pour jouer du bout des doigts",
      ],
    },
    "relaxed-play": {
      text: "Imagine une petite balle dans la main, et joue les touches indiquées du bout des doigts. Garde tout souple, des épaules jusqu’aux doigts.",
    },
    "posture-quiz": {
      text: "Laquelle de ces façons de s’asseoir au piano est la bonne ?",
      answers: [
        "Tout au bout de la banquette, les doigts à plat",
        "Face au do central, à l’avant de la banquette, avant-bras à l’horizontale, doigts arrondis",
        "Très bas, les bras levés vers les touches",
      ],
    },
    recap: {
      text: "Bravo. Tu sais comment t’asseoir au piano.",
      points: [
        "Assieds-toi face au do central, sur la moitié avant de la banquette, les pieds à plat.",
        "Les avant-bras sont à hauteur des touches.",
        "Les doigts restent détendus et arrondis, et tu joues du bout des doigts.",
      ],
    },
  },
};
