/** The guide of *Deck the Halls* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Deck the Halls dinyanyikan dengan melodi Nos Galan, sebuah lagu lama dari Wales untuk malam Tahun Baru. " +
    "Melodi ini pertama kali dicetak pada 1794, dan kemudian Joseph Haydn mengaransemennya. " +
    "Thomas Oliphant menulis lirik Natal berbahasa Inggris pada 1862, dan melodinya dinyanyikan dengan lirik itu sampai sekarang.",
  funFact:
    "Lirik Oliphant dimulai dengan Deck the hall, untuk satu aula saja. Buku-buku lagu sesudahnya mengubahnya menjadi bentuk jamak yang kita nyanyikan sekarang.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 9 sampai 12 dengan tangan kanan saja. Di sini melodinya naik ke C tinggi.",
        "Gabungkan kedua tangan. Tangan kiri menahan setiap not rendah selama setengah birama atau lebih.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Panjang, pendek: G pertama panjang, lalu F pendek dan langsung menyusul.",
        "Birama 13 dan 14 mengulang bagian pembuka, jadi tanganmu sudah mengenalnya.",
        "Perlambat sedikit pada not-not terakhir, dan biarkan C rendah terus berbunyi.",
      ],
      tricky: {
        3: "Jari 3, 4, dan 5 berjalan naik di D, E, dan F, lalu jari 3 kembali turun ke D.",
        9: "Jari 5 memainkan F, lalu ibu jari meraih ke bawah ke D, sementara tanganmu tetap diam.",
        11: "Ibu jari bergeser naik dari D ke E. Lalu jari 2 sampai 5 naik di G, A, B, dan C tinggi.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja: satu not rendah, lalu satu akor, di setiap birama.",
        "Mainkan birama 17 sampai 24 dengan tangan kanan saja. Di sini melodinya naik ke C tinggi.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "F kres adalah tuts hitam di antara F dan G. Not ini mengangkat melodi menuju C tinggi.",
        "Mainkan not rendah tangan kiri sedikit lebih keras dari akor sesudahnya.",
        "Empat A yang cepat: mainkan dengan rata, seperti empat langkah di anak tangga yang sama.",
      ],
      tricky: {
        21: "Ibu jari bergeser naik dari D ke E, dan jari 2 mengambil F kres di tuts hitam.",
        22: "Setelah G, jari 3 bergeser naik satu tuts ke A, sehingga jari 4 dan 5 bisa meraih B dan C.",
        32: "Ibu jari bergeser turun dari D ke C terakhir, sementara tangan kiri memainkan akornya yang penuh.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts tangan kanan saja, dan jaga kedua not setiap pasangan not tetap bersamaan.",
        "Gabungkan kedua tangan pada 4 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not atas dari setiap pasangan not, jadi biarkan jari yang di atas memimpin.",
        "Ganti pedal di tengah setiap birama, saat tangan kiri memulai akor baru.",
      ],
      tricky: {
        11: "Setelah G, ibu jari menyusup di bawah jari 3 ke A. Lalu jari 2 dan 3 menyelesaikannya di B dan C.",
        12: "Dari A, ibu jari turun ke D, sementara jari 4 mendarat di G di atasnya.",
        16: "Ibu jari meraih ke bawah ke G untuk akor terakhir, dan tangan kiri turun ke oktaf rendah.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun untuk oktaf rendah, lalu naik lagi untuk akornya.",
        "Mainkan tangan kanan saja pada birama 1 sampai 4, dan mainkan isian cepatnya dengan ringan.",
        "Mainkan rentetan not cepat di birama 11 dan 12 dengan tangan kanan saja.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Dalam bas stride, lihat oktaf rendahnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Mainkan isian cepat lebih lembut dari not melodi, seperti gema kecil.",
        "Angkat tanganmu setelah D terakhir, lalu mendarat di akor besar dengan kedua tangan.",
      ],
      tricky: {
        4: "Jari 2 bergeser turun dari D ke C, dan ibu jari menyusup untuk B. Tangan kiri melompat ke G rendah.",
        5: "Isian di birama 4 langsung mengalir ke G tinggi, jadi siapkan jari 5 untuknya.",
        8: "Jari 2 bergeser turun ke C lagi, sementara tangan kiri melompat ke oktaf G rendah.",
      },
    },
  },
};
