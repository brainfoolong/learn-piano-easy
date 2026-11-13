/** The guide of *Blow the Man Down* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Blow the Man Down adalah lagu pelaut untuk menarik tali layar, dinyanyikan saat awak kapal menarik layar yang berat ke puncak tiangnya. " +
    "Melodi kami mengikuti cetakan R. R. Terry tahun 1921.",
  funFact:
    "Sebuah surat kabar di Syracuse, New York, mengutip satu baris lagu ini pada tahun 1867. " +
    "Para pelaut telah menyanyikannya di kapal uap dari New York ke Glasgow.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 7 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 8 sampai 17 dengan tangan kanan saja. Tangan berpindah dua kali, setiap kali setelah not panjang.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu atau dua not selama satu birama penuh.",
        "Gabungkan kedua tangan pada 7 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan ibu jari di G. Jari 2 memainkan B, jari 4 memainkan D, dan jari 5 memainkan E.",
        "Tahan D pertama selama tiga ketukan, lalu mainkan E selama satu ketukan. E yang pendek itu menarik seperti tali.",
        "Para pelaut menyanyikan lagu ini sambil menarik layar. Beri sedikit tekanan pada not pertama setiap birama, seperti tarikan.",
      ],
      tricky: {
        8: "Setelah E yang panjang, tangan berpindah ke bawah. Jari 4 mendarat di C, dan ibu jari menunggu di atas F kres.",
        13: "Jari 4 menjangkau naik dari A ke E, dan jari 5 memainkan G tinggi.",
        14: "Setelah G tinggi, jari 5 pindah turun ke D. Jari itu memainkan D tiga kali: pendek, panjang, lalu sedang.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah yang panjang, lalu satu akor pendek.",
        "Mainkan tangan kanan saja pada 7 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 8 sampai 17, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri memainkan panjang, pendek, panjang, pendek di setiap birama. Biarkan melodi melaju di atasnya seperti perahu di atas ombak.",
        "Tekan kedua not setiap akor seperti satu not. Not teratas adalah melodinya, jadi buat sedikit lebih keras.",
        "Dua not seperdelapan yang cepat mengisi satu ketukan. Ucapkan “ta-rik” untuk setiap pasangan.",
      ],
      tricky: {
        8: "Setelah akor C dan E, tangan berpindah ke bawah. Jari 4 mendarat di C. Tangan kiri memainkan D, lalu A dan D bersamaan.",
        13: "Jari 4 menjangkau naik dari A ke E, dan jari 5 memainkan G tinggi. Tangan kiri memainkan C, lalu G dan C bersamaan.",
        14: "Jari 5 pindah turun dari G tinggi ke D dan memainkannya tiga kali. Jaga pergelangan tangan tetap lemas.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai akor terurai mengalir dengan sendirinya.",
        "Mainkan birama 18 sampai 24 dengan tangan kanan saja. Susupkan ibu jari saat naik.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Setelah G dengan jari 3, susupkan ibu jari ke A mol. Lalu jari 2 dan 3 menjangkau B mol dan C.",
        "Saat turun, jari 3 menyeberangi ibu jari ke F.",
      ],
      tricky: {
        14: "Setelah E mol tinggi, jari 5 pindah turun ke B mol dan memainkannya tiga kali.",
        18: "Susupkan ibu jari ke A mol, dan jaga rentetan not tetap mulus. Tangan kiri terus mengalir tanpa jeda.",
        21: "Tangan terentang selebar satu oktaf, dari E mol ke E mol. Lalu jari 4 dan 3 turun ke D dan C.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor dua kali, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan arpeggio tangan kiri saja. Saat naik, jari 3 menyeberangi ibu jari.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke yang berikutnya.",
        "Mainkan not teratas setiap akor besar sedikit lebih keras. Not itulah yang membawa melodi.",
        "Biarkan arpeggio mengalir dengan lembut, seperti ombak di bawah kapal.",
      ],
      tricky: {
        19: "Tangan kiri mulai dari A mol rendah, dan jari 3 menyeberangi ibu jari ke C.",
        22: "Ibu jari kanan tetap di dekat A mol, dan jari 5 merentang naik ke E mol di akhir.",
        24: "Pakai tanda istirahat untuk melompat turun ke B mol rendah. Tangan kanan naik dari F ke D, lalu berjalan kembali ke A mol.",
      },
    },
  },
};
