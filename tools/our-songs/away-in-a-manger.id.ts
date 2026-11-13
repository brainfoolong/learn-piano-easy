/** The guide of *Away in a Manger* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Lirik Away in a Manger berasal dari Amerika, dan tidak ada yang tahu siapa penulisnya. " +
    "Banyak melodi ditulis untuk lirik ini, dan yang ini adalah Cradle Song karya William J. Kirkpatrick, dari 1895. " +
    "Melodi inilah yang dinyanyikan di Britania Raya dan Irlandia.",
  funFact:
    "Lama sekali lirik ini disebut Luther's Cradle Hymn, padahal Martin Luther tidak pernah menulisnya.",
  versions: {
    common: {
      practice: [
        "Mainkan 5 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 9 dengan tangan kanan saja. Di sana melodinya berjalan turun ke G rendah.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jari memainkan G rendah, dan jari 2 mengambil C tengah.",
        "Dua not panjang, lalu dua not cepat yang condong ke birama berikutnya.",
        "Ibu jari menjangkau turun ke A, dan tanganmu mengikutinya turun ke G rendah.",
      ],
      tricky: {
        6: "Jari 3 memainkan F dua kali, lalu kelingking merentang naik ke G.",
        7: "Jari 4 memainkan E, jari 2 menjangkau turun ke C, lalu jari 4 kembali ke E.",
        15: "Not yang sama dengan birama 7: E dua kali dengan jari 4, lalu C dengan jari 2.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan tiga not setiap akor bersamaan.",
        "Mainkan bas wals saja: not rendah, akor, akor.",
        "Gabungkan kedua tangan pada paruh pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Untuk akor F, ibu jari pindah naik dari G ke A. Ibu jari kembali untuk akor berikutnya.",
        "Dalam bas wals, mainkan not rendah sedikit lebih keras daripada akor sesudahnya.",
        "Tahan setiap akor selama satu birama penuh, dengan lembut, seperti lagu ninabobo.",
      ],
      tricky: {
        6: "Ibu jari kiri bergeser kembali dari A ke G saat tangan kanan naik ke G.",
        7: "Jari 4 memainkan E, jari 2 menjangkau turun ke C, lalu jari 4 kembali ke E.",
        15: "Not yang sama dengan birama 7, kini di atas bas wals. Mainkan basnya dengan lembut.",
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
        "Angkat tanganmu setelah C, lalu mendaratlah di G satu oktaf lebih tinggi.",
        "Melodinya adalah not teratas setiap pasangan not, jadi biarkan jari atas yang memimpin.",
      ],
      tricky: {
        17: "Angkat tangan kanan setelah C, lalu daratkan ibu jari di G satu oktaf lebih tinggi.",
        19: "Ibu jari melepas E rendah, lalu jari 2, 3, dan 4 berjalan naik ke F.",
        32: "Rentangkan tanganmu untuk sekst, lalu rapatkan untuk terts terakhir di G dan B.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun untuk oktafnya, lalu kembali naik untuk akornya.",
        "Mainkan akor tangan kanan saja, dan biarkan jari atas menyanyikan melodinya.",
        "Mainkan arpeggio bait kedua dengan tangan kiri saja.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Dalam bas stride, lihat oktafnya dan biarkan tanganmu menemukan akornya dengan rabaan.",
        "Di bagian tinggi, oktafnya harus berdenting seperti lonceng. Biarkan pergelangan tanganmu lemas.",
        "Di setiap arpeggio, jari 3 menyeberang di atas ibu jari saat naik.",
      ],
      tricky: {
        6: "Tangan kiri melompat ke oktaf G rendah sementara tangan kanan memainkan akor B, D, dan F.",
        22: "Oktafnya memainkan F dua kali, lalu G, sementara tangan kiri naik menyusuri akor G7 dan turun kembali.",
        30: "Sama dengan birama 22. Jaga oktafnya tetap rata sementara arpeggio berlari di bawahnya.",
      },
    },
  },
};
