/** The guide of *Kommet, ihr Hirten* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Judul Jerman Kommet, ihr Hirten berarti “Datanglah, para gembala”. " +
    "Lagu ini berasal dari Bohemia, tempat judulnya dalam bahasa Ceko adalah Nesem vám noviny. " +
    "Melodinya pertama kali dicetak pada tahun 1847, dalam sebuah buku himne Katolik di Olomouc. " +
    "Carl Riedel, seorang dirigen dari Leipzig, menulis lirik Jermannya secara bebas dari lirik aslinya, lalu pertama kali mencetaknya pada tahun 1870.",
  funFact: "Ahli musik Konrad Ameln memperkirakan melodi ini berasal dari sekitar tahun 1700, hanya dari gayanya.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 9 sampai 12 dengan tangan kanan saja. Ibu jari turun ke G rendah.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap birama dimulai dengan G panjang senilai dua ketukan, lalu empat not pendek yang masing-masing senilai satu ketukan.",
        "Tangan kiri menahan C dan G seperti nada dengung bagpipe. Biarkan berbunyi di bawah melodi.",
        "Di sini jari 2 memainkan C, agar ibu jari bebas untuk G rendah di birama 10.",
      ],
      tricky: {
        9: "Jari 2 mengambil alih C dari ibu jari. Lalu jari 4 dan 5 memainkan E dan G.",
        11: "Sama seperti birama 9: jari 2 di C, jari 4 di E, dan jari 5 di G.",
        13: "Jari 5 mendarat di G tinggi. Lalu jari 2 dan 4 memainkan E dan G, dan ibu jari memainkan D.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: C rendah, lalu dua akor di setiap birama.",
        "Mainkan birama 9 sampai 14 dengan tangan kiri saja. Di sana akornya lebih sering berganti.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Di sebagian besar birama, tangan kiri memainkan C pada ketukan 1, lalu satu akor di masing-masing dua ketukan lainnya.",
        "Mainkan C rendah sedikit lebih kuat daripada akornya, seperti nada dengung bagpipe.",
        "Melodi melompat dari G rendah naik ke G tinggi. Jari 4 meregang sejauh satu oktaf penuh.",
      ],
      tricky: {
        13: "Ibu jari meninggalkan G rendah, dan jari 4 meraih satu oktaf ke atas sampai G tinggi.",
        27: "Rentangan oktaf yang sama dengan birama 13. Biarkan pergelangan tangan tetap lemas saat tangan terbuka.",
        28: "Untuk akor terakhir, ibu jari turun ke G dan jari 2 memainkan C, bersamaan.",
      },
    },
    epic: {
      practice: [
        "Mainkan akor terurai saja sampai mengalir dengan sendirinya: rendah, tengah, tinggi, tengah.",
        "Mainkan melodi tangan kiri saja, mulai birama 15.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan akor terurai dengan lembut, agar melodi bernyanyi di atasnya.",
        "Sekarang melodi ada di tangan kiri. Mainkan dengan jelas, dan mainkan akor tangan kanan dengan lembut.",
        "Ganti pedal di setiap ketukan.",
      ],
      tricky: {
        9: "Tangan kiri melompat ke A untuk akor A minor, sementara jari 2 tangan kanan memainkan C.",
        11: "Dua ketukan A minor, lalu tangan kiri terangkat dan mendarat lagi di C rendah.",
        15: "Kedua tangan bertukar tugas. Tangan kiri memulai melodi di G, dan tangan kanan memainkan akor.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf rendah, lalu kembali naik ke akor.",
        "Mainkan birama 1 sampai 9 dengan tangan kanan saja, dan mainkan rentetan not cepat dengan ringan.",
        "Mainkan arpeggio tangan kiri saja, pada putaran kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Saat bermain stride, lihat oktaf rendahnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Rentetan not cepat naik melewati D, E, dan F, lalu tangan terangkat dan mendaratkan jari 4 di G.",
        "Jaga jarak ibu jari dan kelingking tetap satu oktaf. Tanda istirahat yang pendek memberi tangan waktu untuk melompat.",
      ],
      tricky: {
        19: "Oktafnya melompat naik ke A, lalu turun lagi ke F. Angkat tangan di setiap tanda istirahat pendek.",
        24: "Oktafnya bergerak ke C, E, C, dan D, lalu turun ke G rendah. Biarkan pergelangan memantul.",
        26: "Sama seperti birama 24. Lalu tangan melompat satu oktaf penuh ke atas, sampai G tinggi.",
      },
    },
  },
};
