/** The guide of *Lacrimosa* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart meninggal pada tahun 1791, saat ia sedang menulis sebuah Requiem. " +
    "Muridnya, Franz Xaver Süssmayr, menyelesaikannya, dan Breitkopf & Härtel mencetak partiturnya pada tahun 1800. " +
    "Film Amadeus menceritakan bagaimana Mozart menulis Requiem ini.",
  funFact: "Draf Lacrimosa yang ditulis Mozart sendiri terhenti setelah 8 birama pertamanya.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Birama ini menjawab melodi dengan frasa baru.",
        "Sekarang tangan kiri saja. Tangan kiri menahan setiap posisi selama setengah birama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Angkat tangan sesaat sebelum F tinggi. Lalu jari 5 mendarat di atasnya dengan lembut.",
        "Setiap pasangan not yang turun adalah sebuah desahan. Mainkan not pertama sedikit lebih keras daripada not kedua.",
        "Setiap jari tetap di tutsnya sendiri. Jari 2 selalu memainkan C kres.",
      ],
      tricky: {
        1: "Rentangkan tangan kanan dari A naik ke F. Angkat sebentar sebelum jari 5 memainkan F.",
        7: "Tangan kiri berganti dari A ke G di tengah birama. Jari 5 memainkan G rendah.",
        15: "Jari 5, 4, dan 2 turun dari F ke C kres. Tangan kiri berganti ke A pada not yang panjang.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Setiap akor datang dua kali: panjang, lalu pendek.",
        "Gabungkan kedua tangan pada 12 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Hitung enam ketukan di setiap birama. Tangan kiri bermain pada ketukan 1, 3, 4, dan 6.",
        "Biarkan tangan kiri berayun pelan seperti perahu yang lambat, dan mainkan lebih lembut daripada melodi.",
        "Jari 5 meraih ke atas sampai G untuk satu not, lalu tangan kembali.",
      ],
      tricky: {
        11: "Mainkan E dua kali dengan jari 4. Angkat jari sedikit di antara kedua not itu.",
        12: "Regangkan jari 5 naik ke G, lalu biarkan jari 4 dan 2 turun kembali ke E dan C kres.",
        17: "A rendah tetap ditahan. Ibu jari meninggalkan D, dan jari 2 memainkan C kres tepat di bawahnya.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja. Setiap ketukan dimulai pada not bas, lalu berayun di antara dua not yang lebih tinggi.",
        "Mainkan sekst tangan kanan saja, dan tekan kedua not setiap pasangan not seperti satu not.",
        "Gabungkan kedua tangan pada 12 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "B mol di bas bergesekan dengan A yang ditahan. Gesekan sedih itu memang disengaja.",
        "Melodinya adalah not atas setiap pasangan not, jadi biarkan jari atas memimpin.",
      ],
      tricky: {
        13: "Pasangan not melebar dari terts menjadi sekst. Jari 2 dan 5 memainkan A dan F bersamaan.",
        25: "Melodi melompat naik satu oktaf. Pindahkan ibu jari dari A rendah ke A tinggi dalam satu lengkungan yang mulus.",
        29: "Di tengah birama ini, jari 2 tetap di B mol, dan ibu jari menambahkan G di bawahnya.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: oktaf, dua not cepat, lalu tanda istirahat pendek untuk melompat.",
        "Mainkan oktaf tangan kanan saja. Biarkan tangan terbuka, dengan ibu jari dan kelingking siap.",
        "Gabungkan kedua tangan pada 12 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek di akhir setiap ketukan untuk melompat ke oktaf berikutnya.",
        "Biarkan kelingking menyanyikan not atas setiap oktaf sedikit lebih keras.",
        "Mainkan akor terakhir dengan lembut, dan tahan sampai bunyinya hilang.",
      ],
      tricky: {
        13: "Pasangan not melebar dari terts menjadi sekst. Jari 2 dan 5 memainkan A dan F bersamaan.",
        25: "Oktaf dimulai. Buka tangan, dengan ibu jari di A rendah dan kelingking di A di atasnya.",
        27: "Pakai tanda istirahat pendek setelah A untuk melompat naik ke oktaf di F.",
      },
    },
  },
};
