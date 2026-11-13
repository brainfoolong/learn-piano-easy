/** The guide of *Nocturne in C-sharp minor* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Chopin menulis nokturno ini pada tahun 1830, dan karya ini pertama kali diterbitkan pada tahun 1875, lama setelah ia wafat. " +
    "Ia mengirimkannya kepada kakaknya, Ludwika, sebagai latihan sebelum konserto piano keduanya. " +
    "Film The Pianist memutarnya, dan karya ini membuka album musik film tersebut.",
  funFact:
    "Pada tahun 1939, pianis Władysław Szpilman sedang memainkannya secara langsung di Radio Polandia " +
    "ketika serangan Jerman ke Warsawa memutus siarannya.",
  versions: {
    common: {
      practice: [
        "Mainkan 2 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 3 sampai 10 dengan tangan kanan saja. Tangan mulai lebih tinggi, dengan jari 5 di A tinggi.",
        "Sekarang tangan kiri saja. Tangan kiri tidak pernah berpindah, dan setiap jari tetap di tutsnya sendiri.",
        "Gabungkan kedua tangan pada 4 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ini lagu malam. Mainkan dengan lembut, dan biarkan setiap not panjang bernyanyi.",
        "Pakai tanda istirahat pendek setelah A rendah untuk memindahkan tangan naik ke A tinggi.",
        "Pakai tanda istirahat setelah D untuk memindahkan tangan ke bawah. Lalu jari 3 mendarat di C.",
      ],
      tricky: {
        1: "Mulai dengan jari 5 di E tinggi dan jari 4 di D. Tangan kiri menahan A dan E bersamaan.",
        3: "Tangan sudah pindah ke atas. Jari 5 memainkan A tinggi, dan ibu jari sekarang berada di D.",
        11: "Tangan sudah pindah kembali ke bawah. Jari 3 memainkan C, dan ibu jari berakhir di A.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Satu not rendah datang tepat pada ketukan, lalu satu akor dua not menjawabnya.",
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 5 sampai 12, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Melodi melompat satu oktaf penuh. Ibu jari memainkan A rendah, dan jari 5 memainkan A tinggi.",
        "Injak pedal hanya di birama yang berisi satu akor, dan lepaskan di garis birama berikutnya.",
        "Pakai tanda istirahat setelah E untuk memindahkan tangan kanan ke bawah, agar jari 3 mendarat di C.",
      ],
      tricky: {
        1: "Jari 5 memainkan E tinggi. Tangan kiri memainkan A tepat pada ketukan, lalu C dan E bersamaan.",
        3: "Jari 5 mendarat di A tinggi setelah lompatan satu oktaf. Lihat tutsnya, bukan tanganmu.",
        13: "Tangan sudah pindah ke bawah saat tanda istirahat. Jari 3 memainkan C, dan jari 5 memainkan E.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai akor terurainya mengalir dengan rata, dari rendah ke tinggi.",
        "Mainkan motif cepat di birama 3 dengan tangan kanan saja, sangat pelan.",
        "Gabungkan kedua tangan pada 4 birama pertama, pelan-pelan.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan seperti satu not.",
        "Sekarang mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Motif setelah B yang panjang adalah buatan kami. Mainkan dengan bebas, seperti penyanyi yang menarik napas.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari atas memimpin.",
      ],
      tricky: {
        7: "Jari 3 menahan D, lalu jari 2 dan 1 turun ke B. Tangan kiri terus mengalirkan B, F kres, dan D.",
        12: "Ibu jari menjangkau turun ke A kres di akhir birama. Lalu jari 3 dan 5 memainkan terts pertama melodi.",
        17: "Mainkan A kres dan C kres dengan jari 1 dan 3, lalu C kres dan E dengan jari 2 dan 4. Tangan kiri membawa lagu pulang ke B minor.",
      },
    },
    legendary: {
      practice: [
        "Mainkan arpeggio tangan kiri saja. Saat naik, jari 3 menyeberangi ibu jari.",
        "Mainkan motif cepat di birama 3 dengan tangan kanan saja, sangat pelan.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Biarkan arpeggio beriak dengan lembut, seperti air di malam hari, di bawah melodi yang bernyanyi.",
        "Pakai tanda istirahat pendek di akhir setiap arpeggio untuk melompat kembali turun ke not rendah.",
        "Mainkan not teratas setiap akor sedikit lebih keras dari not lainnya.",
      ],
      tricky: {
        3: "Tahan C kres tinggi dengan jari 5. Lalu mainkan motifnya dengan ringan: B, A, lalu F kres dengan ibu jari.",
        8: "Tangan kiri naik dari F kres rendah, lalu dari G kres rendah. Lompat turun saat tanda istirahat pendek.",
        15: "Rentangkan tangan di atas empat not, dari C kres ke C kres. Lalu mulai motifnya dengan jari 4.",
      },
    },
  },
};
