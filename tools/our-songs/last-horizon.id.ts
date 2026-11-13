/** The guide of *Last Horizon* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Last Horizon adalah melodi buatan kami sendiri, dengan gaya musik film modern. " +
    "Sebuah pola lambat berulang di bawah akor-akor yang ditahan panjang, seperti akhir sebuah perjalanan jauh.",
  funFact: "Pola yang terus berulang di bawah melodi disebut ostinato, dari kata Italia yang berarti “keras kepala”.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 4 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Jari 5 naik satu tuts ke B mol.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not rendah atau satu kuint selama satu birama penuh.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan jari 4 di A. Ibu jari menunggu di atas D, dan jari 5 di atas B mol.",
        "Hitung empat ketukan lambat di setiap birama. Tangan kiri menahan setiap not sampai birama berakhir.",
        "Mainkan dengan lembut dan rata, seperti musik di akhir sebuah film panjang.",
      ],
      tricky: {
        4: "Tahan A dengan jari 5 selama empat ketukan. Tangan kiri memainkan F dan C bersamaan dengan jari 5 dan 2.",
        5: "Jari 5 naik satu tuts ke B mol. Lalu jari 4 dan 3 turun ke A dan G.",
        15: "Empat not yang rata turun dari F ke C kres. Ibu jari memainkan C kres, lalu jari 2 memainkan D.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah, lalu kuint di atasnya, berulang-ulang.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri memainkan dua not yang sama di setiap ketukan, rendah lalu tinggi. Mainkan dengan mantap dan tenang.",
        "Lepaskan G terakhir di birama 3 sedikit lebih awal. Dengan begitu tangan kiri punya waktu untuk turun ke F.",
        "Tekan C kres dan E bersamaan dengan ibu jari dan jari 3.",
      ],
      tricky: {
        5: "Jari 5 naik satu tuts ke B mol. Tangan kiri berayun di antara G dan D.",
        6: "Jari 3 turun dari G ke F. Lalu jari 2 dan 1 memainkan E dan D.",
        16: "Akhiri dengan D dan F bersamaan, dengan jari 2 dan 4. Tangan kiri menahan D dan A di bawahnya.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai akor terurainya mengalir dengan sendirinya.",
        "Mainkan birama 9 sampai 12 dengan tangan kanan saja, dan biarkan ibu jari menyusup saat naik.",
        "Mainkan akor tangan kanan saja pada birama 17 sampai 24, dan biarkan not atas bernyanyi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di awal setiap birama, tempat akornya berganti.",
        "Mainkan tangan kiri dengan lembut. Polanya berulang seperti mesin yang tenang di bawah melodi.",
        "Setelah E mol, biarkan ibu jari menyusup ke F. Lalu jari 2 dan 4 meraih G dan C.",
      ],
      tricky: {
        6: "Jari 3 turun dari F ke E mol. Lalu jari 2 dan 1 turun ke C.",
        15: "Tangan naik melalui G, B, dan D, lalu turun lagi. Ibu jari berakhir di F.",
        22: "Tahan G, C, dan E mol dengan jari 1, 2, dan 3. Lalu jari 2 dan 1 memainkan D dan C.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja pada birama 9 sampai 12. Tangan kiri memainkan pola yang sama di setiap ketukan.",
        "Mainkan tangan kanan saja pada 8 birama pertama, satu oktaf lebih tinggi daripada melodi.",
        "Mainkan akor besar tangan kanan saja pada birama 17 sampai 24, dan biarkan jari atas bernyanyi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Di sini tangan kiri memainkan not seperdelapan. Di birama 9 berubah menjadi not seperenambelas, dan musiknya makin besar.",
        "Hitung empat not seperenambelas di setiap ketukan: nada akar, kuint, oktaf, kuint. Jangan biarkan polanya terburu-buru.",
        "Inilah kemunculan terakhir melodi, dan yang paling penuh. Mainkan not atas setiap akor sedikit lebih keras.",
      ],
      tricky: {
        17: "Rentangkan tangan di atas empat not untuk setiap akor. Angkat lebih awal di akhir birama, untuk melompat turun.",
        18: "Tahan E mol, A mol, C, dan E mol selama tiga ketukan. Lalu jari 4 memainkan C.",
        23: "Angkat tangan setelah akor pertama. Lalu jari 5 mendarat di B, dengan F dan D di bawahnya.",
      },
    },
  },
};
