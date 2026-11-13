/** The guide of *Aquarium* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium adalah bagian ketujuh dari Karnaval Hewan, sebuah lelucon musik yang ditulis Saint-Saëns pada 1886. " +
    "Suite ini diterbitkan pada 1922, setahun setelah ia wafat. " +
    "Film Days of Heaven (1978) karya Terrence Malick memutarnya untuk mengiringi judul pembukanya.",
  funFact:
    "Selama hidupnya, Saint-Saëns melarang suite ini dimainkan di depan umum. Ia khawatir leluconnya akan merusak namanya sebagai komponis yang serius.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Kini ibu jari mulai di B.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Jari 5 dan 4 berayun di antara E dan D kres, seperti air yang beriak di kaca.",
        "Mainkan dengan lembut dan mulus, seolah ikan meluncur di air yang tenang.",
        "Di sini tanganmu pindah naik satu tuts. Kini jari 4 memainkan E, dan ibu jari menunggu di atas B.",
      ],
      tricky: {
        1: "Berayun di antara E dan D kres dengan jari 5 dan 4. Lalu jari 4 bergeser ke tuts putih D.",
        3: "Birama 3 sama dengan birama 1. Jaga jari 4 dekat dengan tuts hitam, agar D kres mudah dijangkau.",
        9: "Selama B yang panjang, pindahkan tanganmu kembali turun. Ibu jari kembali ke A, dan jari 5 mengambil E.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri bergantian antara not rendah dan not yang lebih tinggi, pada setiap ketukan.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Kedua tangan bermain pada setiap ketukan. Jaga ketukannya tetap rata, seperti ombak yang pelan.",
        "Mainkan tangan kiri dengan lembut, agar melodi melayang di atasnya.",
        "Akhiri dengan A dan C bersamaan. Jari 1 dan 3 menekan keduanya sebagai satu.",
      ],
      tricky: {
        1: "Berayun di antara E dan D kres dengan jari 5 dan 4, sementara tangan kiri bergantian antara A dan C.",
        3: "Seperti di birama 1, jari 5 dan 4 berayun di antara E dan D kres. Lalu jari 4 mengambil tuts putih D.",
        9: "Selama B yang panjang, pindahkan tangan kanan kembali turun, agar ibu jari kembali di A.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan pasangan not tangan kanan saja mulai birama 17, dan tekan kedua not setiap pasangan not sebagai satu.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap birama baru, agar airnya tetap jernih.",
        "Tangan kiri menjaga jari bawahnya dekat A. Jari itu hanya bergeser ke G kres untuk akor E.",
        "Melodinya adalah not teratas setiap pasangan not, jadi biarkan jari atas yang memimpin.",
      ],
      tricky: {
        9: "Pindahkan tangan kanan kembali turun selama B yang panjang. Lalu tangan kanan berlari turun dari E ke A dengan jari 5 sampai 1.",
        15: "Tangan kiri menjangkau turun ke G kres. Tangan kanan memainkan B, D, C, dan B dengan jari 2, 4, 3, dan 2.",
        24: "Tahan G kres dan B dengan jari 1 dan 3. Lalu rentangkan tanganmu di atas A, C, dan E untuk akor terakhir.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang.",
        "Mainkan akor tangan kanan saja, dan biarkan jari atas menyanyikan melodinya.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke yang berikutnya.",
        "Biarkan arpeggio beriak dengan lembut, seperti cahaya yang bergerak di dalam air.",
        "Mainkan not teratas setiap akor sedikit lebih keras dari yang lain.",
      ],
      tricky: {
        8: "Tangan kiri melompat dari oktaf E rendah naik ke G kres, B, dan E. Pakai setiap tanda istirahat pendek untuk mendarat.",
        18: "Setelah akor tinggi, tangan kanan turun ke C, E, dan A. Jaga tanganmu dalam posisi akornya.",
        24: "Angkat tangan kanan dalam tanda istirahat pendek setelah E, G kres, dan B. Tangan kanan mendarat di A, C, E, dan A.",
      },
    },
  },
};
