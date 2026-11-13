/** The guide of *Boléro* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Ravel menulis Boléro untuk orkestra pada tahun 1928, dan Durand pertama kali menerbitkannya pada tahun 1929. " +
    "Dua melodi bergantian di atas satu ritme snare drum, yang tumbuh dari lembut menjadi keras. " +
    "Film 10 (1979) menampilkannya dengan menonjol, dan penjualannya pun melonjak.",
  funFact:
    "Ravel pertama kali memainkan melodinya dengan satu jari untuk temannya, Gustave Samazeuilh. " +
    "Lalu ia bertanya apakah melodi itu terdengar terus mendesak.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Melodi turun perlahan sampai C.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not atau satu kuint selama satu birama penuh.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan dengan lembut dan rata, seperti suling di kejauhan. Usahakan keras-lembut melodi hampir tidak berubah.",
        "Mainkan C yang panjang dengan jari 5. Lalu jari 2 bisa turun menjangkau E tanpa memindahkan tangan.",
        "Mainkan E lagi dengan jari 3 di awal birama 6. Dengan begitu ibu jari sudah siap untuk C.",
      ],
      tricky: {
        2: "Jari 2 memainkan A, lalu jari 5 memainkan C yang panjang. Setelah itu jari 4 dan 5 memainkan B dan C.",
        9: "Pakai tanda istirahat pendek untuk memindahkan tangan kiri turun ke F dan C. Tangan kanan mulai di F dengan jari 4.",
        12: "Pindahkan ibu jari kanan dari D turun ke C. Setelah tanda istirahatnya, tangan kiri mendarat di C dan G.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: nada akar, kuint, lalu keduanya, satu di setiap ketukan.",
        "Mainkan birama 5 dan 6 dengan tangan kanan saja. Ibu jari bergeser turun dua kali.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Hitung tiga ketukan lambat di setiap birama. Tangan kiri bermain sekali di setiap ketukan, seperti drum yang lembut.",
        "Setelah E, ibu jari bergeser turun ke D. Di birama berikutnya, ibu jari bergeser turun lagi ke C.",
        "Tekan C dan E bersamaan, dan biarkan keduanya berbunyi sampai akhir.",
      ],
      tricky: {
        5: "Setelah G yang panjang, jari 4 dan 5 naik ke B. Di akhir, ibu jari memainkan E, lalu bergeser turun ke D.",
        6: "Jari 2 memainkan E, dan ibu jari memainkan D. Lalu ibu jari bergeser turun ke C dan tetap di sana.",
        9: "Pakai tanda istirahat pendek untuk memindahkan tangan kiri turun ke F. Tangan kanan mulai di F dengan jari 4.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja. Satu not panjang datang lebih dulu, lalu tiga not cepat, seperti snare drum.",
        "Mainkan tangan kanan saja pada birama 9 sampai 16. Susupkan ibu jari dalam rentetan not cepat.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal pada birama 9 sampai 16.",
      ],
      tips: [
        "Ketiga not cepat itu muat dalam waktu dua not melodi. Mainkan dengan ringan dan rata.",
        "Susupkan ibu jari ke F, lalu naik dengan jari 2 sampai 5 hingga C.",
        "Melodi kembali dengan lebih penuh. Biarkan not teratasnya bernyanyi di atas not yang lebih rendah.",
      ],
      tricky: {
        6: "Ibu jari bergeser turun dari D ke C, sementara tangan kiri terus memainkan ritme drum.",
        9: "Tangan kiri memulai bas Alberti di F. Mainkan F dan A tangan kanan bersamaan dengan jari 1 dan 3.",
        17: "Mainkan E dan C bersamaan dengan jari 1 dan 4. Tangan kiri kembali memainkan ritme drum.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja pada 2 birama pertama. Daratkan setiap oktaf dengan mantap, lalu mainkan not cepatnya dengan ringan.",
        "Mainkan rentetan not cepat di birama 11 dan 12 dengan tangan kanan saja, sangat pelan.",
        "Mainkan oktaf tangan kanan saja pada birama 17 sampai 24. Jaga tangan tetap terbuka, dengan ibu jari dan kelingking siap.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan buat makin keras sampai akor terakhir.",
      ],
      tips: [
        "Dalam bas stride, pakai setiap tanda istirahat pendek untuk melompat di antara oktaf rendah dan akor.",
        "Ibu jari menyusup ke D, dan jari 3 menyeberang kembali ke C. Jaga pergelangan tangan tetap datar.",
        "Mulai oktafnya dengan lembut lalu makin keras, seperti seluruh orkestra dalam karya ini.",
      ],
      tricky: {
        9: "Tangan kiri melompat dari oktaf F rendah naik ke akor. Pakai setiap tanda istirahat pendek untuk melompat.",
        15: "Susupkan ibu jari ke G dan naik sampai D. Tangan kiri melompat di antara G dan akornya.",
        17: "Oktaf dimulai. Buka tangan dengan ibu jari di C dan kelingking di C satu oktaf di atasnya.",
      },
    },
  },
};
