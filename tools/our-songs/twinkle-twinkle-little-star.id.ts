/** The guide of *Twinkle Twinkle Little Star* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Melodi ini bermula sebagai lagu Prancis, Ah! vous dirai-je, maman, yang pertama kali dicetak pada 1761. " +
    "Mozart menulis dua belas variasi atas melodi ini untuk piano. " +
    "Pada 1806, Jane Taylor menerbitkan puisinya tentang sebuah bintang kecil, yang kemudian dinyanyikan dengan melodi ini.",
  funFact: "Lagu alfabet dan Baa, Baa, Black Sheep juga dinyanyikan dengan melodi yang sama ini.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Sekarang tangan kiri saja. Tangan kiri hanya berpindah di antara C, F, dan G.",
        "Gabungkan kedua tangan pada 4 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Letakkan ibu jarimu di C tengah. Jari 4 memainkan G, dan kelingking memainkan A.",
        "C terakhir panjangnya dua kali not-not sebelumnya, jadi hitung dua ketukan.",
        "Bagian tengah menyampaikan hal yang sama dua kali. Mainkan lebih lembut pada kali kedua, seperti gema.",
      ],
      tricky: {
        3: "Di sini tanganmu bergeser satu tuts ke bawah, jadi jari 4 meninggalkan G dan mendarat di F.",
        5: "Sekarang kelingkingmu memainkan G. Turun dari situ, satu jari untuk setiap tuts: 5, 4, 3, 2.",
        11: "Ini birama 3 lagi. Geser tanganmu satu tuts ke bawah, agar jari 4 mendarat di F.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan rasakan dua not cepat di birama 4.",
        "Mainkan tangan kiri saja. Tangan kiri menahan setiap akor selama dua atau empat ketukan.",
        "Gabungkan kedua tangan pada bagian tengah.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "D dan E berbagi satu ketukan. Ucapkan “satu-dan” sambil memainkannya.",
        "Tangan kiri tetap di satu tempat, dan setiap akor punya jarinya sendiri.",
        "Empat birama terakhir adalah koda, sebuah salam perpisahan singkat. Perlambat sedikit di bagian akhir.",
      ],
      tricky: {
        3: "Di sini jari 4 turun dari G ke F. Biarkan seluruh tanganmu ikut bergeser satu tuts ke bawah.",
        11: "Ini birama 3 lagi. Geser tanganmu satu tuts ke bawah, agar jari 4 mendarat di F.",
        14: "Jari 4 bergeser turun dari G ke F sekali lagi, saat koda berjalan pulang.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan sebagai satu.",
        "Mainkan tangga nada di birama 15 saja, dengan ibu jari menyusup setelah jari 3.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi tetap terdengar di atasnya.",
        "Dua not cepat di akhir birama 4 dan 6 mengantar naik ke G. Mainkan dengan ringan.",
        "Ibu jarimu menyusup di F, agar tangga nada naik sampai C tanpa jeda.",
        "Ganti pedal dua kali per birama, pada ketukan 1 dan 3.",
      ],
      tricky: {
        3: "Jari 4 bergeser turun dari G ke F, sementara bas Alberti terus mengalir.",
        9: "Ibu jarimu bergeser turun dari D ke C. Lalu jari 2 dan 4 mengambil terts pertama.",
        14: "Jari 4 bergeser turun dari G ke F, seperti di birama 3.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktafnya, lalu kembali ke atas untuk akornya.",
        "Mainkan not seperenambelas di bagian tengah pelan-pelan, dengan tangan kanan saja.",
        "Mainkan oktaf tangan kanan saja, dan angkat tanganmu di antara oktaf-oktaf itu.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Perhatikan lompatan tangan kiri, dan biarkan tangan kanan menemukan akornya dengan rabaan.",
        "Setiap not melodi membuka satu kelompok empat not seperenambelas. Tekankan sedikit, agar melodinya tetap terdengar.",
        "Mainkan oktaf dengan pendek dan cerah, seperti lonceng.",
      ],
      tricky: {
        3: "Ibu jari turun dari A ke G, sementara jari 2 menahan C. Gerakkan tanganmu sebagai satu kesatuan.",
        14: "Ini birama 3 lagi. Ibu jari turun dari A ke G, dan jari 2 tetap di C.",
        15: "Jari 3 menyeberang di atas ibu jari di B saat rentetan not cepat itu turun. Lalu tangan naik kembali melalui G mayor.",
      },
    },
  },
};
