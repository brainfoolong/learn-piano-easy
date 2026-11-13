/** The guide of *Up on the Housetop* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Benjamin Hanby menulis lagu Natal ini pada 1864, saat ia memimpin sebuah sekolah menyanyi di New Paris, Ohio. " +
    "Lagu ini pertama kali diterbitkan oleh Root & Cady dalam majalah Our Song Birds. " +
    "Lagu ini dianggap sebagai lagu Natal pertama yang terutama bercerita tentang Sinterklas. " +
    "Hanby menulis sekitar 80 lagu sebelum meninggal karena tuberkulosis pada 1867.",
  funFact:
    "Sebuah buku menyebutnya lagu Natal tertua kedua yang tidak bersifat religius. " +
    "Hanya Jingle Bells, yang terbit pada 1857, yang lebih tua.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan refrein dengan tangan kanan saja. Sekarang jari 3 ikut bermain di F.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama setengah atau satu birama penuh.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Letakkan ibu jari di D, dan jari 2 sampai 5 di E, F, G, dan A.",
        "Angkat tanganmu sedikit setelah D, agar ibu jari turun ke C untuk birama 2.",
        "Refrein dimulai di sini. Mainkan sedikit lebih cerah daripada bait.",
      ],
      tricky: {
        1: "Jari 4 dan 5 bergoyang di antara G dan A. Lalu jari 2 memainkan E dan ibu jari memainkan D.",
        2: "Angkat tanganmu setelah D, dan daratkan ibu jari di C. Jari 2 memainkan E dan jari 4 menahan G.",
        5: "Pembukaannya kembali. Kali ini jari 2 menahan E lebih lama, dan tidak ada D sebelum C.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja pada bait, dan tekan not setiap akor bersamaan.",
        "Mainkan tangan kiri saja pada refrein: nada akar setiap akor, lalu kuintnya.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, tempat not-not pendek muncul.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan setiap akor dengan lembut sampai habis, agar melodi bernyanyi di atasnya.",
        "Setelah A pertama, dua A dan dua G berikutnya dua kali lebih cepat. Mainkan dengan rata.",
        "Di refrein, mainkan setiap nada akar sedikit lebih keras daripada kuint sesudahnya.",
      ],
      tricky: {
        2: "Ibu jari bergeser turun dari D ke C. Jari 2 memainkan E dan jari 4 menahan G.",
        6: "Gerakan yang sama seperti birama 2: ibu jari bergeser turun dari D ke C, saat akor berikutnya dimulai.",
        7: "Jari 5 memainkan A tiga kali, lalu jari 4 memainkan G dua kali. Sesudah itu jari 2 memainkan E.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts tangan kanan saja, dan jaga kedua not setiap pasangan tetap bersamaan.",
        "Gabungkan kedua tangan pada bait, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi berdenting di atasnya.",
        "Tekan kedua not setiap terts sekaligus, dan biarkan jari yang di atas bernyanyi.",
        "Ganti pedal setiap setengah birama, saat tangan kiri memulai akor baru.",
      ],
      tricky: {
        2: "Ibu jari bergeser turun dari D ke C, sementara bas Alberti terus mengalir di bawah.",
        6: "Gerakan yang sama seperti birama 2. Jaga tangan kiri tetap tenang saat ibu jari bergeser.",
        13: "Terts naik dari E dan G ke F dan A, lalu kembali. Jari 2 dan 4 menyerahkan tugasnya kepada jari 3 dan 5.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktaf rendah, lalu kembali ke atas untuk akornya.",
        "Mainkan bait dengan tangan kanan saja, dan mainkan isian cepatnya dengan ringan.",
        "Mainkan arpeggio tangan kiri saja pada refrein.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktaf rendahnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Pada isian cepat, jari 5, 4, 3, dan 2 berjalan turun dari A ke E.",
        "Angkat tanganmu setelah G, lalu daratkan akor empat not dengan pedal diinjak.",
      ],
      tricky: {
        3: "Jari 5 memainkan A dua kali, lalu tangan bergulir turun ke E. Tangan kiri melompat dari F ke C.",
        4: "Setelah G yang panjang, jari 3, 2, dan 3 memainkan F, E, dan F dengan cepat, lalu melodi kembali ke G.",
        7: "Jari 5 mengulang A, lalu jari 4 mengulang G. Mainkan not-not cepat dengan ringan di atas bas stride.",
      },
    },
  },
};
