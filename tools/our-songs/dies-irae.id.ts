/** The guide of *Dies irae* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Dies irae adalah nyanyian Latin abad pertengahan tentang Hari Penghakiman, yang dinyanyikan dalam Misa Requiem selama berabad-abad. " +
    "Sejak Berlioz, para komponis mengutipnya setiap kali musik mereka berbicara tentang kematian. " +
    "Bagian pembuka film The Shining (1980) karya Stanley Kubrick dibangun di atas melodi ini.",
  funFact: "Kata-kata pertamanya berarti “hari murka, hari itu”, dan baris pertamanya berakhir dengan dunia yang menjadi abu.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 3 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja mulai birama 8. Di sana ibu jari bergeser turun ke A.",
        "Sekarang tangan kiri saja. Tangan kiri tetap di satu tempat, dengan kelingking di D.",
        "Gabungkan kedua tangan pada 7 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan pelan dan rata, seperti para biarawan yang bernyanyi di gereja batu.",
        "Ibu jari kananmu ada di C. Setiap not sampai G sudah siap di bawah jarimu.",
        "Selagi D ditahan, geser ibu jari turun ke A, siap untuk frasa terakhir.",
      ],
      tricky: {
        1: "Ayunkan tangan di antara jari 4 dan 3 untuk F, E, dan F. Jaga pergelangan tangan tetap diam.",
        4: "Jari 4 memainkan F dua kali, lalu jari 5 meraih G. Jangan gerakkan tanganmu.",
        10: "Ayunkan tangan di antara jari 4 dan 5 untuk E, F, dan E. Kelingking memainkan F.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri tetap di satu tempat, dengan kelingking di D.",
        "Mainkan tangan kanan saja, pada putaran pertama melodi.",
        "Gabungkan kedua tangan pada frasa pertama, dan tekan ketiga not setiap akor seperti satu not.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Akor menyusut menjadi dua not pada ketukan 2, sehingga E di melodi berbunyi jernih.",
        "Pada putaran kedua, tangan kiri memainkan D, lalu A. Rasakan ayunan tiga ketukan yang pelan.",
        "Biarkan akor D minor terakhir terus berbunyi sampai memudar.",
      ],
      tricky: {
        1: "Tekan D, F, dan A bersamaan, lalu angkat F pada ketukan 2, dan tetap tahan D dan A.",
        4: "Tangan kiri memainkan F dan A dengan jari 3 dan 1. Jari 5 tangan kanan meraih G.",
        12: "Pakai D yang ditahan di birama 11 untuk menggeser ibu jari kanan kembali naik ke C.",
      },
    },
    epic: {
      practice: [
        "Mainkan akor terurai saja sampai mengalir dengan sendirinya: rendah, tengah, tinggi, tengah.",
        "Mainkan akor dua not tangan kanan saja, dan tekan kedua not seperti satu not.",
        "Gabungkan kedua tangan pada frasa pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap garis birama. Lepaskan pedal tepat saat not bas baru berbunyi.",
        "Kuart dan kuint kosong terdengar hampa dan kuno. Seribu tahun lalu, para penyanyi mengharmonisasi nyanyian gereja seperti ini.",
        "Jaga jari 1 dan 5 dalam satu posisi, dan pindahkan seluruh tangan dari not ke not.",
      ],
      tricky: {
        13: "Ibu jari tetap di A selama dua akor, lalu turun ke F. Mula-mula hanya kelingking yang bergerak.",
        16: "Ibu jari bergeser dari B mol turun ke A, dan kelingking berjalan turun di F, E, dan D.",
        17: "Tanganmu naik di setiap ketukan: F dan C, A dan E, lalu B mol dan F.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas lonceng saja: pukul oktaf rendah, lalu angkat tangan dan mendarat di akor.",
        "Mainkan oktaf tangan kanan saja, dan jaga tanganmu dalam satu posisi.",
        "Mainkan melodi tangan kiri saja di paruh kedua, jauh di daerah bas.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan oktaf terakhir terus berbunyi.",
      ],
      tips: [
        "Pukul setiap oktaf rendah seperti lonceng gereja, lalu biarkan pedal membawa bunyinya.",
        "Kini melodi bernyanyi di bas. Mainkan akor tinggi dengan lembut, seperti lonceng di kejauhan.",
        "Angkat tanganmu setelah akor, lalu jatuhkan ibu jari ke A rendah.",
      ],
      tricky: {
        2: "Lepaskan oktaf E lebih awal, agar tanganmu punya waktu untuk turun ke C.",
        5: "Oktafnya berjalan turun di F, E, dan D. Kunci jari 1 dan 5 dalam satu posisi.",
        11: "Di sini kedua tangan memainkan akor. Angkat setiap tangan sebelum melodi turun ke bas.",
      },
    },
  },
};
