/** The guide of *Kling, Glöckchen, klingelingeling* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Kling, Glöckchen, klingelingeling berarti “Berbunyilah, lonceng kecil, kling-kling-kling”. " +
    "Karl Enslin menulis liriknya, yang pertama kali dicetak pada tahun 1854. " +
    "Di dalamnya, Kanak-kanak Yesus memohon kepada anak-anak agar membukakan pintu, karena udara musim dingin begitu menggigit. " +
    "Tak ada yang tahu siapa yang menulis melodi yang dinyanyikan sekarang.",
  funFact: "Di banyak rumah di Jerman, sebuah lonceng kecil berbunyi pada malam Natal, untuk memberi tahu anak-anak bahwa hadiahnya sudah siap.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 12 dengan tangan kanan saja. Di sana tangan berpindah dua kali.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama satu atau setengah birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "G, A, G, A: inilah lonceng kecil yang berbunyi. Mainkan dengan ringan dan rata.",
        "Sambil menahan E yang panjang, geser ibu jari turun dari D ke C tengah.",
        "Saat E terakhir, geser ibu jari naik lagi ke D, agar jari 3 bisa meraih tuts hitam F kres.",
      ],
      tricky: {
        2: "Jari 4 dan 5 bergoyang di antara G dan A, seperti lonceng yang berayun.",
        5: "Ibu jarimu sekarang ada di C tengah, jadi jari 2 memainkan kedua D.",
        14: "Lonceng berbunyi lagi. Jari 4 dan 5 bergoyang di antara G dan A, seperti di birama 2.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan birama 9 sampai 12 dengan tangan kiri saja. Di sana tangan kiri turun ke G.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan C rendah sedikit lebih keras daripada akor sesudahnya.",
        "Di sini kedua tangan berpindah. Pakai not panjang terakhir di birama 8 untuk sampai ke sana.",
        "Tangan kiri bergeser naik lagi ke C saat frasa lonceng kembali.",
      ],
      tricky: {
        5: "Ibu jari kanan turun ke C tengah, sementara tangan kiri memainkan C, lalu akornya.",
        9: "Kedua tangan berpindah: ibu jari kanan naik ke D, dan tangan kiri turun ke A, C, dan D.",
        13: "Tangan kiri bergeser naik lagi ke C, dan tangan kanan memulai lagi frasa lonceng.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan not bersamaan.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi lonceng berbunyi di atasnya.",
        "Ganti pedal di awal dan di tengah setiap birama.",
        "Angkat tangan dari E terakhir, lalu daratkan jari 2 dan 4 satu oktaf lebih tinggi.",
      ],
      tricky: {
        17: "Tangan kanan mendarat satu oktaf lebih tinggi pada sebuah terts, dan tangan kiri mulai memainkan bas dan akornya.",
        27: "Jari 2 memainkan E, dan kelingking meregang naik ke A. Jaga ibu jari tetap dekat D.",
        29: "Frasa lonceng kembali dalam terts. Jari 2 dan 4 memainkan E dan G bersamaan.",
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
        "Dalam oktaf, pola lonceng harus berbunyi seperti lonceng sungguhan. Biarkan pergelangan tangan tetap lemas.",
        "Ibu jari dan kelingking memainkan setiap oktaf. Biarkan tangan terbuka dalam satu posisi.",
      ],
      tricky: {
        3: "Tekan B, D, dan F bersamaan, lalu jari 2 dan 4 memainkan D dan G sementara tangan kiri melompat.",
        7: "Jari 2 dan 4 memainkan terts, lalu jari 4 mengulang F dan kelingking memainkan G.",
        15: "Akor yang sama dengan birama 3. Perhatikan lompatan tangan kiri turun ke oktaf G rendah.",
      },
    },
  },
};
