/** The sponsor page in French. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { sponsorPage as en } from "./sponsor.en";

export const sponsorPage: Translation<typeof en> = {
  lead: "Learn Piano Easy est gratuit, et le restera. S’il a apporté un peu de musique dans ta journée, tu peux l’aider à grandir.",
  action: "Soutenir sur GitHub",
  note: "Chaque montant aide, une seule fois ou chaque mois.",
  promises: ["Sans publicité", "Sans inscription", "Fonctionne hors ligne", "Open source, licence MIT"],
  picture: "Un grand cœur, avec deux notes de musique qui flottent autour",
  who: {
    heading: "Qui est derrière",
    text: [
      "Une seule personne crée Learn Piano Easy sur son temps libre, entre le travail, la vie et les gammes.",
      "Le contrôle qualité, c’est un chat qui se promène de temps en temps sur les touches.",
    ],
  },
  spend: {
    heading: "À quoi sert ton soutien",
    items: [
      { title: "Du temps", text: "Des soirées pour de nouvelles leçons, de nouveaux morceaux et moins de bugs." },
      { title: "Le domaine", text: "Pour que le site garde son adresse, et que tu le retrouves toujours." },
      { title: "Du café", text: "Il se transforme en code, à un tempo régulier d’environ 120 pulsations par minute." },
    ],
  },
  help: {
    heading: "D’autres façons d’aider",
    lead: "L’argent est une façon d’aider. Ceci compte tout autant :",
    star: { text: "Ajoute une étoile au projet sur GitHub, pour que d’autres élèves le trouvent.", action: "Étoile sur GitHub" },
    bug: { text: "Signale un bug quand quelque chose sonne faux.", action: "Signaler un bug" },
    friend: "Parles-en à quelqu’un qui a toujours voulu apprendre le piano.",
  },
  thanks: "Merci de jouer. C’est pour toi que tout ça existe.",
};
