/** The guide of *Sarabande in D minor* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Handel menulis suite untuk harpsikord ini saat usianya awal dua puluhan, dan suite ini pertama kali diterbitkan pada tahun 1733. " +
    "Sarabande-nya adalah tarian yang lambat dan khidmat, dengan tiga ketukan. " +
    "Film Barry Lyndon (1975) karya Stanley Kubrick memakainya dalam aransemen untuk orkestra.",
  funFact: "Nomor katalog suite ini, HWV 437, berasal dari Händel-Werke-Verzeichnis, daftar semua karya Handel.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 4 sampai 8. Di birama 4, ibu jari naik ke A.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not rendah di setiap birama.",
        "Gabungkan kedua tangan pada 8 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Hitung tiga ketukan yang lambat di setiap birama. Not pendeknya datang tepat sebelum birama berikutnya.",
        "Ini tarian yang lambat dan agung. Mainkan setiap not panjang dengan tenang dan penuh.",
        "Jaga ibu jari tetap dekat dengan A dan C kres. Jari 2 sampai 4 berjalan naik ke F, lalu kembali.",
      ],
      tricky: {
        4: "Pakai tanda istirahat untuk memindahkan ibu jari kanan naik ke A. Ibu jari tetap di sana sampai birama 8.",
        9: "Setelah tanda istirahat, tangan kanan kembali turun. Jari 2 mendarat di F.",
        12: "Seperti di birama 4, pakai tanda istirahat untuk memindahkan ibu jari kanan naik ke A.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Satu not rendah datang lebih dulu, lalu akor dua not menjawabnya.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan, dengan pedal.",
        "Mainkan bagian akhirnya, tempat tangan kiri berganti akor pada setiap ketukan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Injak pedal selama satu birama penuh, lalu ganti tepat di garis birama.",
        "Mainkan not rendah sedikit lebih keras daripada akor sesudahnya. Not itulah yang membawa tariannya.",
        "Tidak ada pedal di dua birama ini, agar akornya tetap bersih. Tahan setiap akor dengan jarimu.",
      ],
      tricky: {
        3: "Pakai tanda istirahat yang pendek untuk melompatkan tangan kiri turun ke F. Jari 5 memainkannya.",
        6: "Pakai tanda istirahat untuk memindahkan tangan kiri kembali naik. Jari 4 memainkan D.",
        9: "Tangan kiri naik ke D, dan tangan kanan kembali turun ke F.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan not seperti satu not.",
        "Gabungkan kedua tangan pada 4 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut dan rata, agar melodi yang lambat bernyanyi di atasnya.",
        "Di akhir birama ini, bas berpindah ke D mayor. Ganti pedal di situ.",
        "Melodinya adalah not teratas setiap terts, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        11: "Mainkan F dan A dengan jari 2 dan 4, agar jari 3 dan 5 siap untuk G dan B mol.",
        15: "Mainkan dulu not-not birama ini dengan pelan. Jarinya berganti di setiap not.",
        16: "Bentangkan tangan kanan di atas F, A, dan D dengan jari 1, 2, dan 5.",
      },
    },
    legendary: {
      practice: [
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodinya.",
        "Mainkan tangan kiri saja pada 8 birama pertama. Angkat tangan sebelum setiap lompatan.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Mainkan not teratas setiap akor sedikit lebih keras daripada not lainnya.",
        "A sengaja bergesekan dengan B mol di bas. Biarkan terasa perih sejenak, lalu lanjutkan.",
        "Angkat tangan kanan sedikit lebih awal sebelum setiap akor baru, agar mendarat tepat waktu.",
      ],
      tricky: {
        9: "Di sini melodi melompat naik satu oktaf. Daratkan jarimu di keempat not bersamaan.",
        14: "Setelah akor besar, jari 2 memainkan A tinggi, dan jari 5 meraih ke atas sampai D.",
        15: "Jarinya berganti di setiap not birama ini. Latih birama ini sendiri dengan pelan.",
      },
    },
  },
};
