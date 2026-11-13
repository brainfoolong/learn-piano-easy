/** The guide of *Yankee Doodle* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Yankee Doodle adalah lagu tradisional yang dinyanyikan tentara Inggris untuk mengejek para kolonis Amerika. " +
    "Selama Revolusi Amerika, orang Amerika mengambil lagu ini sebagai milik mereka sendiri dan menyanyikannya dengan bangga. " +
    "Salah satu cetakan pertamanya ada dalam buku kumpulan lagu yang diterbitkan James Aird di Glasgow pada 1782.",
  funFact: "Yankee Doodle adalah lagu resmi negara bagian Connecticut.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Sekarang tangan kiri saja. Setiap notnya berlangsung dua ketukan atau lebih.",
        "Gabungkan kedua tangan pada 4 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Jari 2 berada di C, dan ibu jarimu meraih ke bawah ke G rendah di akhir birama 2.",
        "Kedua not di birama 4 berlangsung dua ketukan, jadi hitung sampai habis.",
        "Angkat tanganmu sebentar setelah C di birama 6. Tanganmu mendarat satu tuts lebih rendah.",
      ],
      tricky: {
        6: "Berjalan turun F, E, D, dan C dengan jari 5, 4, 3, dan 2, lalu angkat tanganmu.",
        7: "Daratkan jari 2 di B, dan ibu jari mengambil G rendah.",
        8: "Jari 4 memainkan kedua C. Tahan masing-masing selama dua ketukan.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja sepanjang bait, pelan-pelan.",
        "Mainkan tangan kiri saja. Tahan setiap akor sampai not berikutnya.",
        "Gabungkan kedua tangan pada refrein, yang letaknya lebih tinggi di deretan tuts.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Not bas datang lebih dulu, lalu akor menjawabnya. Mainkan akor sedikit lebih lembut.",
        "Ganti ke ibu jari pada G kedua, agar tanganmu bisa meraih ke atas untuk refrein.",
        "Di sini melodi naik ke not tertingginya. Biarkan berdenting, lalu mendarat dengan lembut di G.",
      ],
      tricky: {
        7: "Geser jari 2 dari G turun ke F kres, dan ibu jari mendarat di D di bawahnya.",
        12: "Ibu jarimu memainkan B, lalu bergeser turun ke G. Tahan dulu B selama dua ketukannya.",
        15: "Ibu jari mengambil D, lalu jari 4 meraih ke atas ke G. Jaga tanganmu tetap terbuka.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan rentetan not cepat di birama 8 saja, dan susupkan ibu jari ke C.",
        "Mainkan refrein dalam terts saja, dan jaga kedua not setiap pasangan tetap bersamaan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Ibu jari menyusup di bawah jari 3 untuk meraih C, dan rentetan not cepat terus naik ke refrein.",
        "F kres sengaja bergesekan dengan bas sejenak.",
      ],
      tricky: {
        7: "Geser jari 2 dari G turun ke F kres. Bagian tanganmu yang lain mengikutinya.",
        11: "Refrein turun kembali ke D. Jari 3 mengambilnya, agar tanganmu siap untuk C.",
        15: "Tanganmu terbuka menjadi sekst di B dan G, lalu naik ke F kres dan A.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktafnya, lalu kembali ke atas untuk akornya.",
        "Mainkan sekst dan terts tangan kanan saja, dan biarkan jari yang di atas menyanyikan melodinya.",
        "Mainkan oktaf tangan kiri saja pada refrein.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktafnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Ibu jari memainkan setiap not bawah, dan jari 4 dan 5 membawakan melodinya.",
        "Mainkan oktaf dengan pendek, dan biarkan pedal menyambungkannya.",
      ],
      tricky: {
        3: "Melodi berjalan naik sementara bas melompat. Arahkan matamu ke tangan kiri.",
        5: "Sekst bergerak dalam satu posisi. Biarkan ibu jari memimpin setiap gerakan naik.",
        8: "Angkat tanganmu setelah akor kedua, lalu lompat naik ke E untuk refrein.",
      },
    },
  },
};
