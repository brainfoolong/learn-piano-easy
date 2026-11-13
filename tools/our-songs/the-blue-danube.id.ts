/** The guide of *The Blue Danube* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Johann Strauss II menulis wals ini pada 1866 dan 1867 untuk sebuah paduan suara pria di Wina. " +
    "Versinya untuk orkes saja menjadi lagu populer di Pameran Dunia di Paris pada 1867. " +
    "Dalam film 2001: A Space Odyssey (1968), pesawat-pesawat antariksa berlabuh diiringi musik ini.",
  funFact: "Sudah menjadi tradisi, Filharmoni Wina memainkannya menjelang akhir Konser Tahun Baru setiap tahun.",
  versions: {
    common: {
      practice: [
        "Mainkan 3 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Latih lompatan oktaf: ibu jari di not rendah, lalu angkat tangan saat tanda istirahat pendek, dan daratkan jari 5 satu oktaf lebih tinggi.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu kuint kosong atau satu not bas di setiap kelompok tiga ketukan.",
        "Gabungkan kedua tangan pada 8 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan ibu jari di C tengah. C, E, dan G yang naik dimainkan dengan jari 1, 2, dan 3.",
        "Pada G yang diulang, ganti dari jari 3 ke ibu jari, agar jari 5 sampai ke G tinggi.",
        "Beri tekanan pada ketukan pertama dari setiap tiga ketukan, dan mainkan dua lainnya dengan ringan. Itulah rasa wals.",
      ],
      tricky: {
        6: "Letakkan ibu jari di A, lalu angkat tangan saat tanda istirahat pendek, dan daratkan jari 5 di A di atasnya.",
        12: "Di sini melodi sampai ke C tinggi. Di tangan kiri, jari 2 menahan C saja, agar jari 5 bisa mengambil F rendah.",
        13: "Angkat jari 4 dari A tinggi, lalu daratkan ibu jari di A satu oktaf lebih rendah. Tangan kiri naik ke D dan A.",
      },
    },
    rare: {
      practice: [
        "Mainkan 8 birama pertama dengan tangan kanan saja, pelan-pelan.",
        "Mainkan tangan kiri saja: satu not bas, lalu akornya dua kali. Saat tangan kanan beristirahat, tangan kiri naik melalui not-not rendah.",
        "Gabungkan kedua tangan pada 4 birama pertama, tempat melodi berpindah dari tangan kanan ke tangan kiri, lalu kembali.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Hitung “satu, dua, tiga” di setiap setengah birama. Bas jatuh di setiap “satu”.",
        "Tangan kanan beristirahat selagi tangan kiri naik. Lalu ibu jari mendarat di D, dan jari 5 menjangkau D satu oktaf lebih tinggi.",
        "G kres adalah tuts hitam. Ambil dengan ibu jari, lalu jari 2 memainkan A.",
      ],
      tricky: {
        12: "Tangan kanan merentang satu oktaf dari D ke D tinggi. Tangan kiri turun ke B untuk akor G.",
        15: "Angkat tangan setelah A, lalu daratkan jari 5 di F kres tinggi. Tangan kiri melompat turun ke A.",
        16: "Ibu jari memainkan F kres, lalu turun ke E. Tangan kiri melompat turun ke A lagi.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas wals saja: not rendah, lalu akornya dua kali, ringan dan pendek.",
        "Mainkan terts dan sekst tangan kanan saja. Tekan kedua not setiap pasangan bersamaan.",
        "Gabungkan kedua tangan pada birama 1 sampai 9, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan akor dengan lembut dan pendek, agar melodi melayang di atasnya.",
        "Ganti pedal di setiap garis birama, saat not bas yang baru berbunyi.",
        "Tangan terangkat setelah A, lalu ibu jari mendarat di D di atasnya.",
      ],
      tricky: {
        21: "Lepaskan pasangan not sedikit lebih awal, lalu jatuhkan ibu jari ke D rendah.",
        26: "Mainkan E, G, dan B yang naik dengan jari 1, 2, dan 4. Lalu ibu jari dan jari 3 menahan G dan B.",
        34: "Bentangkan tangan untuk akor terakhir: ibu jari di F kres, jari 2 di A, dan jari 5 di D.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas oktaf saja: lompat turun ke oktaf, lalu naik kembali ke akor.",
        "Mainkan oktaf tangan kanan saja. Biarkan tangan terbuka, dengan ibu jari dan jari 5 siap.",
        "Gabungkan kedua tangan pada birama 18 sampai 25, tempat melodi sampai ke not-not tertingginya.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pada bas oktaf, lihat not rendahnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Ibu jari dan jari 5 mengambil setiap oktaf. Pertahankan posisi tangan itu selagi tangan bergerak.",
        "Biarkan not teratas setiap oktaf bernyanyi, dan buat ibu jari lebih ringan.",
      ],
      tricky: {
        8: "Oktaf turun dari A ke G. Pertahankan posisi tangan, dan gerakkan tangan sebagai satu kesatuan.",
        24: "Lepaskan oktaf D sedikit lebih awal, lalu mendarat di oktaf B dengan posisi yang sama.",
        29: "Tangan terbuka dari A ke oktaf F kres. Angkat tangan, lalu mendarat di kedua not bersamaan.",
      },
    },
  },
};
