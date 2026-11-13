/** The guide of *Happy Birthday to You* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mildred J. Hill menulis melodi ini untuk Good Morning to All, sebuah lagu salam pagi untuk kelas taman kanak-kanak. " +
    "Ia menerbitkannya pada tahun 1893 dalam Song Stories for the Kindergarten, buku yang dibuatnya bersama saudarinya, Patty. " +
    "Versi ulang tahun yang dinyanyikan sekarang menambahkan dua not pada baris ketiganya, dengan lompatan satu oktaf.",
  funFact:
    "Pada tahun 2015, sebuah pengadilan di Amerika Serikat memutuskan bahwa perusahaan yang memungut bayaran untuk lagu ulang tahun ini tidak punya hak cipta yang sah atas liriknya.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 5 sampai 9, tempat melodi melompat tinggi.",
        "Gabungkan kedua tangan. Tangan kiri hanya menahan satu kuint atau satu not.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Lagu dimulai dengan dua G: yang pertama panjang, yang kedua pendek. G yang pendek mengantar ke birama berikutnya.",
        "Ibu jarimu berada di G, dan setiap jari punya tutsnya sendiri sampai D.",
        "Angkat tangan setelah G kedua, lalu daratkan kelingking di G tinggi.",
      ],
      tricky: {
        2: "Jari 2 memainkan A, ibu jari kembali ke G, lalu jari 4 meraih C.",
        6: "Daratkan kelingking di G tinggi, lalu berjalan turun ke E dan C dengan jari 4 dan 2.",
        7: "Ibu jarimu memainkan B, lalu bergeser turun ke A. Angkat tangan sebelum kedua F.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan ketiga not setiap akor bersamaan.",
        "Mainkan bas wals saja, pada bait kedua: not rendah, akor, akor.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Kelingking meraih satu oktaf penuh di atas ibu jari. Tangan membuka, lalu menutup lagi.",
        "Setelah C yang panjang, pindahkan ibu jari naik ke G. Bait kedua dimulai satu oktaf lebih tinggi.",
        "Dalam bas wals, mainkan not rendah sedikit lebih keras daripada akor-akor sesudahnya.",
      ],
      tricky: {
        7: "Ibu jarimu memainkan B, lalu bergeser turun ke A, dan jari 4 meraih ke atas sampai F.",
        9: "Tahan C, lalu pindahkan ibu jarimu naik ke G berikutnya untuk bait kedua.",
        15: "Ibu jari bergeser lagi dari B turun ke A, kini satu oktaf lebih tinggi.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan jaga kedua not setiap pasangan not tetap bersamaan.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not teratas setiap pasangan not, jadi biarkan jari yang di atas memimpin.",
        "Bas wals melepas setiap not. Pedal menyambungkannya, jadi ganti pedal di awal setiap birama.",
      ],
      tricky: {
        12: "Pasangan not bergeser turun, lalu jari 3 dan 5 melompat naik ke B dan D.",
        15: "Setelah dua pasangan not yang rendah, raihlah D dan F tinggi dengan jari 3 dan 5.",
        17: "Turunkan tangan ke akor terakhir: ibu jari di E, jari 2 di G, dan kelingking di C.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf, lalu kembali naik ke akor.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodinya.",
        "Mainkan arpeggio tangan kiri saja, pada bait kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Dalam bas stride, lihat oktafnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Mainkan oktaf-oktaf itu sedikit terpisah, seperti lonceng, dan biarkan pedal menyambungkannya.",
        "Di setiap arpeggio, jari 3 menyeberang di atas ibu jari saat naik.",
      ],
      tricky: {
        7: "Angkat tangan setelah A, agar tangan bisa membuka ke akor dengan F di atasnya.",
        10: "Oktaf-oktafnya dimulai saat tangan kiri memainkan arpeggio pertamanya. Latih dulu setiap tangan sendiri-sendiri.",
        15: "Pertahankan posisi oktaf saat tangan melompat naik ke F, dan biarkan bas mengalir di bawahnya.",
      },
    },
  },
};
