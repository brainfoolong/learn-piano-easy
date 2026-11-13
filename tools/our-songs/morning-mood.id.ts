/** The guide of *Morning Mood* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg menulis Morning Mood pada 1875 untuk drama Peer Gynt karya Ibsen, dan menerbitkannya dalam Suite Peer Gynt pertamanya pada 1888. " +
    "Melodinya hanya memakai lima not dari tangga nada, dan berpindah-pindah antara flute dan obo. " +
    "Film Soylent Green dari 1973 memutarnya saat seorang yang sekarat mendengarkan musik pilihannya.",
  funFact:
    "Musik ini melukiskan matahari terbit di gurun Maroko, bukan di atas fyord Norwegia seperti yang dibayangkan kebanyakan pendengar.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 9 sampai 16 dengan tangan kanan saja. Tanganmu tetap di tempat yang sama.",
        "Sekarang tangan kiri saja. Tangan kiri menahan setiap posisi selama satu birama penuh.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jari kananmu ada di C tengah, dan jari 5 mulai di G. Jari 2 dan 3 bersiap di D dan E.",
        "Setelah C pertama, empat not pendek bergoyang di antara D dan E. Hitung dengan rata.",
        "Mainkan dengan lembut, seperti matahari yang terbit perlahan. Biarkan setiap not mengalir ke not berikutnya.",
      ],
      tricky: {
        5: "Di sini jari 2 memainkan E, dan jari 4 memainkan G. Dengan begitu, jari 5 bebas untuk A tinggi di birama 6.",
        6: "Jari 5 memainkan A, dan jari 2 memainkan E. Biarkan tanganmu tetap terbuka di antara keduanya.",
        7: "Jari 5 mundur dari A ke G. Tangan kiri pindah ke D dan G di tengah birama.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah, lalu akor dua not dua kali. Tanganmu tetap diam.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri bermain di setiap ketukan. Hitung “1, 2, 3” dua kali di setiap birama.",
        "Mainkan akor tangan kiri dengan lembut, agar melodi melayang di atasnya seperti cahaya pagi.",
        "Akhiri dengan G dan B bersamaan. Jari 1 dan 3 menekan keduanya seperti satu not.",
      ],
      tricky: {
        5: "Di sini jari 2 memainkan B, dan jari 4 memainkan D. Dengan begitu, jari 5 bebas untuk E tinggi di birama 6.",
        7: "Jari 5 mundur dari E ke D. Tangan kiri pindah ke A dan D di tengah birama.",
        9: "Tangan kiri menjaga jari 5 tetap di G. Jari 4 dan 2 pindah ke A dan C untuk akor yang baru.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan seperti satu not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Di birama buatan kami sendiri, tanganmu berpindah-pindah. Lihat ke depan, ke jari pertama setiap birama.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        7: "Di tengah birama, tangan kiri berganti ke pola bas Alberti A mayor, dengan jari 5 di A rendah.",
        11: "Lima not berjalan turun dari B ke D, satu jari untuk setiap not. Lalu jari 2 naik kembali ke E.",
        24: "Pakai tanda istirahat pendek untuk membentangkan tangan kanan di atas F kres, A, dan D, siap memainkan akor terakhir.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor dua kali, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Arpeggio naik dua oktaf, lalu turun kembali.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke posisi berikutnya.",
        "Biarkan arpeggio mengalir lembut di bawah melodi, dan ganti pedal di setiap akor baru.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada not lainnya.",
      ],
      tricky: {
        6: "Tangan kiri melompat ke C kres dan tinggal di sana selama satu birama penuh. Tangan kanan memainkan C kres dengan jari 5 dan G kres dengan jari 2.",
        22: "Kedua C kres membentuk satu oktaf, dengan E dan G kres di antaranya. Biarkan tanganmu terbentang selama satu birama penuh.",
        23: "Tiga posisi datang berurutan: E mayor, lalu B dan G kres, lalu B mayor. Tangan kiri pindah ke B di tengah birama.",
      },
    },
  },
};
