/** The guide of *Air on the G String* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Bach menulis Air ini sebagai bagian lambat dari Suite Orkestra ketiganya. " +
    "Pada 1871, pemain biola August Wilhelmj mengaransemennya agar sebuah biola bisa memainkan seluruh melodinya pada senar terendahnya, senar G. " +
    "Film Se7en (1995) memutarnya saat dua detektif melihat-lihat foto kejahatan.",
  funFact:
    "Wilhelmj menulis “auf der G-Saite”, artinya “di senar G”, di atas bagian biola, dan dari situlah karya ini mendapat julukannya.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 4 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Melodinya melompat turun, lalu naik kembali.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not bas atau satu kuint kosong setiap kali.",
        "Gabungkan kedua tangan, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan E pertama selama satu birama penuh, dan dengarkan. Biola menyanyikan not ini dengan satu gesekan busur yang panjang.",
        "Angkat ibu jari dari C sebentar. Lalu jari 2 mendarat di B, dan tanganmu tetap di sana.",
        "Setiap not panjang mengisi satu birama penuh. Hitung delapan ketukan pelan, lalu tunggu satu ketukan lagi sebelum not berikutnya.",
      ],
      tricky: {
        3: "Angkat ibu jari dari C sebentar, lalu mainkan B dengan jari 2.",
        8: "Setelah tanda istirahat, jari 4 memainkan D. Lalu ibu jari menjangkau turun ke G.",
        9: "Tangan kiri merentang turun ke F dengan jari 5, sementara jari 2 tetap di C.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Not bas datang lebih dulu, lalu akor dua not menjawabnya.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis. Melodinya muncul dua kali.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Di bawah E yang panjang, bas bergeser turun, satu not demi satu not. Mainkan dengan lembut dan mulus.",
        "Angkat ibu jari dari C sebentar, agar jari 2 bisa mendarat di B.",
        "Tiga birama terakhir adalah buatan kami. Ketiganya membawa melodi pulang ke C mayor.",
      ],
      tricky: {
        6: "Setelah tanda istirahat, jari 5 mengambil E. Lalu jari 2 dan 1 memainkan B mol dan A.",
        14: "Gerakan yang sama dengan birama 6: jari 5 di E, lalu B mol dengan jari 2.",
        19: "Tangan kanan memainkan C dan E bersamaan. Tangan kiri merentang di atas C, E, dan G dengan jari 5, 3, dan 1.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan not sebagai satu.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut dan rata, agar not-not panjang melayang di atasnya.",
        "G di bas bergesekan dengan F kres di atasnya. Bach memang menulis gesekan ini, jadi biarkan berbunyi.",
        "Melodinya adalah not teratas setiap pasangan not, jadi biarkan jari atas yang memimpin.",
      ],
      tricky: {
        5: "Pakai tanda istirahat di akhir birama 4 untuk memindahkan tangan kiri naik ke F kres.",
        13: "Tangan kiri naik lagi setelah tanda istirahatnya. Lalu tangan kanan membuka ke sekst, C dan A.",
        14: "Mainkan setiap pasangan not sebagai satu, dan biarkan jari atas menyanyikan melodinya. Ibu jari mengambil sebagian besar not bawah.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri melompat dari setiap not bas naik ke oktafnya, lalu kembali.",
        "Mainkan akor tangan kanan saja pada birama 9 dan 10, dan biarkan jari atas bernyanyi.",
        "Mainkan paruh kedua dengan kedua tangan, pelan-pelan. Di sana melodinya satu oktaf lebih tinggi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Biarkan jari 5 di not bas yang rendah dan ibu jari di oktafnya. Jari 2 mengisi not di antaranya.",
        "G di bas bergesekan dengan F kres di atasnya. Bach memang menulis gesekan ini, jadi biarkan berbunyi.",
        "Mainkan not teratas setiap akor sedikit lebih keras dari yang lain.",
      ],
      tricky: {
        9: "Pakai tanda istirahat di awal untuk memindahkan tangan satu oktaf ke atas. Lalu ambil empat not dengan jari 1, 2, 3, dan 5.",
        16: "Setelah tanda istirahat, jari 3 dan 5 mengambil C kres dan E. Lalu ibu jari turun ke G dan naik lagi.",
        17: "Jari 5 menjangkau naik ke B tinggi. Tangan kiri memakai tanda istirahatnya untuk melompat turun ke G rendah.",
      },
    },
  },
};
