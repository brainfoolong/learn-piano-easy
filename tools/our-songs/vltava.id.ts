/** The guide of *Vltava* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Smetana menulis Vltava pada 1874, sebagai yang kedua dari enam puisi simfonis dalam siklusnya Má vlast, Tanah Airku. " +
    "Musiknya melukiskan sungai yang mengalir melintasi Praha. " +
    "Film Terrence Malick tahun 2011, The Tree of Life, memakai musik ini.",
  funFact:
    "Melodinya yang terkenal adalah gubahan dari La Mantovana, sebuah melodi yang dianggap ciptaan Giuseppe Cenci, tenor Italia dari masa Renaisans.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada birama 1 sampai 5, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 5 sampai 9, tempat melodi berjalan turun ke E.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama satu birama penuh, dan tidak pernah berpindah.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan ibu jari di B. Lalu jari 2 sampai 5 naik dari E ke A.",
        "Lepaskan A sedikit lebih awal. Di jeda singkat itu, geser tanganmu satu tuts ke atas, dengan jari 4 di B.",
        "Hitung enam ketukan dalam satu birama: panjang, pendek, panjang, pendek. Sungai terus mengalir dan tidak pernah terburu-buru.",
      ],
      tricky: {
        3: "Jari 4 memainkan B tiga kali. Tanganmu baru saja bergeser satu tuts ke atas, jadi jari 5 menunggu di atas C.",
        5: "Setelah dua C tinggi, jari 4 memainkan B lagi. Jaga tanganmu tetap diam, dan biarkan jari-jarinya berjalan turun.",
        8: "Mainkan dua F kres pertama dengan ibu jari, dan yang ketiga dengan jari 2. Dengan begitu ibu jari bebas untuk E.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah yang panjang, lalu satu not atau akor yang pendek.",
        "Mainkan tangan kanan saja pada 9 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap setengah birama punya satu not panjang dan satu not pendek, di kedua tangan. Rasakan ayunannya: panjang, pendek.",
        "Lepaskan A sedikit lebih awal. Di jeda singkat itu, geser tanganmu satu tuts ke atas, dengan jari 4 di B.",
        "Akhiri dengan E dan G bersamaan. Jari 1 dan 3 menekan keduanya sebagai satu.",
      ],
      tricky: {
        3: "Jari 4 memainkan B tiga kali setelah tangan bergeser ke atas. Tangan kiri memainkan E yang panjang, lalu B yang pendek.",
        5: "Jari 4 memainkan B tiga kali lagi, dan jari 3 menunggu di atas A untuk birama berikutnya.",
        12: "Jari 3, 4, dan 5 naik dari G ke B. Lalu A dan G turun kembali dengan cepat sebelum B yang panjang.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai akor terurainya mengalir dengan sendirinya.",
        "Mainkan tangan kanan saja pada birama 10 sampai 17, dan susupkan ibu jari saat naik.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan sebagai satu.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Susupkan ibu jari ke G setelah F kres. Lalu jari 2, 3, dan 4 meraih A, B, dan C.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        16: "Ibu jari mengambil D kres, dan tangan kiri memainkan D kres rendah di bawahnya. Keduanya mengantar pulang ke E.",
        17: "Jari 3, 2, dan 1 berjalan turun ke E. Lalu ibu jari melompat turun ke B, not gantung yang membuka melodi.",
        24: "Jari 1 dan 3 menahan D kres dan F kres. Lalu ibu jari meregang turun ke A untuk sekst.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor dua kali, masing-masing dengan istirahat singkat untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang.",
        "Mainkan akor tangan kanan saja, dan biarkan jari yang di atas menyanyikan melodinya.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pakai istirahat singkat setelah setiap oktaf dan akor untuk melompat ke posisi berikutnya.",
        "Biarkan arpeggio mengalir dengan lembut, seperti sungai di bawah melodi.",
        "Beberapa akor sengaja bergesekan dengan bas. Mainkan not teratas setiap akor sedikit lebih keras.",
      ],
      tricky: {
        20: "Rentangkan tanganmu di atas C, E, A, dan C untuk akor pertama. Lalu ibu jari naik ke E untuk akor kedua.",
        22: "Akor A minor berbunyi tiga kali. Biarkan tanganmu lemas, dan mainkan yang terakhir dengan jari 2 dan 5.",
        24: "Tahan akor B mayor, lalu pakai istirahat singkat untuk merentangkan tanganmu di atas E, G, B, dan E.",
      },
    },
  },
};
