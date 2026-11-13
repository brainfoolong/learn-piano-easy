/** The guide of *O Christmas Tree* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Judul Jerman O Tannenbaum berarti “Wahai pohon cemara”. " +
    "Melodinya berasal dari lagu rakyat Jerman yang sudah tua, dan tak ada yang tahu siapa penciptanya. " +
    "Pada 1824, Ernst Anschütz, seorang guru dari Leipzig, menulis lirik yang dinyanyikan sampai sekarang. " +
    "Lagunya memuji pohon cemara yang tetap hijau sepanjang musim dingin.",
  funFact: "Melodi yang sama dipakai untuk lagu resmi negara bagian Iowa, dan lagu negara bagian Maryland memakainya sampai 2021.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 5 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 9 dengan tangan kanan saja, tempat melodi naik ke A.",
        "Sekarang tangan kiri saja. Tangan kiri hanya menahan dua posisi, satu di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Panjang, pendek, panjang: not kedua yang cepat condong ke not ketiga, seperti lompatan kecil.",
        "Ibu jarimu mulai di G di bawah C tengah, dan jari 2 memainkan C tengah.",
        "Angkat tangan sebelum G rendah, dan biarkan ibu jari turun ke sana.",
      ],
      tricky: {
        3: "Jari 4 memainkan E empat kali. Mainkan dengan ringan, agar E kedua yang cepat tetap terdengar.",
        4: "Jari 3, 4, dan 5 berjalan naik ke F, lalu ibu jari menjangkau turun ke B.",
        6: "Kelingking memainkan G, jari 3 memainkan E, lalu kelingking merentang naik ke A.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan ketiga not setiap akor bersamaan.",
        "Mainkan bas wals saja, pada bait kedua: not rendah, akor, akor.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Setelah C terakhir, ibu jari pindah naik ke G berikutnya. Lalu bait kedua dimulai satu oktaf lebih tinggi.",
        "Pada bas wals, mainkan not rendah sedikit lebih keras daripada akor sesudahnya.",
        "Frasa tengah datang dua kali, dan kali kedua satu tuts lebih rendah. Mainkan gemanya sedikit lebih lembut.",
      ],
      tricky: {
        13: "Jari 2 dan 1 memainkan D dan C, lalu ibu jari melompat naik ke G berikutnya.",
        16: "Satu oktaf lebih tinggi, jari 3, 4, dan 5 naik ke F, dan ibu jari menjangkau kembali ke B.",
        24: "Jangkauan yang sama seperti di birama 16: naik ke F, lalu susupkan ibu jari turun ke B.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan sekst tangan kanan saja, dan jaga kedua not setiap pasangan tetap bersamaan.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
        "Ganti pedal pada ketukan kedua, saat akor berubah dari G ke C.",
      ],
      tricky: {
        16: "Tangan merentang selebar septim, G dan F. Lalu ibu jari turun dari G ke D untuk pasangan terakhir.",
        17: "Setelah dua pasangan itu, kelingking menjangkau naik ke G tinggi.",
        25: "Bentangkan tangan untuk dua akor terakhir, dan biarkan C di atasnya berbunyi.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktaf, lalu kembali ke atas untuk akornya.",
        "Mainkan akor tangan kanan saja, dan biarkan kelingking menyanyikan melodinya.",
        "Mainkan arpeggio tangan kiri saja, pada bait kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktafnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Di bagian yang tinggi, oktafnya harus berdenting seperti lonceng. Jaga pergelangan tetap lemas.",
        "Di setiap arpeggio, jari 3 menyeberang di atas ibu jari saat naik.",
      ],
      tricky: {
        4: "Kelingking memainkan D, E, dan F di atas. Lalu tangan turun ke akor G, dengan kelingking di B.",
        5: "Angkat tangan setelah akor C, dan jangkau G tinggi dengan kelingking.",
        12: "Akornya sama seperti di birama 4. Jaga kelingking tetap di melodi saat ibu jari bergeser turun.",
      },
    },
  },
};
