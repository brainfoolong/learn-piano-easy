/** The guide of *Jingle Bells* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "James Lord Pierpont menerbitkan lagu ini di Boston pada 1857, dengan judul One Horse Open Sleigh. " +
    "Lagu ini bercerita tentang perjalanan cepat menembus salju dengan kereta salju yang ditarik seekor kuda. " +
    "Lagu ini tidak pernah menyebut Natal, tetapi menjadi salah satu lagu Natal paling terkenal di dunia.",
  funFact: "Pada 1965, dua astronaut memainkan Jingle Bells di luar angkasa, dengan harmonika kecil dan segenggam lonceng.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, tempat melodi naik ke F.",
        "Gabungkan kedua tangan. Tangan kiri menahan satu not rendah atau satu kuint di setiap birama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Pendek, pendek, panjang: E ketiga berlangsung dua ketukan, seperti dentingan lonceng.",
        "Di sini setiap jari punya tutsnya sendiri: ibu jari di C, kelingking di G.",
        "Perlambat sedikit pada not-not terakhir, dan biarkan C rendah berbunyi.",
      ],
      tricky: {
        5: "Jari 4 memainkan F tiga kali, sementara kelingking kiri meraih ke bawah ke F rendah.",
        13: "F-nya kembali. Biarkan jari 4 di F, dan turunkan lagi kelingking kiri ke F rendah.",
        15: "Jari 5 memainkan G dua kali, lalu jari 4 dan 2 turun, siap untuk C terakhir dengan ibu jari.",
      },
    },
    rare: {
      practice: [
        "Tepukkan ritme birama 3, lalu mainkan tangan kanan saja.",
        "Mainkan tangan kiri saja, dan tahan setiap akor sampai akor berikutnya.",
        "Gabungkan kedua tangan pada birama 5 sampai 8, tempat not-not cepatnya berada.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Panjang, pendek: C berlangsung satu setengah ketukan, dan D datang cepat sesudahnya.",
        "Dua E terakhir adalah not seperdelapan. Bayangkan satu ketukan yang dibagi dua.",
        "Mainkan not bas tangan kiri sedikit lebih keras daripada akor sesudahnya.",
      ],
      tricky: {
        5: "Empat F dengan jari 4: F terakhir cepat, jadi langsung menyambung ke birama 6.",
        9: "Kelingking kirimu bergeser naik kembali dari B ke C, saat melodi dimulai lagi.",
        13: "F-nya kembali. Biarkan jari 4 memantul di F, dan hitung F terakhir yang pendek.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan jaga kedua not setiap pasangan tetap bersamaan.",
        "Gabungkan kedua tangan pada 4 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar lonceng-lonceng melodi berdenting di atasnya.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
        "Ganti pedal di awal dan di tengah setiap birama, saat tangan kiri memulai lagi polanya.",
      ],
      tricky: {
        12: "Setelah terts itu, tanganmu turun ke G, F, E, dan D dengan jari 5, 4, 3, dan 2.",
        14: "Pada ketukan 2, sekst berubah menjadi terts: ibu jari meninggalkan A, dan jari 2 dan 4 memainkan C dan E.",
        16: "Angkat kedua tangan setelah D, lalu mendaratlah di akor terakhir dengan tangan kiri memainkan oktaf.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk not bas, lalu kembali ke atas untuk akornya.",
        "Mainkan akor tangan kanan saja, dan biarkan kelingking menyanyikan melodinya.",
        "Mainkan rentetan not seperenambelas di birama 9 sampai 12 dengan tangan kanan saja.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat not basnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada not lainnya.",
        "Setiap rentetan muat dalam satu ketukan: empat not cepat, lalu loncengnya berdenting lagi.",
      ],
      tricky: {
        6: "Pada ketukan 2, ibu jari dan kelingking turun satu tuts, sementara jari 2 tetap di C.",
        7: "Melodi turun sebentar dari E ke D, di atas G dan B yang ditahan. Jari 4 memainkan D.",
        8: "Rentangkan tanganmu untuk empat not sekaligus: G, B, F, dan G. Biarkan kelingking bernyanyi.",
      },
    },
  },
};
