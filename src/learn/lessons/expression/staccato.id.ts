/** *Staccato* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { StaccatoTexts } from "./staccato.en";

export const staccatoId: Translation<StaccatoTexts> = {
  steps: {
    "staccato-demo": {
      text: "Dengarkan C naik sampai G, lalu turun lagi. Setiap not pendek, dengan sedikit hening setelahnya.",
    },
    "short-and-detached": {
      text: "Bermain pendek dan terpisah disebut staccato. Setiap not berdiri sendiri, seperti tetes hujan yang mengetuk jendela.",
    },
    "what-staccato-means": {
      text: "Apa arti staccato?",
      answers: [
        "Pendek dan terpisah",
        "Mulus dan bersambung",
        "Lambat dan lembut",
        "Makin lama makin keras",
      ],
    },
    "the-dot": {
      text: "Titik kecil di atas atau di bawah kepala not meminta staccato. Titik pada not bertitik ada di samping kepala not, dan membuat not itu lebih panjang.",
    },
    "where-the-dot-sits": {
      text: "Di mana letak titik staccato?",
      answers: [
        "Di samping kanan kepala not",
        "Di akhir birama",
        "Di atas atau di bawah kepala not",
        "Di ujung tangkai not",
      ],
    },
    bounce: {
      text: "Untuk staccato, biarkan jarimu memantul dari tuts seperti bola dari lantai. Mainkan dengan ringan dari pergelangan tangan, dan biarkan tuts langsung naik kembali.",
    },
    "both-hands-bounce": {
      text: "Mainkan C, E, G, E, C dengan kedua tangan bersamaan. Tangan kanan mulai dari C tengah, dan tangan kiri satu oktaf lebih rendah. Biarkan jarimu memantul dari setiap not.",
    },
    "contrast-demo": {
      text: "Dengarkan lima not yang sama dua kali. Pada satu putaran notnya legato, dan pada putaran lainnya staccato.",
    },
    "which-came-first": {
      text: "Bagaimana bunyi kedua frasa tadi?",
      answers: [
        "Keduanya pendek",
        "Pertama mulus, lalu pendek",
        "Pertama pendek, lalu mulus",
        "Keduanya mulus",
      ],
    },
    "mixing-both": {
      text: "Musik sering mencampur keduanya. Tanda legato menghubungkan beberapa not, dan titik membuat not lainnya pendek.",
    },
    "mixed-phrase": {
      text: "Mainkan C, D, E, F, dan G secara legato di bawah tanda legato, mulai dari C tengah. Lalu pantulkan tiga G pendek lagi.",
    },
    "dot-above-quiz": {
      text: "Sebuah not punya titik kecil di atasnya. Bagaimana kamu memainkannya?",
      answers: [
        "Mulus ke not berikutnya",
        "Dua kali lebih panjang",
        "Ditahan dengan pedal",
        "Pendek, memantul dari tuts",
      ],
    },
    "bounced-chords": {
      text: "Pantulkan akor dengan tangan kanan dari C tengah: akor C mayor dua kali, lalu F mayor sebagai C-F-A, G mayor sebagai B-D-G, dan C mayor lagi.",
    },
    "which-lets-go-early": {
      text: "Dalam gaya mana jarimu meninggalkan tuts jauh sebelum not berikutnya?",
      answers: ["Gaya staccato", "Gaya legato","Di bawah tanda legato", "Pada not penuh"],
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa bermain pendek dan terpisah.",
      points: [
        "Staccato berarti pendek dan terpisah.",
        "Titik di atas atau di bawah kepala not menandainya.",
        "Pantulkan jari dengan ringan dari tuts, dari pergelangan tangan.",
        "Legato menyambung not, dan staccato memisahkannya.",
      ],
    },
  },
};
