/** The guide of *Leise rieselt der Schnee* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Judul Jerman Leise rieselt der Schnee berarti “Salju turun perlahan”. " +
    "Lagu ini salah satu lagu Adven yang paling terkenal dalam bahasa Jerman. " +
    "Pendeta Eduard Ebel menulis liriknya pada tahun 1895, dan bukunya mencetak lirik itu tanpa melodi. " +
    "Banyak buku juga menyebut Ebel sebagai pencipta melodinya, tetapi tak ada sumber yang membuktikannya, dan sumber lain menyebutnya lagu rakyat.",
  funFact:
    "Ketiga baitnya masing-masing dibuka dengan gambaran singkat: salju yang lembut, hati yang hangat, dan malam kudus yang segera tiba.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 2 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 1 sampai 8 dengan tangan kanan saja. Itulah satu bait penuh.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama, atau paling banyak dua posisi.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jari kananmu mulai di C tengah, dan jari 3 memainkan E pertama.",
        "Jari 4 memainkan C yang tadi ditahan ibu jarimu di birama 2, lalu tangan turun sampai ibu jari ada di G.",
        "Setiap frasa berakhir dengan not panjang dan tanda istirahat pendek. Biarkan notnya berbunyi, lalu ambil napas, seperti salju yang turun.",
      ],
      tricky: {
        7: "Jari 4 menahan D, lalu ibu jari turun ke A dua kali. Mainkan A yang cepat dengan ringan.",
        9: "Bait dimulai lagi. Angkat jari 3 dari C selama tanda istirahat, lalu letakkan di E.",
        15: "Lompatan yang sama seperti birama 7: D yang panjang, lalu A yang cepat dengan ibu jari.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan bas wals saja, pada bait kedua: not rendah, akor, akor.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jari kiri tetap di G sepanjang bait pertama. Hanya jari-jari lainnya yang bergerak.",
        "Dalam bas wals, mainkan not rendah sedikit lebih keras daripada akor sesudahnya.",
        "C kres adalah satu-satunya tuts hitam di lagu ini. Biarkan ibu jari bergeser ke atasnya, lalu turun lagi.",
      ],
      tricky: {
        7: "Jari 4 menahan D, lalu ibu jari turun ke A dua kali, sementara tangan kiri berganti akor di tengah birama.",
        9: "Bait dimulai lagi, dan wals dimulai. Pindahkan jari 3 dari C naik ke E selama tanda istirahat.",
        15: "A yang cepat datang lagi, sekarang di atas bas wals. Hitung D yang panjang sampai penuh sebelumnya.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan not bersamaan.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not atas setiap pasangan not, jadi biarkan jari atas memimpin.",
        "Ganti pedal di setiap setengah birama, saat tangan kiri memulai lagi polanya.",
      ],
      tricky: {
        7: "A yang cepat dimainkan ibu jari, sementara tangan kiri mengalir melewati D minor. Jaga bas tetap rata di bawahnya.",
        13: "Pasangan not berputar di sekitar C kres. Jari 1 dan 3 memainkan A dan C kres, lalu jari 2 dan 4 kembali ke B dan D.",
        14: "Tangan melebar dari terts menjadi sekst, dengan ibu jari di E dan jari 3 di C.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf, lalu kembali naik ke akor.",
        "Mainkan akor tangan kanan saja, dan biarkan jari atas menyanyikan melodi.",
        "Mainkan arpeggio tangan kiri saja, pada bait kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Saat bermain stride, lihat oktafnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Di bagian tinggi, oktafnya harus berbunyi seperti lonceng. Biarkan pergelangan tangan tetap lemas.",
        "Lepaskan oktaf D sesaat lebih awal, agar tangan mendarat di A yang cepat tepat waktu.",
      ],
      tricky: {
        9: "Kedua tangan berganti pola. Tangan kanan memainkan oktaf, dan tangan kiri memulai arpeggio pertamanya sepanjang dua oktaf.",
        12: "Tahan oktaf G, sementara tangan kiri naik ke E tinggi lalu turun lagi.",
        14: "Kenaikan yang sama seperti birama 12, sekarang di bawah oktaf C. Biarkan jari 3 menyeberang di atas ibu jari dengan mulus.",
      },
    },
  },
};
