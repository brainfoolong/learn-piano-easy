/** The guide of *Toccata and Fugue in D minor* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La « Toccata et fugue en ré mineur » de Bach a été publiée pour la première fois en 1833, " +
    "quand on redécouvrait la musique de Bach. " +
    "Felix Mendelssohn l’a défendue, et il l’a jouée avec un grand succès en 1840. " +
    "Le film de Walt Disney « Fantasia » (1940) s’ouvre sur cette œuvre.",
  funFact:
    "L’œuvre est restée presque inconnue jusqu’à sa première édition, plus de quatre-vingts ans après la mort de Bach.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 3 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 4 à 6 à la main droite seule. La même idée revient une octave plus bas.",
        "Maintenant, la main gauche seule. Aux mesures 7 et 8, elle monte dans un accord sombre, une note à la fois.",
        "Joue à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo, fort et avec aplomb.",
      ],
      tips: [
        "Joue le premier la fort et tiens-le toute la mesure, comme un grand orgue.",
        "Après le silence, le doigt 5 descend sur le sol. Puis chaque doigt joue un pas plus bas.",
        "Cet accord sonne sombre et tendu. Laisse-le flotter dans l’air, puis savoure l’accord lumineux de la mesure 9.",
      ],
      tricky: {
        2: "Profite du silence pour descendre le doigt 5 du la au sol. Le trait descend ensuite doigt après doigt.",
        4: "Profite du silence de la mesure 3 pour descendre la main d’une octave. Le doigt 5 arrive sur le la.",
        11: "Après le court silence, la main gauche saute en bas sur le la avec le doigt 5. Le pouce droit prend le do dièse.",
      },
    },
    rare: {
      practice: [
        "Joue les six premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Garde chaque accord de trois notes dans une même position, et ne le déplace que d’un pas.",
        "Joue les mesures 7 à 9 à deux mains, en gardant la pédale enfoncée toute la mesure.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo, fort et avec fierté.",
      ],
      tips: [
        "Joue le long la avec force, puis laisse le trait rapide dégringoler jusqu’au ré.",
        "La pédale fait sonner chaque note de la montée, alors l’accord grandit note après note.",
        "Le fa dièse rend cet accord lumineux. Il répond à toute la tension d’avant.",
      ],
      tricky: {
        2: "Profite du silence pour descendre le doigt 5 du la au sol. Puis le trait descend doigt après doigt.",
        4: "Profite du silence de la mesure 3 pour descendre la main droite d’une octave. Le doigt 5 arrive sur le la.",
        16: "Profite du court silence de la mesure 15 pour faire sauter la main gauche en bas, sur le ré et le la graves.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les six premières mesures à la main droite seule. Lance un la, sol, la rapide au début de chaque long la.",
        "Joue la main gauche seule à la mesure 10, où la basse reprend en écho le trait du début.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale, et mets-y autant de drame que tu oses.",
      ],
      tips: [
        "Le la, sol, la rapide est un mordant. Joue-le comme un minuscule frisson, puis tiens le la.",
        "Dans ce trait, le doigt 2 passe par-dessus le pouce, puis le pouce revient. Garde le poignet bien à plat.",
        "Change de pédale au milieu de chaque mesure, pile quand le nouvel accord sonne.",
      ],
      tricky: {
        4: "Profite du silence de la mesure 3 pour descendre la main droite d’une octave. Puis lance la, sol, la et tiens le la.",
        11: "Le trait monte la, do dièse, mi et sol avec les doigts 1, 2, 3 et 5, puis redescend.",
        14: "Profite du court silence pour faire sauter la main gauche vers le bas, du ré au la grave. Change aussi de pédale à ce moment-là.",
      },
    },
    legendary: {
      practice: [
        "Joue seules les octaves de la main droite sur les six premières mesures. " +
          "Garde la main ouverte, le pouce et l’auriculaire prêts.",
        "Joue la main gauche seule. Chaque arpège couvre deux octaves, " +
          "et la basse stride saute entre la note de basse et l’accord.",
        "Joue les mesures 7 à 9 à deux mains. Les mains y montent tour à tour dans l’accord sombre.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse gronder le dernier accord.",
      ],
      tips: [
        "Les octaves font sonner la mélodie comme un orgue. Laisse la note du haut sonner un peu plus fort.",
        "La main gauche commence la montée, et la main droite la termine. On doit entendre un seul long trait.",
        "La basse reprend en octaves le trait du début. Fais-la gronder comme les tuyaux les plus graves de l’orgue.",
      ],
      tricky: {
        11: "L’arpège monte sur deux octaves. Le pouce passe dessous sur le la, et le doigt 4 repasse par-dessus.",
        12: "Garde la main ouverte sur l’octave, le doigt 5 sur le ré aigu et le pouce sur le ré grave.",
        13: "Le doigt 2 passe par-dessus le pouce jusqu’au do dièse, et le pouce revient sur le ré.",
      },
    },
  },
};
