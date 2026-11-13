/** The guide of *The Twelve Days of Christmas* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Twelve Days of Christmas adalah lagu Natal Inggris sekaligus lagu anak-anak. " +
    "Liriknya pertama kali dicetak di London pada 1780, dalam buku anak-anak berjudul Mirth Without Mischief. " +
    "Melodi yang dinyanyikan sekarang berasal dari penyanyi Inggris Frederic Austin, dan aransemennya terbit pada 1909.",
  funFact:
    "Dulu orang memainkan lagu ini sebagai permainan mengingat. Setiap pemain mengulang daftar hadiahnya, " +
    "dan setiap kekeliruan harus ditebus dengan hukuman kecil, seperti sebuah ciuman atau sebutir permen.",
  versions: {
    common: {
      practice: [
        "Mainkan 3 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 4 sampai 7 dengan tangan kanan saja, dari cincin emas turun sampai A rendah.",
        "Sekarang tangan kiri saja. Tangan kiri mengganti posisinya hanya di awal dan di tengah setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jari memainkan ketiga G rendah, dan jari 2 mengambil setiap C di birama 2.",
        "Tahan G panjang selama satu birama penuh sambil menghitung sampai delapan. Itulah cincin emasnya.",
        "Setelah tanda istirahat pendek, ibu jari mendarat di A rendah. Jari 5 sudah melepas F sesaat sebelumnya.",
      ],
      tricky: {
        3: "Jari 3, 4, dan 5 naik ke F. Lalu ibu jari bergeser naik ke D, dan jari 2 menahan E panjang.",
        4: "Jari 3 menahan G, lalu jari 5 menjangkau A di atas. Tangan kiri pindah dari kuintnya ke satu D saja.",
        6: "Mainkan G lagi dengan jari 5, lalu turun sampai C dengan ibu jari. Angkat tangan sebelum A rendah.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja pada bait pertama, dan tekan not setiap akor bersamaan.",
        "Mainkan birama 3 sampai 5 dengan tangan kanan saja, tempat cincin emas naik ke A dan F kres.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Jari 4 memainkan F kres, sebuah tuts hitam. Lalu jari 5 mendarat di G panjang.",
        "Setelah G rendah, tangan pindah ke atas agar jari 2 memainkan E. G itu panjang, jadi waktunya cukup.",
        "Di bait kedua, mainkan not rendah sedikit lebih keras daripada akor sesudahnya.",
      ],
      tricky: {
        3: "Jari 3, 4, dan 5 naik ke F. Lalu ibu jari bergeser naik ke D, dan jari 2 menahan E panjang.",
        10: "Ibu jari meninggalkan C terakhir dan mendarat di G rendah untuk bait berikutnya. Tangan kiri memainkan C, lalu D dan F.",
        12: "Not yang sama seperti birama 3, kini di atas bas dan akor yang bergantian.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan akor terurai bait kedua dengan tangan kiri saja.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi berdenting di atasnya.",
        "Di sini kedua tangan turun. Ibu jari kanan mendarat di G rendah, dan tangan kiri juga di sebuah G rendah.",
        "Ganti pedal setiap setengah birama, saat tangan kiri memulai akor baru.",
      ],
      tricky: {
        12: "Jari 3, 4, dan 5 naik ke F, dan ibu jari bergeser naik ke D. Tangan kiri berganti dari G ke C.",
        15: "Tangan kanan turun dari G ke C, lalu jari 5 menjangkau F di atas. Angkat tangan kiri setelah setiap akor.",
        17: "Tangan kanan pindah naik dari G rendah, agar jari 2 memainkan E. Tangan kiri berganti dari C ke F.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf rendah, lalu naik kembali ke akor.",
        "Mainkan arpeggio bait kedua dengan tangan kiri saja.",
        "Mainkan birama 13 sampai 15 dengan kedua tangan, pelan-pelan, tempat arpeggio mengalir di bawah cincin emas.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktaf rendahnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Di setiap arpeggio, jari 3 menyeberang di atas ibu jari saat naik.",
        "Biarkan oktaf G berbunyi sepanjang birama, seperti cincin emas yang diangkat ke arah cahaya.",
      ],
      tricky: {
        14: "Tangan kanan menahan oktaf G, sementara tangan kiri mengalirkan arpeggio G di bawahnya.",
        15: "Jari 5 memainkan G lagi, dan tangan turun ke C. Di bawahnya, arpeggio berganti dari G ke C, lalu F.",
        17: "Tangan kanan pindah naik dari G, agar jari 2 memainkan E. Tangan kiri berganti dari C ke F.",
      },
    },
  },
};
