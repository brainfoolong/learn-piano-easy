/** The data page in French. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { dataPage as en } from "./data.en";

export const dataPage: Translation<typeof en> = {
  lead: "Tes paramètres, ta progression dans le cours, tes morceaux et tes résultats restent tous dans ce navigateur. Sauvegarde-les dans un seul fichier pour les garder à l’abri, ou pour les emmener sur un autre appareil.",
  save: {
    heading: "Faire une sauvegarde",
    text: "Un seul fichier contient tout. Garde-le en lieu sûr, par exemple dans un dossier en ligne.",
    action: "Sauvegarder",
    never: "Ce navigateur n’a encore fait aucune sauvegarde.",
    today: "La dernière sauvegarde date d’aujourd’hui.",
    on: (date: string) => `La dernière sauvegarde date du ${date}.`,
    done: "Le fichier de sauvegarde est enregistré.",
  },
  restore: {
    heading: "Restaurer une sauvegarde",
    text: "Ouvre un fichier de sauvegarde de Learn Piano Easy. Un fichier de paramètres ou une sauvegarde de progression d’une ancienne version fonctionne aussi.",
    action: "Restaurer une sauvegarde",
  },
  folder: {
    heading: "Synchroniser un dossier",
    text: "Choisis un dossier, par exemple un dossier que ton stockage en ligne synchronise. Chaque modification y est alors copiée automatiquement, avec une copie datée pour chacun des sept derniers jours.",
    connect: "Connecter un dossier",
    starting: "Recherche de ton dossier…",
    synced: (name: string) => `Tes données sont gardées dans le dossier « ${name} ».`,
    waiting: "Chaque modification arrive dans le dossier un instant plus tard.",
    written: (time: string) => `Le dossier a été mis à jour pour la dernière fois à ${time}.`,
    reconnect: (name: string) =>
      `Ton navigateur redemande l’autorisation avant d’écrire dans le dossier « ${name} ».`,
    reconnectAction: "Reconnecter le dossier",
    asking: (name: string) =>
      `Le dossier « ${name} » contient des données que ce navigateur n’a pas écrites. Rien n’y est écrit tant que tu n’as pas choisi.`,
    askingFrom: (date: string) => `Ces données ont été sauvegardées le ${date}.`,
    restoreAction: "Restaurer depuis le dossier",
    replaceAction: "Remplacer par les données de ce navigateur",
    replaced: "Le dossier contient maintenant les données de ce navigateur. L’ancien fichier est gardé dans son dossier de sauvegardes.",
    failed: "Impossible d’écrire dans le dossier. Reconnecte-le, ou choisis-le à nouveau.",
    disconnect: "Déconnecter",
    gone: "Impossible de lire le fichier du dossier. Rien n’a changé.",
  },
  ask: {
    title: "Restaurer cette sauvegarde ?",
    merge: "Ta progression, tes morceaux et tes résultats s’ajoutent à ce qui est déjà là. Les données plus récentes sont conservées.",
    replace: "Tes paramètres et ceux de tes morceaux prennent les valeurs du fichier. La page se recharge ensuite.",
    confirm: "Restaurer",
    cancel: "Ne rien changer",
    close: "Fermer",
  },
  reading: "Lecture du fichier…",
  restored: "La sauvegarde est restaurée.",
  notOurs: "Ce fichier n’est pas une sauvegarde de Learn Piano Easy. Rien n’a changé.",
  failed: "Impossible d’enregistrer. Ton fichier de sauvegarde contient toujours tout.",
};
