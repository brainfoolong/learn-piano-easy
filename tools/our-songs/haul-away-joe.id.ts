/** The guide of *Haul Away Joe* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Haul Away Joe adalah lagu pelaut pendek untuk menarik tali. " +
    "R. R. Terry mencetaknya pada 1921 sebagai lagu pelaut untuk menarik tali layar depan.",
  funFact: "Salah satu bait dalam cetakan Terry bercerita tentang Raja Louis dari Prancis, yang kehilangan kepalanya dalam Revolusi.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada birama 1 sampai 4, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, tempat refrein turun ke D rendah.",
        "Sekarang tangan kiri saja. Tangan kiri menahan dua tuts dan menggantinya paling banyak dua kali per birama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Jari 5 memainkan D dan C di atas. Ibu jari hanya memainkan F kres di birama 3.",
        "Hitung enam ketukan dalam satu birama: panjang, pendek, panjang, pendek. Itulah tarikan pada tali.",
        "D rendah di birama 8 dimainkan ibu jari. Sekarang tanganmu tetap di atas D sampai A hingga akhir.",
      ],
      tricky: {
        2: "Jari 5 memainkan C tiga kali. Lalu jari 3 memainkan A, dan jari 2 menunggu di atas G.",
        11: "Jari-jarimu turun dari G ke D, satu tuts demi satu tuts. Tangan kiri menahan D dan G.",
        14: "Jari 4 dan 5 bergoyang di antara G dan A. Lalu jari 3 turun ke F.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah yang panjang, lalu satu akor pendek.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap setengah birama tangan kiri berisi satu not panjang dan satu akor pendek. Rasakan tarikannya: panjang, pendek.",
        "Jari 1 dan 5 menekan sekst seperti satu not. Lalu jari 5 tetap di not atas.",
        "Akhiri dengan D dan F bersamaan. Jari 1 dan 3 menekan keduanya seperti satu not.",
      ],
      tricky: {
        4: "Jari 3, 4, dan 5 naik ke A, B, dan C. B ini tuts putih, bukan B mol.",
        5: "Rentangkan jari 1 dan 5 di atas F dan D untuk sekst itu. Lalu jari 5 memainkan D lagi sendirian.",
        9: "Melodi naik ke D, F, dan A. G dan F adalah not seperdelapan yang cepat, jadi hitung keduanya dengan rata.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai akor terurai mengalir dengan sendirinya.",
        "Mainkan tangan kanan saja pada birama 9 sampai 16, dan biarkan ibu jari menyusup saat naik.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan seperti satu not.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Setelah F, susupkan ibu jari ke G. Lalu jari 2, 3, dan 4 meraih A, B, dan C.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        13: "Turun dari D dengan jari 5 sampai 1. Lalu jari 3 menyeberang di atas ibu jari ke F.",
        16: "Mainkan akor D minor dari bawah ke atas dengan jari 1, 2, 3, dan 5. Tanganmu terbuka lebar untuk D tinggi.",
        20: "Jari 1 dan 5 menahan setiap sekst dan meluncur naik satu tuts demi satu tuts. Jaga posisi tanganmu tetap sama.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor dua kali, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang di atasnya.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodinya.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke posisi berikutnya.",
        "Biarkan arpeggio bergulung seperti ombak di bawah melodi.",
        "Mainkan not teratas setiap akor sedikit lebih keras, agar melodi terdengar jelas.",
      ],
      tricky: {
        4: "Tangan kiri melompat dari oktaf A rendah ke akor A, E, dan A. Tangan kanan naik melalui A, B, dan C.",
        20: "Setiap akor memindahkan seluruh tangan satu tuts ke atas atau ke bawah. Jaga posisinya, dan biarkan jari teratas memimpin.",
        23: "Tangan berpindah dari G mayor ke A mayor dalam satu gerakan. Ibu jari mendarat di C kres, sebuah tuts hitam.",
      },
    },
  },
};
