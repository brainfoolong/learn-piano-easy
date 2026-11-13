/** The guide of *Spanish Ladies* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Spanish Ladies adalah lagu pelaut tradisional tentang awak kapal yang berlayar pulang dari Spanyol ke Inggris. " +
    "Satu versi dari tahun 1769 masih tersimpan dalam buku log sebuah kapal.",
  funFact: "Dalam film Jaws (1975), pemburu hiu bernama Quint menyanyikan versi lagu ini yang biasa dinyanyikan para pemburu paus.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 5 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 9 dengan tangan kanan saja, dan geser tanganmu ke atas saat tanda istirahat pendek.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi sepanjang birama.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan ibu jari di B rendah. Lalu jari 3 memainkan E.",
        "Lepaskan B kedua sedikit lebih awal. Di jeda itu, geser ibu jari naik ke E.",
        "Hitung tiga ketukan pelan dalam satu birama, seperti kapal yang berayun di atas ombak.",
      ],
      tricky: {
        4: "Jari 5 memainkan G, lalu jari 4 dan 3 berjalan turun ke E. Tangan kiri menahan E dan B.",
        6: "Sekarang ibu jari memainkan E dua kali, dan jari 2 memainkan F kres. Tanganmu sudah pindah naik ke E.",
        16: "Jari 4 memainkan A dan jari 5 memainkan B. Lalu jari 2 turun ke F kres, di atas B tangan kiri.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah, lalu not atau akor yang lebih ringan dua kali.",
        "Mainkan tangan kanan saja pada 9 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan not rendah bas wals sedikit lebih keras daripada dua akor sesudahnya.",
        "Lepaskan B kedua sedikit lebih awal. Di jeda itu, geser ibu jari naik ke E.",
        "Akhiri dengan E dan G bersamaan. Jari 1 dan 3 menekan keduanya sekaligus.",
      ],
      tricky: {
        6: "Sekarang ibu jari memainkan E dua kali, dan jari 2 memainkan F kres. Tangan kiri memainkan E rendah, lalu B dua kali.",
        10: "Jari 5, 4, 3, dan 2 berjalan turun dari B ke F kres. Lalu jari 3 naik kembali ke G.",
        16: "Jari 4, 3, dan 2 berjalan turun ke F kres. Lalu jari 2 dan 4 menekan F kres dan A bersamaan.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan tangan kanan saja pada birama 10 sampai 17, dan biarkan ibu jari menyusup saat naik.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan sekaligus.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, sekali dalam setiap birama.",
        "Susupkan ibu jari ke A setelah jari 3 memainkan G.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        16: "Jari 5, 4, 3, dan 2 berjalan turun dari B. Lalu ibu jari mengambil D kres, yang mengarah kembali ke E.",
        22: "Jari 5 memainkan E dua kali di atas, sementara not bawah bergerak dari G ke B. Lalu ibu jari menjangkau A.",
        26: "Angkat kedua tangan setelah akor B mayor, lalu mendaratlah bersamaan di akor E minor terakhir.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: oktaf pada ketukan 1, lalu akor dua kali, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke yang berikutnya.",
        "Biarkan arpeggio mengalun lembut, seperti ombak di bawah kapal.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada yang lain.",
      ],
      tricky: {
        11: "Susupkan ibu jari kanan ke A setelah G. Sementara itu, tangan kiri naik dari A rendah melewati dua oktaf.",
        21: "Biarkan ibu jari di G sepanjang birama. Hanya not teratas yang bergerak, dari E ke D lalu ke B.",
        26: "Angkat kedua tangan saat tanda istirahat pendek di birama 25. Lalu mendaratlah di akor terakhir, di atas oktaf E rendah.",
      },
    },
  },
};
