/** The guide of *Moonlight Sonata* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven menulis sonata ini pada 1801 dan menerbitkannya pada 1802, dengan persembahan untuk Countess Giulietta Guicciardi. " +
    "Nama “Moonlight”, yang berarti “Cahaya Bulan”, berasal dari kritikus Ludwig Rellstab, setelah Beethoven wafat. " +
    "Film Immortal Beloved (1994), tentang kehidupan Beethoven, memutar karya ini.",
  funFact:
    "Beethoven meminta seluruh bagian ini dimainkan dengan sangat halus, dengan peredam diangkat: “senza sordino”.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 4 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja, tempat melodi naik dan turun.",
        "Sekarang tangan kiri saja. Di setiap birama, tangan kiri menahan satu not atau satu kuint kosong.",
        "Gabungkan kedua tangan, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan A pertama lama, lalu mainkan A pendek tepat sebelum A panjang berikutnya.",
        "Mainkan dengan sangat lembut. Musik ini harus terdengar seperti cahaya bulan di atas danau yang tenang.",
        "Tangan kanan beristirahat di sini. Dengarkan tangan kiri dan hitung empat ketukan pelan.",
      ],
      tricky: {
        2: "Tangan kiri turun dari D dan A ke A dan E. Jari 5 memainkan A rendah.",
        5: "Tangan kiri menjangkau turun ke G dengan jari 5, dan ibu jari tetap di D.",
        10: "Tangan kiri naik dari F ke G. Tangan kanan kembali dengan jari 2 di G.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Not rendah datang lebih dulu, lalu akor dua not menjawabnya.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan, dengan pedal.",
        "Mainkan paruh kedua, tempat melodi kembali satu oktaf lebih tinggi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Injak pedal selama satu birama penuh, lalu ganti pedal tepat di garis birama.",
        "A bertitik berbunyi tiga kali panjangnya A pendek sesudahnya.",
        "Di nada tinggi, mainkan lebih lembut lagi. Melodinya harus bersinar seperti bulan.",
      ],
      tricky: {
        4: "Mainkan D dengan jari 5 tangan kiri, lalu F dan A bersamaan dengan jari 2 dan 1.",
        10: "Pakai tanda istirahat di birama 9 untuk memindahkan tangan kanan satu oktaf ke atas. Jari 3 mendarat di A tinggi.",
        19: "Bentangkan tangan kiri di atas D, F, dan A dengan jari 5, 3, dan 1. Tangan kanan memainkan F dan A bersamaan.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja. Setiap akor mengalir naik dalam kelompok tiga not: rendah, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan seperti satu not.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan kelompok tiga not yang mengalir itu dengan lembut dan rata, agar melodi melayang di atasnya.",
        "A pendek berbunyi selama satu kelompok tiga not. Hitung kelompok tiganya, dan A itu akan mendarat dengan sendirinya.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        17: "Bentangkan tangan kanan selebar sekst, dengan ibu jari di A dan kelingking di F.",
        18: "Akor berganti di tengah birama ini. Ganti pedal di situ juga.",
        19: "Bentangkan tangan kiri selebar satu oktaf penuh: jari 5 di D rendah, ibu jari di D di atasnya.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja. Ibu jari menyusup dan jari 3 menyeberang, sehingga setiap arpeggio mencakup dua oktaf.",
        "Mainkan oktaf tangan kanan saja. Biarkan tanganmu terbuka, dengan ibu jari dan kelingking siap.",
        "Mainkan bagian penutup pelan-pelan. Tangan kiri menyeberang di atas tangan kanan untuk tiga not tinggi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan not-not terakhir terus berbunyi.",
      ],
      tips: [
        "Di setiap arpeggio, ibu jari menyusup saat turun, dan jari 3 menyeberang saat naik.",
        "Biarkan kelingking menyanyikan not teratas setiap oktaf sedikit lebih keras.",
        "Selagi tangan kanan menahan akornya, layangkan tangan kiri di atasnya seperti seberkas cahaya bulan.",
      ],
      tricky: {
        10: "Mulai dari sini, tangan kanan memainkan oktaf. Ibu jari dan kelingking mendarat bersamaan di kedua tuts G kres.",
        17: "Tangan kiri memulai arpeggionya di E rendah. Pakai tanda istirahat di akhir birama 16 untuk sampai ke sana.",
        19: "Tahan akor tangan kanan, lalu bawa tangan kiri menyeberang di atasnya untuk memainkan G kres, C kres, dan E.",
      },
    },
  },
};
