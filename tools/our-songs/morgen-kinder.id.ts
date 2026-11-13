/** The guide of *Morgen, Kinder, wird's was geben* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Judul bahasa Jerman Morgen, Kinder, wird's was geben berarti “Besok, anak-anak, akan ada sesuatu”. " +
    "Lirik karya Karl Friedrich Splittegarb pertama kali dicetak pada 1795. " +
    "Carl Gottlieb Hering menggubahnya dengan melodi ini pada 1809, di sebuah sekolah menyanyi untuk anak-anak. " +
    "Lagu ini bercerita tentang anak-anak yang menanti hadiah mereka, dan sama sekali tidak menyebut kelahiran Yesus.",
  funFact:
    "Pada 1927 Erich Kästner menulis parodi tentang anak-anak miskin, yang dimulai dengan Morgen, Kinder, wird's nichts geben: “tidak akan ada apa-apa”.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan 4 birama terakhir dengan tangan kanan saja, tempat melodi naik sampai A tinggi.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu kuint, atau satu F saja.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Empat not cepat di birama 2 adalah yang terpendek dalam lagu ini. Hitung dengan rata: “1, 2, 3, 4”.",
        "Birama 2 berakhir dengan G pendek dan tanda istirahat. Pakai tanda istirahat itu untuk membuka tanganmu sampai ke E.",
        "Ibu jari memainkan C pertama dan jari 2 memainkan C kedua, agar jari 5 bisa menjangkau F.",
      ],
      tricky: {
        3: "Setelah tanda istirahat, jari 3 memainkan E dua kali. Jari 4 dan 5 naik ke F dan G, lalu jari 4 kembali ke E.",
        7: "Sama seperti birama 3: jari 3 di E, lalu jari 4 dan 5 naik ke F dan G.",
        8: "Jari 5 dan 4 memainkan F dan E, lalu jari 2 memainkan D. Dengan begitu, jari 3 siap untuk F di birama 9.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan tangan kanan saja pada 8 birama pertama, yaitu frasa pembuka.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan setiap akor dengan lembut selama satu birama penuh, agar melodi tetap terdengar di atas.",
        "Birama 4 berakhir di G rendah, dan birama 5 dimulai tinggi di E. Lihat E itu sebelum kamu memainkan G.",
        "Ibu jari memainkan C pertama dan jari 2 memainkan C kedua, agar jari 5 bisa menjangkau F.",
      ],
      tricky: {
        5: "Setelah G yang dimainkan ibu jari, jari 3 melompat naik ke E tanpa jeda. Jaga ibu jari tetap ringan, agar tanganmu bisa terbuka.",
        6: "Jari 5 memainkan G tinggi, lalu jari 4 kembali ke E di atas akor C.",
        14: "Sama seperti birama 6: jari 5 di G tinggi, lalu jari 4 di E.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan akor terurai saja, pada putaran kedua, naik lalu turun kembali.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Tangan kanan beristirahat selama satu not seperempat di akhir birama 12, lalu melompat naik satu oktaf.",
        "Ganti pedal di setiap setengah birama, saat tangan kiri memulai akor baru.",
      ],
      tricky: {
        13: "Melodi dimulai lagi satu oktaf lebih tinggi. Jari 2 memainkan C tinggi, dan ibu jari turun ke G.",
        23: "Ibu jari memainkan C pertama dan jari 2 memainkan C kedua, agar jari 5 bisa menjangkau F tinggi.",
        24: "Jari 4, 3, 2, dan 1 berjalan turun ke B, lalu jari 2 berhenti di C di atas akor terakhir.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf, lalu naik kembali ke akor.",
        "Mainkan oktaf tangan kanan saja, dan angkat tanganmu di setiap tanda istirahat pendek.",
        "Mainkan arpeggio tangan kiri saja, pada putaran kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Saat memainkan stride, lihat oktaf rendah dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Jaga jarak ibu jari dan kelingking tetap satu oktaf. Tanda istirahat pendek memberi tanganmu waktu untuk melompat.",
        "Bentangkan tanganmu di atas C, E, G, dan C untuk akor terakhir, lalu biarkan terus berbunyi.",
      ],
      tricky: {
        4: "Jari 3 menahan D yang panjang, sementara tangan kiri melompat dari G rendah ke akornya, lalu kembali.",
        8: "Kali ini jari 2 memainkan D yang panjang, agar jari 3 siap untuk F di birama 9.",
        9: "Jari 3 memainkan F dua kali dan jari 5 memainkan A dua kali, sementara bas stride turun ke F rendah.",
      },
    },
  },
};
