/** The guide of *Piano Concerto No. 21: Andante* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart menyelesaikan konserto ini pada 9 Maret 1785, empat minggu setelah konserto sebelumnya. " +
    "Bagian lambatnya, Andante, menyanyikan melodi panjang di atas akor berulang yang lembut. " +
    "Film Elvira Madigan (1967) memutarnya, dan kini konserto ini dikenal luas dengan nama itu.",
  funFact: "Mozart menyelesaikan konserto ini hanya empat minggu setelah Konserto Piano No. 20 miliknya.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 3 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 4 sampai 8 dengan tangan kanan saja.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not atau satu kuint kosong dalam waktu lama.",
        "Gabungkan kedua tangan, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan F pertama selama tujuh ketukan. C pendek datang tepat sebelum not panjang berikutnya.",
        "Jari 4 menahan C tinggi. Lalu jari 5, 4, 3, dan 2 memainkan empat not cepat.",
        "Mainkan dengan lembut dan halus, seolah kamu sedang menyenandungkan lagu ninabobo.",
      ],
      tricky: {
        1: "Lepaskan C pendek sedikit lebih awal. Lalu jangkau A di atas dengan jari 5.",
        4: "Ibu jari kanan mendarat di C setelah tanda istirahat. Di tengah birama, tangan kiri turun ke G.",
        5: "Jari 3 naik dari G ke B mol. Lalu jari 5, 4, dan 3 memainkan D, C, dan B mol.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 6 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Satu not rendah datang lebih dulu, lalu akor menjawabnya tiga kali.",
        "Gabungkan kedua tangan pada birama 1 sampai 6, pelan-pelan.",
        "Mainkan bagian penutup mulai birama 13, tempat tangan kiri menemukan dua akor baru.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan akor dengan lembut, agar melodi bernyanyi di atasnya seperti suara orang.",
        "F kres condong naik ke G. Beri masing-masing empat ketukan, lalu beristirahat.",
        "Angkat tangan kiri sejenak sebelum setiap akor baru. Lalu tangan kiri mendarat di tempat barunya.",
      ],
      tricky: {
        5: "Jari 3 naik dari G ke B mol. Lalu jari 5, 4, dan 3 memainkan D, C, dan B mol.",
        14: "Tangan kiri pindah ke B mol dengan jari 5. D dan F ada di atasnya.",
        15: "Tangan kiri kembali ke C dengan jari 2. Pakai tanda istirahat pendek sebelumnya.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja. Setiap akor mengalir naik dalam kelompok tiga not: rendah, tengah, tinggi.",
        "Mainkan tangan kanan saja pada birama 7 sampai 12, tempat sekst dan terts bergabung dengan melodi.",
        "Gabungkan kedua tangan pada 6 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Hitung tiga not yang rata di tangan kiri untuk setiap ketukan. Not-not itu harus beriak dengan lembut.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
        "Ganti pedal di setiap garis birama, saat not bas yang baru berbunyi.",
      ],
      tricky: {
        5: "Jari 3 naik dari G ke B mol. Di bawahnya, tangan kiri terus mengalirkan C, E, dan B mol.",
        7: "Ibu jari di A, di bawah F. Lalu ibu jari naik ke C, dan jari 2 dan 5 memainkan F dan A.",
        9: "Setelah F kres, ibu jari bergeser turun ke E, dan jari 2 memainkan G bersamanya.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja pada birama 1 sampai 6. Lompat turun ke oktaf rendah, lalu naik kembali ke akor.",
        "Mainkan arpeggio panjang tangan kiri saja, pada birama 7 sampai 12.",
        "Mainkan tangan kanan saja mulai birama 7, tempat melodi naik satu oktaf.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Angkat tangan kiri setelah setiap oktaf rendah. Tanda istirahat pendek memberimu waktu untuk menjangkau akor.",
        "Di setiap arpeggio, ibu jari menyusup saat turun, dan jari 3 menyeberang saat naik.",
        "Bentangkan tangan kanan di atas akor terakhir, lalu biarkan terus berbunyi dengan pedal.",
      ],
      tricky: {
        2: "Jari 4 menahan C tinggi di atas bas yang dipetik. Lalu jari 5, 4, 3, dan 2 memainkan empat not cepat.",
        5: "Jari 3 naik dari G ke B mol, sementara tangan kiri terus memetik C rendahnya.",
        6: "Mainkan G kres dengan jari 2 dan A dengan jari 4. Tangan kiri melompat turun ke oktaf F rendah.",
      },
    },
  },
};
