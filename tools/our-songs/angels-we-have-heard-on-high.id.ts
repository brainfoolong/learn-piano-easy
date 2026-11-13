/** The guide of *Angels We Have Heard on High* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Angels We Have Heard on High adalah lagu Natal tradisional dari Prancis. Dalam bahasa Prancis judulnya Les Anges dans nos campagnes, yang berarti “Para malaikat di pedesaan kami”. " +
    "Cetakan tertua yang diketahui, lengkap dengan lirik dan notnya, berasal dari 1842, dalam sebuah kumpulan karya Louis Lambillotte. " +
    "Lirik bahasa Inggrisnya adalah saduran dari 1862 karya James Chadwick, Uskup Katolik Roma Hexham dan Newcastle.",
  funFact:
    "Dalam refrein Gloria in excelsis Deo, huruf o pada Gloria ditahan selama rentetan panjang not cepat yang naik dan turun.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan bagian Gloria, birama 5 sampai 7, dengan tangan kanan saja. Biarkan not-not cepatnya naik dan turun dengan rata.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap setengah birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan jari 3 di E. Ibu jari berada di C tengah, dan jari 5 di G.",
        "Setiap not panjang diikuti empat not cepat. Hitung keempatnya: satu, dua, tiga, empat.",
        "Biarkan C terakhir berbunyi selama satu birama penuh, lalu angkat kedua tangan bersamaan.",
      ],
      tricky: {
        6: "Jari 2 memainkan D, lalu ibu jari merentang turun ke G rendah. Tanganmu tetap di tempatnya.",
        7: "Dari G rendah, jari 2 sampai 5 naik ke C, D, E, dan F, satu tuts untuk setiap jari.",
        10: "Tanjakan yang sama dengan birama 7: jari 2 sampai 5 di C, D, E, dan F.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan bagian Gloria, birama 5 sampai 7, dengan tangan kanan saja. Jaga not-not cepatnya tetap rata.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri tidak bergerak: jari 5 di C, jari 4 di D, jari 3 di E, jari 2 di F, dan ibu jari di G.",
        "Tangan kanan beristirahat sementara tangan kiri memainkan akor G7. Akor itu membawamu kembali ke awal.",
        "Pada putaran kedua, mainkan not rendah sedikit lebih keras daripada akor sesudahnya.",
      ],
      tricky: {
        6: "Jari 2 memainkan D, lalu ibu jari merentang turun ke G rendah, sementara tangan kiri menahan D dan F.",
        9: "Not yang sama dengan birama 6. Biarkan tangan kanan diam, dan biarkan ibu jari menjangkau ke bawah.",
        17: "Birama 6 sekali lagi, kini pada putaran kedua. Mainkan akornya dengan lembut di bawah melodi.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan akor terurai tangan kiri saja, pada putaran kedua.",
        "Mainkan bagian Gloria yang tinggi, birama 16 sampai 18, dengan tangan kanan saja.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Angkat tanganmu setelah G, A, dan B, lalu daratkan jari 3 di E satu oktaf lebih tinggi.",
        "Ganti pedal setiap kali tangan kiri memulai akor baru.",
      ],
      tricky: {
        17: "Jari 2 memainkan D tinggi, dan ibu jari merentang turun ke G sementara tangan kiri naik.",
        19: "Kini bagian Gloria berada di nada tinggi. Biarkan jari 5, 4, 3, dan 2 bergulir turun dari A ke E.",
        20: "Ibu jari mengambil C, lalu jari 2 mendarat di D. Jaga akor terurai di bawahnya tetap rata.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun untuk oktaf rendah, lalu kembali naik untuk akornya.",
        "Mainkan oktaf tangan kanan saja, dan biarkan jari 5 menyanyikan melodinya.",
        "Mainkan bas oktaf terurai tangan kiri saja, pada putaran kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Dalam bas stride, lihat oktaf rendahnya dan biarkan tanganmu menemukan akornya dengan rabaan.",
        "Setelah setiap oktaf, jari 5 tetap di atas dan memimpin not-not cepat turun.",
        "Rentetan not cepat menuju G itu seperti fanfare kecil. Mainkan dengan ringan dan cerah.",
      ],
      tricky: {
        2: "Angkat tanganmu dari setiap not tunggal sebelum oktaf berikutnya, agar tanganmu mendarat tanpa merentang.",
        3: "Pembukaannya lagi. Jaga oktafnya tetap rata sementara tangan kiri melompat.",
        11: "Empat not cepat berlari dari C naik ke F, dan jari 5 mendarat di G. Bas stride terus berjalan di bawahnya.",
      },
    },
  },
};
