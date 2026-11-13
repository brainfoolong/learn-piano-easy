/** The guide of *Black Flag Jig* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Black Flag Jig adalah lagu buatan kami sendiri, bergaya musik film petualangan penuh adu pedang. " +
    "Lagu ini menari dalam birama 6/8 yang cepat, seperti jig pelaut di atas dek kapal.",
  funFact:
    "Jig adalah tarian riang yang dihitung dalam dua kelompok berisi tiga ketukan. " +
    "Tarian ini berasal dari Kepulauan Britania pada abad ke-16.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 4 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Di birama 7, ibu jari turun menjangkau C kres.",
        "Sekarang tangan kiri saja. Tangan kiri menahan dua tuts dan menggantinya paling banyak dua kali per birama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Hitung enam ketukan dalam satu birama: panjang, pendek, panjang, pendek. Itulah lompatan kecil khas jig.",
        "Jari 5 memainkan B mol, sebuah tuts hitam. Lalu jari itu memainkan A di awal birama 3, dan jari-jarimu berjalan turun.",
        "Ibu jari memainkan C kres, tuts hitam tepat di bawah D. Lalu tangan terbuka sampai A.",
      ],
      tricky: {
        2: "Jari 3, 4, dan 5 naik melalui G, A, dan B mol. Lalu jari 3 kembali ke G.",
        6: "Tangan berjalan turun dari G ke D dengan jari 5, 4, 3, dan 2. Ibu jari menunggu di atas C kres.",
        10: "Jari 4 dan 5 berayun di antara G dan A. Lalu jari 2 turun ke E.",
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
        "Setiap setengah birama tangan kiri berisi satu not panjang dan satu akor pendek. Rasakan pantulannya: panjang, pendek.",
        "Pasangan not seperdelapan yang cepat dua kali lebih cepat dari not pendek. Hitung dengan rata.",
        "Akhiri dengan D dan F bersamaan. Jari 1 dan 3 menekannya seperti satu not.",
      ],
      tricky: {
        4: "Ibu jari menahan D selama tiga ketukan, lalu jari 4 menahan A. Tangan kiri memantul di bawah keduanya.",
        6: "Jari 5, 4, 3, dan 2 berjalan turun dari G ke D. Tangan kiri pindah dari G minor ke C mayor.",
        13: "Jari 5 menjangkau A, lalu ibu jari turun ke D. E dan F adalah not seperdelapan cepat sebelum A berikutnya.",
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
        "Setelah F, susupkan ibu jari ke G. Lalu jari 2 dan 3 menjangkau A dan B mol.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari atas memimpin.",
      ],
      tricky: {
        14: "Tangan melompat di antara B mol, G, dan D, lalu terbuka sampai C. Jari 2 tetap di atas G sepanjang birama.",
        19: "Ibu jari menahan C kres, lalu bergeser turun ke C. Jari atas berjalan turun melalui A, G, F, dan E.",
        21: "Jari 1 dan 5 menahan setiap sekst dan meluncur turun satu tuts demi satu tuts. Jari 4 memainkan F terakhir.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf, lalu satu akor dua kali, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Arpeggio naik dua oktaf, lalu mengalir turun kembali.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke yang berikutnya.",
        "Biarkan arpeggio mengalir naik dan turun seperti kapal di atas ombak.",
        "Mainkan not teratas setiap akor sedikit lebih keras, agar melodinya terdengar jelas.",
      ],
      tricky: {
        2: "Tangan kiri melompat dari oktaf G rendah ke akor G, D, dan G. Tangan kanan naik melalui G, A, dan B mol.",
        18: "Angkat tangan setelah setiap akor, lalu daratkan di akor berikutnya. Ibu jari pindah dari B mol naik ke D, lalu kembali.",
        21: "Ibu jari tetap di D selama dua akor, lalu turun ke B mol. Jari teratas menyanyikan B mol, A, G, dan F.",
      },
    },
  },
};
