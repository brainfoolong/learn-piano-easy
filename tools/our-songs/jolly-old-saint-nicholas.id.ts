/** The guide of *Jolly Old Saint Nicholas* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Jolly Old Saint Nicholas adalah lagu Natal yang berawal dari sebuah puisi karya Emily Huntington Miller. " +
    "Puisinya terbit dengan judul Lilly's Secret di majalah The Little Corporal pada Desember 1865. " +
    "Musiknya umumnya diyakini karya James R. Murray. " +
    "Lagu ini pertama kali dicetak pada 1874, dalam buku musik sekolah berjudul School Chimes.",
  funFact: "Dirigen Ray Conniff merekam lagu ini pada 1962, untuk albumnya We Wish You a Merry Christmas.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, tempat melodi turun ke A lalu naik kembali.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Empat not yang rata pada satu tuts. Mainkan dengan ringan, seperti langkah kaki di atas atap.",
        "Jari 2 memainkan A di birama 5 dan B di birama 7. Bagian tanganmu yang lain tidak pernah bergerak.",
        "Tahan C terakhir selama empat ketukan penuh, lalu angkat kedua tangan bersamaan.",
      ],
      tricky: {
        2: "Jari 5 meninggalkan E, dan jari 4 memainkan D tiga kali. Tahan D terakhir selama dua ketukan.",
        10: "Sama seperti birama 2. Tangan kiri berpindah ke D dan G di bawahnya.",
        15: "Jari 4, 3, 4, dan 5 memainkan D, C, D, dan E. Lalu jari 3 turun ke C terakhir.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan tangan kiri saja, pada putaran kedua: satu not bas, lalu akornya.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan setiap akor dengan lembut, agar not-not melodi yang berulang tetap jelas di atasnya.",
        "Tangan kiri melepas F di tengah birama. Tangan kanan naik ke E di atasnya.",
        "Not bas jatuh pada ketukan 1 dan akornya pada ketukan 3. Hitung sampai empat di setiap birama.",
      ],
      tricky: {
        2: "Jari 4 memainkan D tiga kali, sementara tangan kiri menahan akor G7 tanpa B.",
        10: "Sama seperti birama 2. Mainkan D yang berulang dengan rata dan ringan.",
        15: "Jari 4, 3, 4, dan 5 memainkan D, C, D, dan E. Di tengah birama, tangan kiri melepas F.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan akor terurai saja, pada putaran kedua, dan angkat tanganmu di setiap tanda istirahat.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi berdenting di atasnya seperti lonceng kereta salju.",
        "Kedua tangan terangkat pada tanda istirahat. Tangan kanan melompat naik satu oktaf, dan tangan kiri turun ke C rendah.",
        "Ganti pedal di setiap setengah birama, saat tangan kiri memulai lagi polanya.",
      ],
      tricky: {
        17: "Tangan kanan mendarat satu oktaf lebih tinggi di E, dan tangan kiri memulai akor terurainya di C rendah.",
        19: "Jari 3 memainkan C tinggi empat kali, sementara tangan kiri terangkat pada tanda istirahat dan mendarat lagi di C.",
        25: "Sama seperti birama 17, kini setelah D yang panjang. Daratkan jari 5 di E tinggi.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktaf rendah, lalu kembali ke atas untuk akornya.",
        "Mainkan tangan kanan saja pada birama 4 dan 5, dan mainkan rentetan not cepatnya dengan ringan.",
        "Mainkan arpeggio tangan kiri saja, pada putaran kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktaf rendahnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Rentetan not cepat setelah E yang panjang meluncur turun seperti Sinterklas masuk lewat cerobong asap. Mainkan lebih ringan daripada melodinya.",
        "Jaga ibu jari dan kelingking terentang satu oktaf, dan biarkan pergelangan tanganmu memantul.",
      ],
      tricky: {
        21: "Setelah tangan terangkat sebentar, oktafnya turun dari E ke A. Jaga tanganmu dalam posisi oktaf selama berpindah.",
        29: "Turun ke A yang sama seperti di birama 21, sementara tangan kiri menaiki arpeggio F di bawahnya.",
        31: "Oktafnya melangkah ke D, C, D, dan E. Lalu tanganmu terangkat dan mendarat di akor empat not.",
      },
    },
  },
};
