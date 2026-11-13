/** *The Alberti bass* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { AlbertiBassTexts } from "./alberti-bass.en";

export const albertiBassId: Translation<AlbertiBassTexts> = {
  title: "Bas Alberti",
  steps: {
    "alberti-demo": {
      text: "Dengarkan tangan kiri saja. Tangan kiri menguraikan setiap akor menjadi pola yang cepat dan bergulir. Mozart sering memakainya.",
    },
    "what-alberti-is": {
      text: "Akor terurai ini disebut bas Alberti. Polanya memainkan not akor rendah, tinggi, tengah, tinggi, dalam not seperdelapan.",
    },
    "pattern-order": {
      text: "Dengan urutan apa bas Alberti memainkan not-not sebuah akor?",
      answers: ["Rendah, tengah, tinggi, tengah", "Tinggi, tengah, rendah, tengah", "Rendah, tinggi, tengah, tinggi"],
    },
    "five-one-three-one": {
      text: "Tangan kirimu memainkannya dengan jari 5, 1, 3, 1. Jari 5 mengambil not rendah, ibu jari not tinggi, dan jari 3 not tengah.",
    },
    "c-alberti": {
      text: "Giliranmu, pada C. Letakkan jari 5 di C di bawah C tengah. Mainkan C, G, E, G dua kali, dengan rata.",
    },
    "g7-shape": {
      text: "Untuk G, pakai G7: G mayor dengan tambahan F di atasnya. Lewati G-nya, lalu mainkan B, D, dan F. Ketiganya dekat dengan C, E, dan G, jadi tanganmu hampir tidak bergeser.",
    },
    "g7-alberti": {
      text: "Geser jari 5 turun ke B. Mainkan B, F, D, F dua kali dengan jari 5, 1, 3, 1.",
    },
    "f-second-inversion": {
      text: "Untuk F, mainkan akornya dalam pembalikan kedua: C, F, dan A. Jari 5 tetap di C. Polanya C, A, F, A.",
    },
    "thumb-on-f": {
      text: "Dalam bas Alberti pada F, tuts mana yang dimainkan ibu jarimu?",
    },
    "f-alberti": {
      text: "Biarkan jari 5 di C. Mainkan C, A, F, A dua kali dengan jari 5, 1, 3, 1.",
    },
    "change-chords": {
      text: "Mainkan polanya masing-masing sekali pada C, F, G7, dan C. Jaga not seperdelapan tetap rata saat berganti akor.",
    },
    "alberti-tune-demo": {
      text: "Ini melodi pendek di atas bas Alberti. Tangan kanan memainkan not setengah, sementara tangan kiri terus bergulir.",
    },
    "alberti-tune": {
      text: "Letakkan ibu jari kananmu di C tengah. Mainkan setiap not melodi bersamaan dengan not bas rendah di bawahnya.",
    },
    "d-major-demo": {
      text: "Tantangan akhir, Canon in D, memakai nada dasar D mayor. Tanda mulanya punya dua kres, pada F dan pada C. Jadi setiap F menjadi F kres, dan setiap C menjadi C kres. Dengarkan tangga nada D mayor.",
    },
    "two-sharps": {
      text: "Tanda mula menunjukkan dua kres, pada F dan pada C. Tuts mana yang kamu mainkan untuk F dan C?",
      answers: ["F kres dan C kres, tuts hitam", "F dan C, tuts putih", "Hanya F kres, dan C tetap tuts putih"],
    },
    "d-major-scale": {
      text: "Giliranmu. Letakkan ibu jari kananmu di D di atas C tengah, lalu mainkan tangga nadanya naik dan turun dengan penjarian C mayor.",
    },
    "canon-bass-demo": {
      text: "Dengarkan tangan kiri dalam tantangan akhir: jari 5 memainkan not rendah, dan ibu jari not yang lebih tinggi. Lalu tangan melompat ke pasangan not berikutnya, misalnya dari A turun ke A satu oktaf lebih rendah. Bagian ini berakhir pada akor D mayor.",
    },
    "canon-bass": {
      text: "Giliranmu. Letakkan jari 5 di D di bawah C tengah, mainkan setiap pasangan not, lalu pindahkan tangan ke pasangan berikutnya. Not terendah adalah D kedua di bawah C tengah.",
    },
    "left-d-major": {
      text: "Tantangan akhir ditutup dengan D mayor di tangan kiri. Letakkan jari 5 di D di bawah C tengah, lalu mainkan D, F kres, dan A satu per satu, lalu bersamaan.",
    },
    "black-key-thirds-demo": {
      text: "Menjelang akhir tantangan, tangan kanan memainkan melodi dalam terts. Tiga dari empat terts ini punya tuts hitam: F kres atau C kres.",
    },
    "black-key-thirds": {
      text: "Giliranmu. Letakkan jari 3 di D kedua di atas C tengah, dan jari 5 di F kres di atasnya. Tekan kedua tuts setiap terts bersamaan, lalu turun terts demi terts.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa memainkan bas Alberti.",
      points: [
        "Bas Alberti menguraikan akor dengan urutan rendah, tinggi, tengah, tinggi.",
        "Polanya berjalan dalam not seperdelapan, dengan jari 5, 1, 3, 1.",
        "G7 dan F dalam pembalikan kedua menjaga tangan tetap dekat dengan C.",
        "D mayor punya dua kres dalam tanda mulanya: F kres dan C kres.",
      ],
    },
  },
};
