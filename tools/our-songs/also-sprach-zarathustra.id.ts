/** The guide of *Also sprach Zarathustra* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Richard Strauss menulis puisi simfonis ini pada 1896, terilhami sebuah buku karya filsuf Friedrich Nietzsche. " +
    "Fanfare pembukanya melukiskan matahari terbit, yang naik di atas C rendah yang ditahan panjang. " +
    "Film 2001: A Space Odyssey (1968) karya Stanley Kubrick dibuka dengan musik ini.",
  funFact:
    "Tiga not yang naik itu, C, G, dan C, adalah nada kedua, ketiga, dan keempat dari deret nada harmonik sebuah C rendah.",
  versions: {
    common: {
      practice: [
        "Mainkan 2 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Sekarang mainkan birama 3 sampai 8 dengan tangan kanan. Ibu jarimu tetap di dekat G.",
        "Mainkan tangan kiri saja. Tangan kiri menahan satu kuint kosong di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ini matahari terbit. Mainkan setiap not panjang dengan penuh, dan biarkan berbunyi sampai habis.",
        "Di sini E berubah menjadi E mol, dan bunyi yang cerah berubah menjadi gelap. Dengarkan perubahannya.",
        "Birama 3 tidak memakai C rendah, jadi ibu jarimu bisa menunggu di G.",
      ],
      tricky: {
        1: "Ibu jarimu memainkan C tengah, lalu pindah naik ke G. Pindahkan selama not yang panjang.",
        7: "Tangan kiri pindah turun ke G dan D. Tangan kanan bergerak dari D turun ke G.",
        8: "Kedua tangan pulang. Tangan kiri kembali ke C dan G, dan tangan kanan berakhir di E.",
      },
    },
    rare: {
      practice: [
        "Mainkan birama 3 sampai 6 dengan tangan kanan saja. Inilah melodi matahari terbit.",
        "Mainkan akor dua not tangan kanan saja, pada birama 9 sampai 16.",
        "Mainkan tangan kiri saja. Pada birama 7 dan 8, tangan kiri menabuh C dan G seperti timpani.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri mulai sendirian, seperti not orgel yang rendah sebelum fajar. Tahan selama dua birama.",
        "Mainkan not tabuhan dengan rata, satu pada setiap ketukan, dan sedikit lebih keras setiap kali.",
        "Not teratas setiap akor membawa melodinya. Mainkan sedikit lebih keras.",
      ],
      tricky: {
        3: "Ibu jarimu memainkan C tengah, lalu pindah naik ke G selama not yang panjang.",
        10: "Biarkan jari 2 di C, dan biarkan jari 5 di E memberi tempat untuk jari 4 di E mol.",
        15: "Di sini tangan kiri memainkan akor C penuh. Rentangkan jari 5, 3, dan 1 di atas C, E, dan G.",
      },
    },
    epic: {
      practice: [
        "Mainkan akor terurai tangan kiri saja, pada birama 9 sampai 12: C rendah, G, C, dan G.",
        "Mainkan tangan kanan saja pada birama 9 sampai 12, dan tekan kedua not setiap pasangan not sebagai satu.",
        "Gabungkan kedua tangan pada birama 9 sampai 12, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Tahan oktaf rendah sambil pedal diinjak. Bunyinya harus bergemuruh seperti orgel pipa yang besar.",
        "E yang cerah berubah menjadi E mol yang gelap. Mainkan E mol sedikit lebih lembut.",
        "Tabuh C dan G seperti timpani, dan makin keras menuju birama 9.",
      ],
      tricky: {
        3: "Tangan kanan masuk di C tengah saat tangan kiri pindah naik satu oktaf. Tanda istirahat di birama 2 memberinya waktu.",
        15: "Rentangkan tangan kanan di atas E, G, dan C tinggi. Tangan kiri menahan oktaf C di bawahnya.",
        16: "Kedua tangan melompat turun untuk akor terakhir. Pakai tanda istirahat pendek di akhir birama 15.",
      },
    },
    legendary: {
      practice: [
        "Mainkan oktaf tangan kanan saja, pada birama 9 sampai 12. Pertahankan posisi tanganmu dan gerakkan seluruh lengan.",
        "Mainkan tangan kiri saja. Tangan kiri berganti-ganti antara oktaf yang dalam dan tabuhan timpani yang beruntun.",
        "Gabungkan kedua tangan pada puncaknya, birama 13 sampai 16.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Kunci tanganmu dalam posisi oktaf, ibu jari dan kelingking. Lenganmu membawanya dari tuts ke tuts.",
        "Untuk akor empat not, pakai jari 1, 2, 3, dan 5. Jari 4 beristirahat.",
        "Setiap akor naik makin tinggi dan makin keras. Simpan bunyi paling kerasmu untuk akor C terakhir.",
      ],
      tricky: {
        11: "Tangan kanan melompat dari akor tinggi turun ke oktaf di C tengah. Pakai tanda istirahat sebelumnya.",
        13: "Pendakian dimulai di sini. Angkat tangan setelah setiap akor, dan biarkan pedal menyambung bunyinya.",
        14: "Pada ketukan 4, tangan kiri turun ke oktaf F rendah saat tangan kanan memainkan akor F-nya.",
      },
    },
  },
};
