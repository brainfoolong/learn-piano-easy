/** The guide of *The Sorcerer's Apprentice* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Paul Dukas menyelesaikan puisi simfoni ini pada 1897, dan karya ini diterbitkan pada tahun yang sama. " +
    "Karya ini mengikuti puisi Goethe dari tahun 1797, Der Zauberlehrling. " +
    "Dalam film Fantasia (1940) karya Walt Disney, Mickey Mouse memerankan sang murid penyihir.",
  funFact:
    "Dukas memberinya anak judul scherzo berdasarkan sebuah balada karya Goethe. " +
    "Karya ini jauh lebih sering dipentaskan dan direkam daripada karya-karyanya yang lain.",
  versions: {
    common: {
      practice: [
        "Mainkan 3 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 4 sampai 10 dengan tangan kanan saja. Tangan tetap di satu tempat.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu atau dua not rendah di setiap birama.",
        "Gabungkan kedua tangan pada 10 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan setiap not dengan pendek dan ringan, seperti sapu yang melompat-lompat. Tanda istirahat juga bagian dari melodi.",
        "Hitung “satu, dua, tiga”. Tanda istirahat jatuh pada “dua”, dan not tinggi pada “tiga”.",
        "Tangan tetap di tempatnya. Jari 2 sampai 5 berada di A, B, C, dan D.",
      ],
      tricky: {
        5: "Jari 5 baru saja memainkan C. Turunkan lagi jari 4 ke A, lalu jangkau C lagi.",
        7: "Setelah G kres dengan jari 2, jari 4 mengambil A. Tangan kiri pindah dari E kembali ke A dan E.",
        10: "Seperti di birama 7, jari 4 mengambil A setelah G kres. Lalu jari 5 menjangkau C di atas.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Satu not rendah datang lebih dulu, lalu akor dua not menjawabnya dua kali.",
        "Mainkan tangan kanan saja pada 10 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 6 birama pertama, pelan-pelan.",
        "Mainkan penutup buatan kami dengan kedua tangan, tempat not seperdelapan mulai masuk.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan melodi dengan pendek dan memantul. Lepaskan setiap not sebelum not berikutnya.",
        "Mainkan not rendah sedikit lebih keras daripada akor sesudahnya. Not itu menjaga ketukan.",
        "Dua not seperdelapan yang cepat masuk ke ketukan kedua. Hitung keduanya sebagai “satu” dan “dua”.",
      ],
      tricky: {
        7: "Jari 4 mengambil A setelah G kres. Tangan kiri turun dari akor E kembali ke A.",
        10: "Melodi berakhir di sini. Jari 4 mengambil A, dan tangan kiri kembali ke A.",
        11: "Not seperdelapan dimulai di sini. Jaga jari 4, 3, dan 2 tetap dekat dengan tutsnya.",
      },
    },
    epic: {
      practice: [
        "Mainkan akor terurai tangan kiri saja sampai mengalir dengan sendirinya.",
        "Mainkan tangan kanan saja pada 10 birama pertama. Mainkan setiap not dengan pendek.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan sebagai satu.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan akor terurai dengan lembut dan rata, agar melodi yang melompat-lompat menonjol di atasnya.",
        "Ibu jari mendarat di A rendah setelah tanda istirahat. Lalu jari 2 dan 3 naik.",
        "Turun dari jari 5 ke ibu jari, satu tuts setiap jari, lalu jari 3 melompat kembali ke D.",
      ],
      tricky: {
        7: "Tangan kiri melompat naik dari E ke D untuk akor terurainya. Di tangan kanan, jari 4 mengambil D.",
        10: "Seperti di birama 7, tangan kiri melompat naik ke D, sementara tangan kanan memainkan D dan F.",
        16: "Bentangkan tangan kanan di atas F, A, dan D, lalu turunkan tangan kiri ke D rendah.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja. Satu oktaf rendah datang lebih dulu, lalu dua akor pendek.",
        "Mainkan tangan kanan saja pada 10 birama pertama. Lepaskan setiap not seketika.",
        "Mainkan rentetan not cepat tangan kanan saja, empat not seperenambelas di setiap ketukan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Kedua tangan bermain pendek dan kering. Sapu itu berjingkat dulu sebelum mulai berlari.",
        "Biarkan pergelangan tangan kiri memantul dari oktaf rendah naik ke akor.",
        "Setiap rentetan not cepat muat di bawah lima jari. Biarkan tangan diam, dan biarkan jari-jari bergulir.",
      ],
      tricky: {
        6: "Jari kanan turun ke G, F, dan E, masing-masing pendek. Tangan kiri melompat naik ke akornya.",
        12: "Lompat kembali ke ibu jari di B mol, lalu berlari naik ke E dengan not seperenambelas yang rata.",
        16: "Daratkan keempat not akor terakhir bersamaan, lalu turunkan tangan kiri ke F rendah.",
      },
    },
  },
};
