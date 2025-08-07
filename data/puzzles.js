const puzzles = {
  "al-fatiha": [
    {
      type: "order",
      title: "Arrange the Ayat in order",
      ayat: [
        "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "الرَّحْمَٰنِ الرَّحِيمِ",
        "مَالِكِ يَوْمِ الدِّينِ",
        "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"
      ],
      correctOrder: [0, 1, 2, 3, 4, 5]
    },
    {
      type: "missing-word",
      title: "Fill in the missing word",
      ayah: "اهْدِنَا الصِّرَاطَ ____",
      options: ["الْمُسْتَقِيمَ", "الْمُعْوَجَّ", "الْقَوِيمَ"],
      answer: "الْمُسْتَقِيمَ"
    },
    {
      type: "multiple-choice",
      title: "What does Al-Fatiha mean?",
      question: "What is the main theme of Surah Al-Fatiha?",
      options: ["Praise and prayer to Allah", "Story of the Prophets", "Rules of fasting"],
      answer: "Praise and prayer to Allah"
    }
  ],
  "al-ikhlas": [
    {
      type: "order",
      title: "Arrange the Ayat in order",
      ayat: [
        "قُلْ هُوَ اللَّهُ أَحَدٌ",
        "اللَّهُ الصَّمَدُ",
        "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"
      ],
      correctOrder: [0, 1, 2, 3]
    },
    {
      type: "missing-word",
      title: "Fill in the missing word",
      ayah: "قُلْ هُوَ اللَّهُ ____",
      options: ["أَحَدٌ", "كَبِيرٌ", "عَظِيمٌ"],
      answer: "أَحَدٌ"
    },
    {
      type: "multiple-choice",
      title: "What is the main message of Al-Ikhlas?",
      question: "What does Surah Al-Ikhlas teach us?",
      options: ["Allah is One", "How to pray", "The story of Musa"],
      answer: "Allah is One"
    }
  ],
  "an-nas": [
    {
      type: "order",
      title: "Arrange the Ayat in order",
      ayat: [
        "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        "مَلِكِ النَّاسِ",
        "إِلَٰهِ النَّاسِ",
        "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        "مِنَ الْجِنَّةِ وَالنَّاسِ"
      ],
      correctOrder: [0, 1, 2, 3, 4, 5]
    },
    {
      type: "missing-word",
      title: "Fill in the missing word",
      ayah: "قُلْ أَعُوذُ بِرَبِّ ____",
      options: ["النَّاسِ", "الْعَالَمِينَ", "الْمُؤْمِنِينَ"],
      answer: "النَّاسِ"
    },
    {
      type: "multiple-choice",
      title: "What is the main message of An-Nas?",
      question: "What does Surah An-Nas teach us?",
      options: ["Seeking protection from evil", "How to fast", "The story of Yusuf"],
      answer: "Seeking protection from evil"
    }
  ]
};

export default puzzles;