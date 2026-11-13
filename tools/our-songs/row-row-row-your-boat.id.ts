/** The guide of *Row Row Row Your Boat* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Ini salah satu lagu anak-anak paling terkenal di negara-negara berbahasa Inggris. " +
    "Eliphalet Oram Lyte menerbitkan melodi yang kita nyanyikan sekarang pada 1881, dalam The Franklin Square Song Collection. " +
    "Melodinya naik melewati lima not pertama tangga nada, lalu meluncur turun sejauh satu oktaf penuh.",
  funFact: "Lagu ini sebuah kanon: suara kedua memulai melodi yang sama dua birama kemudian, dan kedua bagian itu saling cocok.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja, tempat melodi meluncur turun.",
        "Gabungkan kedua tangan. Tangan kiri hanya menahan satu not rendah yang panjang.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Di sini setiap jari punya tutsnya sendiri: ibu jari di C, kelingking di G.",
        "G berbunyi sepanjang birama, jadi hitung keenam ketukan sebelum kamu bergerak.",
        "Setiap not di sini panjangnya tiga ketukan, jadi hitung sampai tiga di setiap tuts.",
      ],
      tricky: {
        5: "Geser tanganmu ke atas selama G yang panjang, agar kelingking mendarat di C tinggi.",
        6: "Tahan E dengan jari 2, lalu C dengan ibu jari, masing-masing tiga ketukan. Jaga tanganmu tetap diam.",
        7: "Kelingking menemukan G lagi, dan melodi berjalan turun: 5, 4, 3, 2.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan ketiga not setiap akor bersamaan.",
        "Mainkan tangan kiri pada paruh kedua, tempat satu not bas datang sebelum setiap akor.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Akor pindah ke G. Ibu jari tetap di G, dan dua jari lainnya masing-masing turun satu tuts.",
        "Not bas jatuh pada ketukan 1, dan not-not di atasnya pada ketukan 4.",
        "Biarkan not-not yang turun makin lembut sedikit demi sedikit, seperti perahu yang hanyut menjauh.",
      ],
      tricky: {
        5: "Geser tangan kanan ke atas selama G yang panjang, agar kelingking mendarat di C tinggi.",
        7: "Di tangan kiri, kelingking bergeser dari C ke B, dan jari 3 dari E ke D.",
        13: "C tinggi datang lagi. Geser tangan kanan ke atas selama G yang panjang di birama 12.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan melodi di tangan kiri saja, mulai birama 9.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Lepaskan pedal, lalu injak lagi pada ketukan 1 dan 4.",
        "Melodi pindah ke tangan kiri. Mainkan lebih keras daripada akor terurai tangan kanan.",
      ],
      tricky: {
        5: "Geser tangan kanan ke atas selama G yang panjang, agar kelingking sudah siap di C tinggi.",
        9: "Di sini kedua tangan bertukar tugas: tangan kiri mengambil melodi, dan tangan kanan mengambil akor.",
        13: "Ibu jari kirimu menjangkau naik ke C tengah, lalu tangan berjalan turun dengan jari 2, 3, dan 5.",
      },
    },
    legendary: {
      practice: [
        "Mainkan akor tangan kanan saja, dan biarkan kelingking menyanyikan melodi.",
        "Mainkan tangan kiri saja mulai birama 9, tempat tangan kiri memulai kanon.",
        "Gabungkan kedua tangan pada kanon, pelan-pelan, dan dengarkan kedua suaranya.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Mainkan not teratas setiap akor sedikit lebih keras daripada yang lain.",
        "Tangan kiri memulai kanon sendirian. Tangan kanan menunggu dua birama.",
        "Setiap tangan memainkan seluruh melodi. Biarkan kedua suara terdengar.",
      ],
      tricky: {
        5: "Angkat tangan dari akor birama 4, lalu mendarat dengan kelingking di C tinggi.",
        17: "Tangan kanan mengakhiri melodi di atas G rendah. Angkat tangan setelah D, siap untuk akor terakhir.",
        18: "Bentangkan tangan kanan selebar satu oktaf penuh untuk akor terakhir: C, E, G, dan C.",
      },
    },
  },
};
