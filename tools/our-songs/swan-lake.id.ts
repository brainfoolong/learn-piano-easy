/** The guide of *Swan Lake* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tchaikovsky menulis musik untuk balet Danau Angsa (Swan Lake) pada 1875 dan 1876, dan Balet Bolshoi pertama kali mementaskannya pada 1877. " +
    "Tema ini adalah melodi obo dari babak kedua. " +
    "Film Black Swan (2010) memuat beberapa adegan dari Danau Angsa.",
  funFact: "Vladimir Begichev memesan musik ini pada Mei 1875, dan Tchaikovsky menerima bayaran 800 rubel untuknya.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 9 sampai 16 dengan tangan kanan saja. Tanganmu tetap di satu tempat.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama satu birama penuh atau setengah birama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan E pertama sambil menghitung sampai empat. Lalu empat not pendek naik dari A ke D.",
        "Melodi ini sedih sekaligus gagah. Biarkan setiap not tinggi yang panjang bernyanyi.",
        "Di birama ini jari 2 memainkan A, agar ibu jari bisa menjangkau turun ke F.",
      ],
      tricky: {
        1: "Setelah E yang panjang, daratkan ibu jari di A. Lalu jari 2, 3, dan 4 naik ke D.",
        3: "Di sini mainkan A dengan jari 2. Lalu ibu jari menjangkau turun ke F, dan jari 3 mengambil C.",
        7: "Seperti di birama 3, jari 2 memainkan A, dan ibu jari menjangkau turun ke F.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Satu not rendah datang tepat pada ketukan, lalu akor dua not menjawabnya.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri bermain di setiap ketukan: satu not rendah, lalu satu akor. Hitung “1, 2”.",
        "Mainkan tangan kiri dengan lembut, agar melodi bernyanyi di atasnya.",
        "Akhiri dengan A dan C bersamaan. Jari 1 dan 3 menekan keduanya sekaligus.",
      ],
      tricky: {
        3: "Di birama ini jari 2 memainkan A, agar ibu jari bisa menjangkau turun ke F.",
        7: "Seperti di birama 3, jari 2 memainkan A, dan ibu jari menjangkau turun ke F.",
        12: "Tangan kiri memainkan E dengan jari 1, lalu menambahkan B di bawahnya dengan jari 4.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan sekaligus.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "G rendah bergesekan dengan F kres yang ditahan. Bunyi tajam dan sedih itu memang disengaja.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        8: "Tangan kiri memainkan A kres di paruh pertama. Lalu kembali ke B minor untuk penutup.",
        21: "Jari 3 dan 5 menahan D dan F kres. Lalu ibu jari mulai naik dari B ke E.",
        24: "Pakai tanda istirahat pendek untuk membentangkan tangan kanan di atas D, F kres, dan B.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: oktaf tepat pada ketukan, lalu akor, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke yang berikutnya.",
        "Biarkan arpeggio mengalir lembut di bawah melodi, dan ganti pedal di setiap akor baru.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada yang lain.",
      ],
      tricky: {
        12: "Tangan kiri naik dua oktaf dari F kres, dua kali. Jari 3 menyeberangi ibu jari ke A kres.",
        19: "Jari 2 mengambil B setelah akor. Lalu ibu jari menjangkau turun ke G, dan jari 5 mengambil D.",
        23: "Seperti di birama 19, ibu jari menjangkau turun ke G, dan jari 5 mengambil D.",
      },
    },
  },
};
