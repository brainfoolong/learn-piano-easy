/** The guide of *Gymnopédie No. 1* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Erik Satie menyelesaikan ketiga Gymnopédie-nya pada tahun 1888, dan yang pertama diterbitkan di sebuah majalah pada musim panas itu. " +
    "Karya ini diberi tanda “Lent et douloureux”, yang berarti lambat dan penuh duka. " +
    "Film The Royal Tenenbaums (2001) memakai karya ini.",
  funFact: "Claude Debussy, sahabat Satie, kemudian mengaransemen Gymnopédie pertama dan ketiga untuk orkestra.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri menahan satu kuint kosong di setiap birama.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 5 sampai 8, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan kuint-kuint itu dengan lembut, dan biarkan berbunyi panjang. Kuint itu berayun seperti perahu yang pelan.",
        "Angkat ibu jari dari B sedikit lebih awal. Dengan begitu ibu jari turun ke A tepat waktu.",
        "Pelankan sedikit di akhir lagu, dan biarkan C terakhir memudar.",
      ],
      tricky: {
        7: "Ibu jarimu berpindah dari B turun ke A. Lalu jari 2 dan 3 naik ke B dan C.",
        11: "Seperti di birama 7, ibu jari turun ke A setelah tanda istirahat yang pendek.",
        12: "Tahan D dengan jari 4 selama dua ketukan. Pada saat yang sama, tangan kirimu turun ke G rendah.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Satu not rendah datang pada ketukan 1, dan dua not bersamaan pada ketukan 2.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 5 sampai 8, pelan-pelan, dengan pedal.",
        "Mainkan bagian akhirnya, tempat melodi menemukan jalan pulang ke C.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Injak pedal selama satu birama penuh, lalu ganti tepat di garis birama.",
        "Ibu jari memainkan B, lalu bergeser turun ke A. Biarkan jari-jari lainnya lemas.",
        "Biarkan dua birama terakhir berbunyi lembut, seperti akhir sebuah lagu ninabobo.",
      ],
      tricky: {
        7: "Ibu jarimu bergeser dari B turun ke A. Jaga tangan tetap dekat dengan tuts.",
        11: "Geser yang sama seperti di birama 7. Ibu jari berpindah dari B turun ke A.",
        15: "Tangan kirimu turun ke C rendah. Pakai tanda istirahat di akhir birama 14.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja. Lompat dari not rendah naik ke akor, saat tanda istirahat yang pendek.",
        "Mainkan birama 5 sampai 8 dengan kedua tangan, pelan-pelan.",
        "Mainkan sekst tangan kanan saja, dan tekan kedua not setiap pasangan not seperti satu not.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Pedal menahan not rendah selama tanganmu melompat naik ke akor.",
        "C kres bergesekan dengan D di tangan kiri. Gesekan lembut itulah warna bunyi yang disukai Satie.",
        "Ibu jari memainkan not bawah setiap sekst. Jari 4 atau 5 membawa melodi di atasnya.",
      ],
      tricky: {
        6: "Ibu jarimu meraih turun ke C kres, saat jari 3 melepaskan F kres.",
        10: "Sekst-sekst itu bergeser turun, lalu melompat turun ke E dan C kres. Jaga jari 1 dan 4 dalam rentangan yang sama.",
        12: "Tahan F kres dan A selama satu birama penuh. Lalu naik ke G dan E untuk birama berikutnya.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja. Lompat dari oktaf rendah naik ke akor, saat tanda istirahat yang pendek.",
        "Mainkan birama 5 sampai 8 dengan kedua tangan, pelan-pelan.",
        "Mainkan akor tangan kanan saja, dan angkat tangan di antara akor-akornya.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Lihat akor berikutnya selama pedal menahan oktaf rendah. Matamu menuntun tangan.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada not lainnya.",
        "Not-not pertama melodi kembali sendirian. Mainkan dengan lembut, seperti sebuah kenangan.",
      ],
      tricky: {
        9: "Angkat tangan setelah setiap akor, dan pertahankan posisinya saat tangan naik.",
        11: "Tiga akor naik, setiap kali bergeser ke tuts sebelahnya. Jaga jari 1, 2, dan 4 dalam posisi yang sama.",
        15: "Melodi kembali sendirian. Jari 3 memainkan F kres, dan jari 5 memainkan A.",
      },
    },
  },
};
