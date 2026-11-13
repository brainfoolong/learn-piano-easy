/** The guide of *Drunken Sailor* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Drunken Sailor adalah lagu pelaut yang dinyanyikan para awak kapal sambil menarik tali atau memutar penggulung jangkar. " +
    "Tidak ada yang tahu siapa penciptanya, dan melodinya memakai modus Doria.",
  funFact: "Catatan tertulis pertama tentang lagu pelaut ini berasal dari pelayaran perburuan paus pada 1839, yang berangkat dari New London, Connecticut.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Melodinya naik ke D, lalu pulang ke nada asalnya.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not rendah selama satu birama atau setengah birama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap setengah birama berbunyi panjang, pendek, pendek. Hentakkan seperti pelaut di geladak kapal.",
        "Jari 5 memainkan A, lalu ibu jari meraih ke bawah ke D. Tanganmu tetap di tempatnya.",
        "Mainkan A terakhir di birama 5 dengan jari 2. Lalu jari 3, 4, dan 5 sudah siap untuk B, C, dan D.",
      ],
      tricky: {
        3: "Jari 4 memainkan G enam kali: panjang, pendek, pendek, panjang, pendek, pendek. Mainkan not pendeknya dengan ringan.",
        5: "Jari 5 memainkan A lima kali. Lalu jari 2 mengambil A terakhir, sehingga tanganmu siap naik.",
        7: "Jari 5 bergeser turun dari D ke C. Lalu jari 4, 3, dan 2 berjalan turun ke A, G, dan E.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah, lalu dua not pada ketukan berikutnya.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 9 sampai 16, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri berayun rendah, tinggi, rendah, tinggi, seperti awak kapal yang menarik tali bersama-sama.",
        "Setelah D tinggi yang panjang, jari 5 bergeser turun ke C. Hanya itu gerakan tanganmu.",
        "Akhiri dengan D dan F bersamaan, dan biarkan keduanya terus berbunyi.",
      ],
      tricky: {
        3: "Jari 4 memainkan G enam kali, sementara tangan kiri memainkan C, lalu G. Mainkan kedua tangan dengan rata.",
        4: "Ibu jari meraih ke bawah ke C, dan jari 2 memainkan E. Tangan kiri tetap di C dan G.",
        7: "Setelah D yang panjang, jari 5 bergeser turun ke C. Tangan kiri memainkan C, lalu F dan A, lalu C dan G.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan birama 9 sampai 16 dengan tangan kanan saja, dan biarkan ibu jari menyusup saat naik.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Biarkan ibu jari menyusup ke G setelah jari 3 memainkan F.",
        "Kini melodinya adalah not atas dari setiap pasangan not. Biarkan jari yang di atas menyanyikannya.",
      ],
      tricky: {
        7: "Jari 5 bergeser turun dari D ke C, dan jari 4, 3, dan 2 berjalan turun. Tangan kiri memainkan akor terurai F mayor, lalu C mayor.",
        17: "Jari 2 dan 4 menekan F dan A bersamaan. Lalu jari 4 memainkan A dua kali sendirian.",
        24: "Tangan kiri memainkan D, F, dan A bersamaan dengan jari 5, 3, dan 1. Tangan kanan menahan F, A, dan D.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan oktaf tangan kanan saja. Jaga ibu jari dan jari 5 tetap terbuka, seperti bingkai yang tidak berubah.",
        "Mainkan arpeggio tangan kiri saja, dan biarkan ibu jari menyusup saat turun.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Angkat tanganmu di setiap tanda istirahat pendek, lalu mendarat di oktaf berikutnya.",
        "Biarkan arpeggio mengalun dengan lembut, seperti ombak di bawah kapal.",
        "Mainkan akor dengan pendek dan tegas, seperti sepatu bot di geladak. Not teratasnya adalah melodi.",
      ],
      tricky: {
        9: "Ibu jari menyusup ke G setelah F. Tangan kiri memulai arpeggionya di D rendah.",
        12: "Tangan kiri meraih ke bawah ke A rendah dengan jari 5. Tangan kanan mulai di E dengan ibu jari.",
        15: "Tangan kiri mulai di F rendah, lalu di C. Di tangan kanan, ibu jari memainkan F, lalu E.",
      },
    },
  },
};
