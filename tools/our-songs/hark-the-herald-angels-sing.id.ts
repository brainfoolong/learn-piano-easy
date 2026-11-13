/** The guide of *Hark! The Herald Angels Sing* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Felix Mendelssohn menulis melodi ini pada 1840 untuk sebuah festival di Leipzig. " +
    "Festival itu merayakan empat ratus tahun percetakan dengan huruf lepas. " +
    "Pada 1855, William H. Cummings memasangkan melodi ini dengan lirik Natal yang ditulis Charles Wesley pada 1739.",
  funFact:
    "Melodi ini pertama kali dinyanyikan oleh paduan suara pria bersama dua orkes tiup logam, di alun-alun pasar Leipzig, pada 24 Juni 1840.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 2 birama pertama. Ibu jari mulai di G.",
        "Mainkan tangan kanan saja pada birama 1 sampai 8. Tanganmu tidak perlu berpindah.",
        "Mainkan tangan kanan saja pada birama 13 sampai 20, tempat melodi naik sampai A tinggi.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Panjang, pendek: C kedua tiga kali panjangnya B sesudahnya.",
        "Mainkan B di birama 7 dengan jari 2, dan B di birama 8 dengan jari 3. Lalu jari 2 dan 1 memainkan A dan G.",
        "Birama 11 dan 12 mengulang birama 9 dan 10. Saat mengulang, mainkan sedikit lebih keras.",
      ],
      tricky: {
        3: "Jari 3 memainkan D, lalu kelingking meraih ke atas ke G. Biarkan tanganmu diam dan terbuka.",
        7: "Kelingking memainkan G. Lalu jari 3 turun ke D, dan jari 2 ke B.",
        13: "Jari 2 memainkan D, lalu kelingking merentang ke atas ke A tinggi.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Tangan kiri menahan satu akor di setiap setengah birama.",
        "Gabungkan kedua tangan pada birama 13 sampai 20, tempat tangan kanan memainkan dua not sekaligus.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan akor tangan kiri dengan lembut, agar melodi terdengar jelas di atasnya.",
        "Tekan D dan F bersamaan dengan ibu jari dan jari 3. F adalah melodinya, jadi biarkan F bernyanyi.",
        "Panjang, pendek, lalu rata: A pertama tiga kali panjangnya A kedua.",
      ],
      tricky: {
        3: "Jari 3 memainkan D, lalu kelingking meraih ke atas ke G. Biarkan tanganmu diam dan terbuka.",
        7: "Kelingking memainkan G. Lalu jari 3 turun ke D, dan jari 2 ke B.",
        13: "Jari 2 memainkan D, lalu kelingking merentang ke atas ke A tinggi.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan tangan kanan saja pada birama 8 dan 9. Ibu jari menyusup di bawah jari 3 ke C.",
        "Mainkan terts tangan kanan saja pada birama 9 sampai 12, dan tekan kedua not seperti satu not.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not teratas setiap terts, jadi biarkan jari yang di atas memimpin.",
        "Ganti pedal di awal dan di tengah setiap birama, saat tangan kiri memulai lagi polanya.",
      ],
      tricky: {
        8: "Setelah G rendah, jari 2 dan 3 naik ke A dan B. Lalu ibu jari menyusup ke C.",
        18: "Tertsnya turun lalu naik lagi: jari 2 dan 4, lalu ibu jari dan 3, lalu 2 dan 4 lagi.",
        20: "Jari 2 memainkan C dan jari 3 memainkan D. Lalu ibu jari meraih ke bawah ke E, di bawah C terakhir.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktaf rendah, lalu kembali ke atas untuk akornya.",
        "Mainkan akor tangan kanan saja. Angkat tangan setelah setiap akor, dan biarkan jari teratas bernyanyi.",
        "Mainkan oktaf tangan kanan saja pada birama 9 sampai 20. Biarkan tanganmu terbuka dan ringan.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktaf rendahnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Setiap akor pendek, dan pedal menyambungkannya. Ganti pedal di awal dan di tengah setiap birama.",
        "Pada oktaf, mainkan kelingking sedikit lebih keras, agar melodi bersinar di atas.",
      ],
      tricky: {
        2: "Dari akor C yang besar, tangan melompat ke atas ke G, C, dan E. Angkat tangan dulu pada tanda istirahat yang pendek.",
        6: "Birama 6 sama dengan birama 2. Angkat tangan pada tanda istirahat, lalu lompat ke atas ke G, C, dan E.",
        7: "Tangan turun dari akor G tinggi ke G, B, dan D. Ibu jari bergeser dari B turun ke G.",
      },
    },
  },
};
