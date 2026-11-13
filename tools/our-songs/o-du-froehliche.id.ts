/** The guide of *O du fröhliche* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O du fröhliche berarti “O, yang penuh sukacita”, dan lagu ini termasuk lagu Natal Jerman yang paling terkenal. " +
    "Johannes Daniel Falk dari Weimar menulis bait pertamanya untuk anak-anak telantar yang ia tampung di rumahnya. " +
    "Falk memakai melodi O sanctissima, lagu untuk Perawan Maria yang pertama kali dicetak di London pada 1792.",
  funFact: "Awalnya Falk menulis lagu ini untuk ketiga hari raya besar Kristen, dengan satu bait untuk Natal, satu untuk Paskah, dan satu untuk Pentakosta.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 9 sampai 16 dengan tangan kanan saja, tempat melodi naik tuts demi tuts.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu kuint, atau satu F saja.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Panjang, pendek: tahan G, lalu biarkan F yang cepat jatuh ke E.",
        "Mainkan G kedua dengan jari 2, bukan jari 3. Dengan begitu, tangan siap naik ke C.",
        "Angkat ibu jari dari F sedikit lebih awal, lalu turunkan jari 3 ke E di bawahnya.",
      ],
      tricky: {
        7: "Jari 4 dan 3 turun kembali dari B ke A. Biarkan tangan diam di atas kelima tutsnya.",
        12: "Jari 4 memainkan G, jari 5 memainkan A yang cepat, lalu jari 2 memainkan G, siap untuk C tinggi.",
        15: "Setelah F yang pendek, jari 3 mendarat di E dan jari 2 di D.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan tangan kanan saja pada seluruh lagu.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri hampir tidak bergerak. Jari 5 di C dan jari 4 di D bergantian, dan ibu jari tetap di G.",
        "Di sini frasa berhenti di G. Biarkan kedua not berbunyi sepanjang birama.",
        "Melodi turun dari C dua kali. Mainkan yang kedua sedikit lebih keras.",
      ],
      tricky: {
        6: "Tangan kanan naik ke A, B, dan C dengan jari 3, 4, dan 5, sementara tangan kiri berpindah dari F ke G.",
        12: "Jari 4 memainkan G, jari 5 memainkan A yang cepat, lalu jari 2 memainkan G, siap untuk C tinggi.",
        15: "Setelah F yang pendek, jari 3 mendarat di E dan jari 2 di D.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan jaga kedua not setiap pasangan tetap bersamaan.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Ganti pedal di setiap setengah birama, saat not bas yang baru berbunyi.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        17: "Tangan melompat naik satu oktaf. Mendaratlah di E dan G dengan jari 3 dan 5, lalu buka tangan ke sekst C dan A.",
        22: "Jari 2 dan 4 memainkan F dan A, tangan terbuka ke sekst D dan B, dan jari 5 menjangkau C.",
        32: "Angkat tangan saat tanda istirahat pendek, lalu bentangkan di atas E, G, dan C untuk akor terakhir.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktaf, lalu kembali ke atas untuk akornya.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodinya.",
        "Mainkan arpeggio tangan kiri saja, pada bait kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktafnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Oktafnya harus berdenting seperti lonceng gereja. Jaga pergelangan tetap lemas.",
        "Di setiap arpeggio, jari 3 menyeberang di atas ibu jari saat naik.",
      ],
      tricky: {
        6: "Akor naik dari F ke G, dan kelingking naik dari B ke C tinggi.",
        8: "Akor berhenti di G. Ibu jari turun ke B, dan kelingking turun dari A ke G.",
        14: "Lepaskan A sedikit lebih awal, agar tangan punya waktu untuk turun ke akor G.",
      },
    },
  },
};
