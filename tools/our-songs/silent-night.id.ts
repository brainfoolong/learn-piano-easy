/** The guide of *Silent Night* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Franz Xaver Gruber menulis melodi ini untuk malam Natal tahun 1818, di Oberndorf dekat Salzburg. " +
    "Pastor muda Joseph Mohr sudah menulis liriknya, lalu Gruber menggubahnya menjadi lagu. " +
    "Mohr bermain gitar pada pertunjukan pertamanya, dan lagu ini kemudian menyebar jauh melampaui Austria.",
  funFact: "Pada 2011, Komisi Nasional UNESCO Austria memasukkan Silent Night ke daftar warisan budaya takbenda Austria.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 17 sampai 23 dengan tangan kanan saja, tempat melodi naik tinggi lalu berjalan turun ke C tengah.",
        "Gabungkan kedua tangan. Tangan kiri menahan satu not rendah atau satu kuint di setiap birama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "G pertama panjang dan A pendek. Melodinya berayun seperti buaian.",
        "Angkat tanganmu saat tanda istirahat pendek setelah E, lalu jangkau naik ke D tinggi.",
        "Mainkan dengan lembut dari awal sampai akhir. Lagu ini lagu ninabobo.",
      ],
      tricky: {
        6: "Jari 4 mengambil B setelah kedua D. Di bawah, tangan kiri menahan G dengan jari 4.",
        17: "Setelah tanda istirahat, tangan merentang naik dari E, dan jari 3 mendarat di D tinggi.",
        21: "Jari 5 turun dari E ke C. Lalu melodi berjalan turun sampai ibu jari di C tengah.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah, lalu dua akor lembut, seperti wals yang pelan.",
        "Mainkan birama 17 sampai 23 dengan tangan kanan saja, tempat melodi naik tinggi lalu berjalan turun ke C tengah.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan akor tangan kiri lebih lembut daripada not rendahnya.",
        "Ganti pedal di setiap garis birama. Lepaskan pedal saat not bas yang baru berbunyi.",
        "Jari 3 dan 5 mengambil C dan E bersamaan. Biarkan E bernyanyi di atas C.",
      ],
      tricky: {
        17: "Tangan kanan merentang naik dari E, dan jari 3 mendarat di D tinggi.",
        21: "Jari 5 turun dari E ke C. Lalu melodi berjalan turun ke G dan E.",
        22: "Jari 4, 3, dan 2 berjalan turun ke G, F, dan D, sementara tangan kiri memainkan akor G7.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan rentetan not di birama 4 dengan tangan kanan saja, dan biarkan ibu jari menyusup ke A.",
        "Mainkan pasangan not dan akor di birama 13 sampai 20 dengan tangan kanan saja.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Jari 1, 2, dan 3 memainkan E, F, dan G. Lalu ibu jari menyusup ke A.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        4: "Rentetan not naik dari F ke C. Biarkan ibu jari menyusup di bawah jari 3 untuk mengambil A.",
        16: "Rentetan yang sama dengan birama 4, mulai dari terts C dan E. Biarkan ibu jari menyusup ke A.",
        21: "Tangan turun dari akor ke C dengan jari 5, lalu berjalan turun ke G dan E.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf, lalu naik kembali ke akor.",
        "Mainkan akor tangan kanan saja, dan biarkan kelingking menyanyikan melodi.",
        "Mainkan oktaf terurai di birama 13 sampai 16 dengan tangan kiri saja.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Saat bermain stride, lihat not basnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada yang lain.",
        "Biarkan oktaf terurai mengalun lembut di bawah melodi, seperti buaian yang berayun.",
      ],
      tricky: {
        5: "Setelah rentetan not, mendaratlah di G, B, dan D dengan jari 1, 3, dan 5.",
        9: "Tangan terbuka ke C, F, dan A, dan kelingking menyanyikan melodi.",
        10: "Jari 4 sendirian mengambil B di antara akor-akor. Jaga ibu jari tetap dekat F.",
      },
    },
  },
};
