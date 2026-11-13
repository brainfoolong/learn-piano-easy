/** The guide of *Clair de lune* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Clair de lune adalah bagian ketiga dari Suite bergamasque karya Debussy, yang ia mulai sekitar 1890 dan terbitkan pada 1905. " +
    "Judulnya berarti “cahaya bulan” dan berasal dari sebuah puisi karya Paul Verlaine. " +
    "Film Ocean's Eleven (2001) berakhir dengan karya ini, saat para pencuri menonton air mancur Bellagio.",
  funFact: "Partiturnya dibuka dengan tanda pianissimo dan “con sordina”, jadi pianis menginjak pedal kiri sejak not pertama.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 4 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Di sini melodinya berjalan turun.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not panjang atau satu kuint kosong di setiap birama.",
        "Gabungkan kedua tangan, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Segera angkat ibu jari dari G. Tanda istirahatnya memberimu waktu untuk melompat ke G tinggi.",
        "Mainkan dengan lembut, dan biarkan setiap not panjang memudar, seperti cahaya bulan di atas air.",
        "Di sini jari 2 dan 3 yang paling banyak bekerja. Jari 5 meraih ke atas untuk not tertinggi.",
      ],
      tricky: {
        1: "Mainkan G dengan ibu jari, lalu lompat satu oktaf ke atas ke G dengan jari 5.",
        5: "Tanganmu bergeser turun saat tanda istirahat di birama 4. Jari 3 mendarat di A.",
        7: "Mainkan E pertama dengan jari 3, bukan ibu jari. Dengan begitu jari 5 bebas untuk A.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Not rendah jatuh pada ketukan 1, dan kuint di atasnya pada ketukan 4.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan, dengan pedal.",
        "Mainkan paruh kedua lagu. Di sana melodinya kembali satu oktaf lebih tinggi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan pedal selama satu birama penuh, dan ganti tepat di garis birama.",
        "Hitung birama ini dalam not seperdelapan. E mulai di tengah ketukan 4.",
        "Di nada tinggi, mainkan lebih lembut lagi. Melodinya harus melayang seperti cahaya bulan.",
      ],
      tricky: {
        5: "Tanganmu bergeser turun saat tanda istirahat di birama 4. Jari 3 mendarat di A.",
        9: "Pakai tanda istirahat setelah B rendah untuk melompat jauh ke atas. Ibu jarimu mendarat di G.",
        13: "Seperti di birama 5, geser tangan turun saat tanda istirahat sebelumnya. Jari 3 mendarat di A.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja. Setiap akor terurai naik lalu turun, satu not pada setiap not seperdelapan.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan not seperti satu not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan akor terurai itu dengan lembut dan rata, agar melodi melayang di atasnya.",
        "Ganti pedal tiga kali di sini, sekali untuk setiap not bas baru.",
        "Melodinya adalah not atas dari setiap terts, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        3: "C dan E mulai di antara ketukan. Hitung birama ini dalam not seperdelapan: E mulai di tengah ketukan 4.",
        11: "Ritme yang sama dengan birama 3, kini dalam terts. Gerakkan jari 3 dan 5 bersamaan naik ke C dan E.",
        16: "Mainkan A dan C dengan jari 1 dan 3, lalu B dan D dengan jari 2 dan 4.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja. Ibu jari menyusup dan jari 3 menyeberang, sehingga setiap arpeggio merentang dua oktaf.",
        "Mainkan akor empat not tangan kanan saja, dan angkat tanganmu di antara setiap akor.",
        "Mainkan bagian akhir pelan-pelan. Tangan kiri menyeberang di atas tangan kanan untuk tiga not tinggi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Di setiap arpeggio, ibu jari menyusup saat turun, dan jari 3 menyeberang saat naik.",
        "Mainkan not teratas setiap akor sedikit lebih keras dari yang lain.",
        "Sambil tangan kanan menahan akornya, ayunkan tangan kiri melewatinya seperti orang yang membunyikan lonceng.",
      ],
      tricky: {
        13: "Di sini akor jatuh di setiap ketukan. Angkat tangan sedikit setelah setiap akor, dan biarkan pedal menyambungnya.",
        17: "Tahan akor tangan kanan, lalu seberangkan tangan kiri di atasnya untuk memainkan B, D, dan G.",
        18: "Angkat tangan kanan dari akornya, lalu bentangkan di atas C, E, G, dan C.",
      },
    },
  },
};
