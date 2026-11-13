/** The guide of *Tochter Zion, freue dich* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tochter Zion, freue dich dalam bahasa Jerman berarti “Putri Sion, bersukacitalah”. " +
    "George Frideric Handel menulis lagu paduan suara See, the conqu'ring hero comes pada 1747 untuk oratorionya, Joshua. " +
    "Pada 1751, ia menambahkannya ke oratorionya yang lain, Judas Maccabaeus. " +
    "Kemudian, di Erlangen, Friedrich Heinrich Ranke menulis lirik berbahasa Jerman untuk melodi ini.",
  funFact:
    "Pada 1905, Henry Wood memakai melodi ini dalam Fantasia on British Sea Songs, karya yang sering terdengar di Last Night of the Proms.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 9 sampai 16 dengan tangan kanan saja, tempat melodi turun sejenak ke B.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama setengah birama atau lebih.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Birama 3 naik melalui D, E, F, dan G, lalu turun kembali. Mainkan keempat not yang naik itu dengan rata.",
        "Angkat tangan setelah G di birama 6. Jari 5 mendarat di F, lalu tangan turun sampai C.",
        "C terakhir di birama 13 itu pendek. Pakai tanda istirahat untuk memindahkan tangan ke atas, dengan jari 4 di A.",
      ],
      tricky: {
        7: "Jari 5 mendarat di F setelah tangan terangkat, lalu jari 4 dan 3 memainkan E dan D.",
        14: "Jari 4 memainkan A, dan jari 2 memainkan F kres, tuts hitam di antara F dan G.",
        19: "Gerakan yang sama seperti birama 7: angkat tangan setelah G, lalu daratkan jari 5 di F.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan birama 9 sampai 16 dengan tangan kanan saja. Melodi berbelok ke arah G, dengan dua F kres.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan akor lebih lembut daripada melodi, agar melodi menonjol seperti bunyi terompet.",
        "Di sini tangan kiri berganti akor di tengah birama. Hitung sampai empat, dan berganti pada “tiga”.",
        "Di birama 14, jari 2 kiri mengambil F kres, dan di birama 15 jari itu kembali ke F.",
      ],
      tricky: {
        7: "Angkat tangan setelah G, daratkan jari 5 di F, dan tekan akor G dengan tangan kiri.",
        14: "Kedua tangan memainkan F kres. Jari 2 kanan dan jari 2 kiri masing-masing mengambil tuts hitam itu.",
        19: "Gerakan yang sama seperti birama 7: angkat tangan setelah G, lalu daratkan jari 5 di F.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan akor terurai bagian terakhir saja, dan angkat tangan di setiap tanda istirahat.",
        "Gabungkan kedua tangan pada birama 1 sampai 16, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Kedua tangan terangkat di akhir birama 16. Tangan kanan melompat naik satu oktaf, dan tangan kiri turun ke C rendah.",
        "Ganti pedal di setiap ketukan, saat tangan kiri memulai kelompok empat not yang baru.",
      ],
      tricky: {
        7: "Angkat tangan setelah G, lalu daratkan jari 5 di F, sementara bas Alberti berganti ke G.",
        17: "Melodi mulai lagi satu oktaf lebih tinggi, sementara tangan kiri memulai akor terurainya di C rendah.",
        23: "Jari 5, 4, dan 3 turun ke F, E, dan D. Angkat tangan pada D terakhir untuk menjangkau akor penutup.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf rendah, lalu naik kembali ke akor.",
        "Mainkan birama 1 sampai 8 dengan tangan kanan saja, dan mainkan kelompok not yang cepat dengan ringan.",
        "Mainkan arpeggio bagian terakhir dengan tangan kiri saja.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktaf rendahnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Hiasan turn di akhir birama 4 memperindah D yang panjang. Mainkan lebih lembut daripada melodi.",
        "Jaga ibu jari dan kelingking tetap berjarak satu oktaf, dan biarkan pergelangan tangan memantul.",
      ],
      tricky: {
        3: "Melodi naik melalui D, E, F, dan G satu oktaf lebih tinggi, sementara bas stride melompat di bawahnya.",
        7: "Angkat tangan setelah G, daratkan jari 5 di F, lalu turun sementara bas stride berganti ke G.",
        11: "Tangan kiri berganti dari C ke G di tengah birama. Jaga bas stride tetap rata.",
      },
    },
  },
};
