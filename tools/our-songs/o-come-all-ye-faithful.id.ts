/** The guide of *O Come, All Ye Faithful* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "John Francis Wade menyalin melodi ini dengan tangan sekitar tahun 1751, dengan lirik Latin yang diawali Adeste fideles. " +
    "Wade adalah seorang Katolik Inggris yang mencari nafkah dengan menyalin musik di Prancis. " +
    "Pada 1841, Frederick Oakeley menulis lirik bahasa Inggris yang kini paling banyak dinyanyikan orang.",
  funFact: "Di London, lagu ini pernah disebut “Himne Portugis”, karena orang mendengarnya di kapel kedutaan Portugal.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 3 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 1 sampai 9 dengan tangan kanan saja, sampai G rendah yang panjang.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap setengah birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Jari 2 mulai di C tengah, dan ibu jari menunggu di G di bawahnya.",
        "Panjang, pendek: tahan A, lalu biarkan G yang cepat jatuh ke birama berikutnya.",
        "Refrein mengulang seruan yang sama tiga kali. Mainkan setiap seruan sedikit lebih keras daripada sebelumnya.",
      ],
      tricky: {
        4: "Jari 3 mendarat di E setelah tanda istirahat pendek. Lalu jari 2, 3, dan 4 berayun di antara D, E, dan F.",
        10: "Angkat tangan selama tanda istirahat, dan daratkan kelingking di G tinggi. Jari 4 dan 3 turun ke F dan E.",
        11: "Kali ini kelingking memainkan F, jadi jari 4 siap untuk E.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan tangan kanan saja pada 9 birama pertama, dan rasakan pasangan panjang-pendek di birama 8.",
        "Gabungkan kedua tangan pada refrein, birama 14 sampai 17.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Di sini ibu jari kiri tetap di G untuk setiap akor, jadi tangan hampir tidak bergerak.",
        "Panjang, pendek: A berbunyi tiga kali panjangnya G.",
        "Baris terakhir adalah yang paling megah. Biarkan bunyinya mengembang, lalu berhenti di C terakhir.",
      ],
      tricky: {
        4: "Buka tangan lebar-lebar: ibu jari meninggalkan G rendah saat jari 3 menjangkau naik ke E.",
        11: "Kali ini kelingking memainkan F, jadi jari 4 siap untuk E.",
        12: "Jari 2 menyusup kembali ke C di antara E dan D. Biarkan tangan diam, dan biarkan jari-jari yang bergerak.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan tangan kanan saja pada 9 birama pertama, satu oktaf di atas C tengah.",
        "Mainkan terts dan sekst di birama 14 sampai 17 dengan tangan kanan saja. Tekan kedua not seperti satu not.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
        "Ganti pedal di tengah setiap birama, saat tangan kiri memulai akor baru.",
      ],
      tricky: {
        7: "Tangan kanan naik dari B ke E, satu jari untuk setiap tuts, sementara tangan kiri berganti akor.",
        16: "Pasangan not berganti dari terts ke sekst, lalu kembali lagi. Lihat pasangan berikutnya sebelum kamu memainkannya.",
        21: "Angkat tangan kiri setelah D terakhir, lalu mendarat di oktaf C rendah bersama akor penutup.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktaf, lalu kembali ke atas untuk akornya.",
        "Mainkan akor tangan kanan saja, dan biarkan kelingking menyanyikan melodinya.",
        "Mainkan oktaf di birama 14 sampai 21 dengan tangan kanan saja. Biarkan tangan terbuka dan ringan.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat not basnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Saat memainkan oktaf, mainkan kelingking sedikit lebih keras, agar melodi bersinar di atas.",
        "Bas oktaf yang terurai bergulir dari kelingking ke ibu jari, lalu kembali lagi.",
      ],
      tricky: {
        3: "Bentangkan tangan untuk akor G empat not. Lalu biarkan tangan merapat ke D dan G.",
        8: "Akor bergeser dari G dan B turun ke F dan A. Lalu jari 2 berhenti di G.",
        12: "Kelingking menjangkau naik ke E di antara kedua akor. Lalu tangan turun ke A dan C.",
      },
    },
  },
};
