dataSetVersion = "2025-03-30"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Character",
    key: "character",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Ittoki Otoya", key: "otoya" },
      { name: "Hijirikawa Masato", key: "masato" },
      { name: "Shinomiya Natsuki/Satsuki", key: "natsuki" },
      { name: "Ichinose Tokiya/HAYATO", key: "tokiya" },
      { name: "Jinguji Ren", key: "ren" },
      { name: "Kurusu Syo", key: "syo" },
      { name: "Aijima Cecil", key: "cecil" },
      { name: "Kotobuki Reiji", key: "reiji" },
      { name: "Kurosaki Ranmaru", key: "ranmaru" },
      { name: "Mikaze Ai", key: "ai" },
      { name: "Camus", key: "camus" },
      { name: "Otori Eiichi", key: "eiichi" },
      { name: "Sumeragi Kira", key: "kira" },
      { name: "Mikado Nagi", key: "nagi" },
      { name: "Otori Eiji", key: "eiji" },
      { name: "Kiryuin Van", key: "van" },
      { name: "Hyuga Yamato", key: "yamato" },
      { name: "Amakusa Shion", key: "shion" },
      { name: "Nanami Haruka", key: "haruka" },
      { name: "Mamoru Miyano", key: "mamoru" }
    ]
  },
  {
    name: "Filter by Groups (Songs with at least one member of a group in it)",
    key: "group",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ 
    { name: "Starish", key: "starish" }, 
    { name: "Quartet Night", key: "qn" }, 
    { name: "HE★VENS", key: "heavens" },
    { name: "Other", key: "other" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Ao no Tsubasa",
    img: "https://i.imgur.com/MMFquOj.png",
    opts: {
      character: [ "mamoru" ],
      group: ["other"]
    }
  },
  {
    name: "TRUST☆MY DREAM",
    img: "https://i.imgur.com/KlyJf8C.jpeg",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "BELIEVE☆MY VOICE",
    img: "https://i.imgur.com/KlyJf8C.jpeg",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Kishi no Kiss wa Yuki yori Yasashiku",
    img: "https://i.imgur.com/ryiwxXI.jpeg",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Akuma no Kiss wa Honoo yori Hageshiku",
    img: "https://i.imgur.com/ryiwxXI.jpeg",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Southern Cross Waltz",
    img: "https://i.imgur.com/jWQF4zM.jpeg",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "ORESAMA RONDO",
    img: "https://i.imgur.com/jWQF4zM.jpeg",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "Eien no TRISTAR",
    img: "https://i.imgur.com/X9UMaXk.jpeg",
    opts: {
      character: [ "otoya", "masato", "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "Mugen no TRINITY",
    img: "https://i.imgur.com/X9UMaXk.jpeg",
    opts: {
      character: [ "syo", "tokiya", "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Welcome to UTA☆PRI world!!",
    img: "https://i.imgur.com/LmYoy6H.jpeg",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "DESTINY SONG",
    img: "https://i.imgur.com/LmYoy6H.jpeg",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Nijiiro☆OVER DRIVE!",
    img: "https://i.imgur.com/XTrxKPl.jpeg",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "Hoshikuzu☆Shall We Dance?",
    img: "https://i.imgur.com/XTrxKPl.jpeg",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "BLUE×PRISM HEART",
    img: "https://i.imgur.com/jeiI2D5.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "RED HOT×LOVE MINDS",
    img: "https://i.imgur.com/jeiI2D5.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "ANDROMEDA de KUCHIDZUKE o",
    img: "https://i.imgur.com/tJVI1zG.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "Cosmic Runner",
    img: "https://i.imgur.com/tJVI1zG.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "AMAZING LOVE",
    img: "https://i.imgur.com/bFIs8Ov.jpeg",
    opts: {
      character: [ "otoya", "masato", "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "GO!x2 JET COASTER",
    img: "https://i.imgur.com/BHrbcps.jpeg",
    opts: {
      character: [ "natsuki", "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "Jounetsu no DÉJÀ VU KISS",
    img: "https://i.imgur.com/ZgHplwF.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "DOUBLE WISH",
    img: "https://i.imgur.com/TSXgtQf.png",
    opts: {
      character: [ "ren", "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Netsujou SERENADE",
    img: "https://i.imgur.com/bIY5ln9.jpeg",
    opts: {
      character: [ "syo", "tokiya", "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "ROULETTE",
    img: "https://i.imgur.com/Ocf1Bz8.png",
    opts: {
      character: [ "tokiya", "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "Maji LOVE 1000%",
    img: "https://i.imgur.com/B1G3d3H.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Mirai Chizu",
    img: "https://i.imgur.com/B1G3d3H.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Orpheus",
    img: "https://i.imgur.com/JpzWOWh.png",
    opts: {
      character: [ "mamoru" ],
      group: ["other"]
    }
  },
  {
    name: "BRAND NEW MELODY",
    img: "https://i.imgur.com/3emvN6y.png",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "Over the Rainbow",
    img: "https://i.imgur.com/3emvN6y.png",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "Knocking on the mind",
    img: "https://i.imgur.com/CNIVeFh.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Most FORTISSIMO",
    img: "https://i.imgur.com/CNIVeFh.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Sekai no Hate Made Believe Heart",
    img: "https://i.imgur.com/NFM7HI2.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Dear... Burning my Lady!",
    img: "https://i.imgur.com/NFM7HI2.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Otokogi Zenkai Go! Fight!!",
    img: "https://i.imgur.com/iqOX4TZ.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "Changing our Song!",
    img: "https://i.imgur.com/iqOX4TZ.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "ORION de SHOUT OUT",
    img: "https://i.imgur.com/OXWaLwt.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "Top Star Revolution",
    img: "https://i.imgur.com/OXWaLwt.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "Nanairo no COMPASS",
    img: "https://i.imgur.com/egiclk1.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "My Little Little Girl",
    img: "https://i.imgur.com/egiclk1.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Eternity Love",
    img: "https://i.imgur.com/YxIz1UH.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Ai to Yume to ANATA to",
    img: "https://i.imgur.com/YxIz1UH.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  //40
  {
    name: "NorthWind and SunShine",
    img: "https://i.imgur.com/O1hq8KF.png",
    opts: {
      character: [ "cecil","camus"],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Triangle Beat",
    img: "https://i.imgur.com/pVKBYHU.png",
    opts: {
      character: [ "ai","natsuki","syo" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "innocence",
    img: "https://i.imgur.com/pquPmw4.png",
    opts: {
      character: [ "ai","natsuki","syo" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Dream More than Love",
    img: "https://i.imgur.com/PEXXRp6.png",
    opts: {
      character: [ "ranmaru", "ren", "masato" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "GAMUSHARA ROman☆Tic",
    img: "https://i.imgur.com/PU5YaO8.png",
    opts: {
      character: [ "reiji", "otoya", "tokiya" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Seiten☆OHA♪YAHHO",
    img: "https://i.imgur.com/lzaQzbS.png",
    opts: {
      character: ["tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Maigo no KOKORO",
    img: "https://i.imgur.com/EzMphK5.png",
    opts: {
      character: [ "haruka" ],
      group: ["other"]
    }
  },
  {
    name: "FANTASIC Melody",
    img: "https://i.imgur.com/Qc6KkNo.png",
    opts: {
      character: [ "otoya", "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "RAINBOW☆DREAM",
    img: "https://i.imgur.com/pSxJQym.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil"],
      group: ["starish"]
    }
  },
  {
    name: "QUARTET★NIGHT",
    img: "https://i.imgur.com/eFU2gzq.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Dekiai TEMPTATION",
    img: "https://i.imgur.com/PhZQUVW.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "WinterBlossom",
    img: "https://i.imgur.com/PhZQUVW.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "BRIGHT ROAD",
    img: "https://i.imgur.com/tyqlLlS.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "Zettai Reido Emotion",
    img: "https://i.imgur.com/tyqlLlS.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "RISE AGAIN",
    img: "https://i.imgur.com/ACNFzGx.png",
    opts: {
      character: [ "reiji", "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "Tsukiakari no DEAREST",
    img: "https://i.imgur.com/ACNFzGx.png",
    opts: {
      character: [ "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Hyper×Super×Lover☆",
    img: "https://i.imgur.com/9Rw9o45.png",
    opts: {
      character: [ "reiji", "otoya" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "Koiiro SENTIMENTAL ",
    img: "https://i.imgur.com/ibqJnrf.png",
    opts: {
      character: [ "ranmaru", "cecil" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "Beautiful Love",
    img: "https://i.imgur.com/nDWrN4p.png",
    opts: {
      character: [ "ai", "masato", "syo" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "Baby! My strawberry!",
    img: "https://i.imgur.com/hyvPAGH.png",
    opts: {
      character: [ "ren", "camus" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "Still Still Still",
    img: "https://i.imgur.com/EzULYdG.png",
    opts: {
      character: [ "natsuki", "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Maji LOVE 2000%",
    img: "https://i.imgur.com/ReGawMU.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Yumeoibito e no Symphony",
    img: "https://i.imgur.com/ReGawMU.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "TRUE WING",
    img: "https://i.imgur.com/0OM0bg7.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "CHALLENGE!",
    img: "https://i.imgur.com/0OM0bg7.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "Koizakura (恋桜)",
    img: "https://i.imgur.com/Lhepfd0.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Sanctuary",
    img: "https://i.imgur.com/Lhepfd0.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Canon",
    img: "https://i.imgur.com/H6ahJsV.png",
    opts: {
      character: [ "mamoru" ],
      group: ["other"]
    }
  },
  {
    name: "SMILE MAGIC",
    img: "https://i.imgur.com/OwXrLnz.png",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "HORIZON",
    img: "https://i.imgur.com/OwXrLnz.png",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "Orange Rhapsody",
    img: "https://i.imgur.com/ZbT4e9V.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "FREEDOM",
    img: "https://i.imgur.com/ZbT4e9V.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "SIRIUS e no Chikai",
    img: "https://i.imgur.com/jqDb5AM.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "☆YELL☆",
    img: "https://i.imgur.com/jqDb5AM.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "Hoshi no FANTASIA",
    img: "https://i.imgur.com/clpnWnu.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Happiness",
    img: "https://i.imgur.com/clpnWnu.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "CRYSTAL TIME",
    img: "https://i.imgur.com/xxD2N9R.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Independence",
    img: "https://i.imgur.com/xxD2N9R.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Poison KISS",
    img: "https://i.imgur.com/1fvpLjL.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Ai no REINCARNATION",
    img: "https://i.imgur.com/wAPSVSF.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Piyo-chan no Uta",
    img: "https://i.imgur.com/vOE1H5d.pngv",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "HE★VENS GATE (Eiichi, Kira, Nagi)",
    img: "https://i.imgur.com/KXWiPb3.png",
    opts: {
      character: [ "eiichi", "kira", "nagi" ],
      group: ["heavens"]
    }
  },
  {
    name: "MASQUERADE MIRAGE",
    img: "https://i.imgur.com/68RspOW.png",
    opts: {
      character: [ "ai", "reiji", "natsuki" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Shining Star Xmas",
    img: "https://i.imgur.com/8M83B9m.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "reiji", "ranmaru", "ai", "camus"],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Maji LOVE 1000% -RAINBOW STAR ver.-",
    img: "https://i.imgur.com/8M83B9m.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Tenka Muteki no Shinobi Michi ",
    img: "https://i.imgur.com/lg3vyhZ.png",
    opts: {
      character: [ "otoya", "syo", "masato", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "JOKER TRAP",
    img: "https://i.imgur.com/zNajNO3.png",
    opts: {
      character: [ "tokiya", "ren", "camus", "ranmaru" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Itoshiki Hito e",
    img: "https://i.imgur.com/Lf2FWOR.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "KISS wa WINK de",
    img: "https://i.imgur.com/Lf2FWOR.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "Not Bad",
    img: "https://i.imgur.com/jiddrwS.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "WILD SOUL",
    img: "https://i.imgur.com/jiddrwS.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "A.I",
    img: "https://i.imgur.com/Fo9aCuS.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "Futari no MONOGRAM",
    img: "https://i.imgur.com/Fo9aCuS.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "Junketsunaru Ai -Aspiration-",
    img: "https://i.imgur.com/RaELl6J.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "AURORA",
    img: "https://i.imgur.com/RaELl6J.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Marriage",
    img: "https://i.imgur.com/8Em9PmU.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "You're my life",
    img: "https://i.imgur.com/8Em9PmU.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Maji LOVE☆Revolutions",
    img: "https://i.imgur.com/xseXIvS.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "THANK YOU",
    img: "https://i.imgur.com/xseXIvS.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "SHINE",
    img: "https://i.imgur.com/iKwkFHW.png",
    opts: {
      character: [ "mamoru" ],
      group: ["other"]
    }
  },
  {
    name: "EMOTIONAL LIFE",
    img: "https://i.imgur.com/GCV6nwC.jpeg",
    opts: {
      character: [ "otoya", "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "Komorebi DIAMOND",
    img: "https://i.imgur.com/GCV6nwC.jpeg",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "The New World",
    img: "https://i.imgur.com/GCV6nwC.jpeg",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "Innocent Wind",
    img: "https://i.imgur.com/ZJHpKt8.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "MUNE NO KODOU",
    img: "https://i.imgur.com/ZJHpKt8.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "Code: T.V.U",
    img: "https://i.imgur.com/nKCbpLH.png",
    opts: {
      character: [ "syo", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Mellow×2 Chu",
    img: "https://i.imgur.com/nKCbpLH.png",
    opts: {
      character: [ "Ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Subete o Uta ni!",
    img: "https://i.imgur.com/nKCbpLH.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "GREEN AMBITION",
    img: "https://i.imgur.com/nKCbpLH.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Saintly Territory",
    img: "https://i.imgur.com/XUJX55b.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Double Face",
    img: "https://i.imgur.com/XUJX55b.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "ONLY ONE",
    img: "https://i.imgur.com/taHBFop.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "No.1",
    img: "https://i.imgur.com/taHBFop.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "ORIGINAL RESONANCE",
    img: "https://i.imgur.com/BCiAY19.png",
    opts: {
      character: [ "masato", "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Seien BRAVE HEART",
    img: "https://i.imgur.com/BCiAY19.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "SECRET LOVER",
    img: "https://i.imgur.com/BCiAY19.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "NEVER...",
    img: "https://i.imgur.com/IacJnHh.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "Hurray×2 DREAMERS",
    img: "https://i.imgur.com/IacJnHh.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "EVOLUTION EVE",
    img: "https://i.imgur.com/O2r5yrk.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "The dice are cast",
    img: "https://i.imgur.com/O2r5yrk.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "GOLDEN☆STAR",
    img: "https://i.imgur.com/vy0LJBT.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish","qn"]
    }
  },
  {
    name: "Tenkuu no MIRACLE STAR",
    img: "https://i.imgur.com/IAjKV2a.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Starlight Memory",
    img: "https://i.imgur.com/IAjKV2a.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "BLOODY SHADOWS",
    img: "https://i.imgur.com/fe7K8GX.png",
    opts: {
      character: [ "ai", "masato", "ren" ],
      group: ["qn","starish"]
    }
  },
  {
    name: "HE★VENS GATE -Beginning of the Legend-",
    img: "https://i.imgur.com/JRVPrgu.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Pirates of the Frontier",
    img: "https://i.imgur.com/Dgm15xE.png",
    opts: {
      character: [ "camus", "ranmaru", "otoya" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "EVERY Buddy!",
    img: "https://i.imgur.com/WsaoyRH.png",
    opts: {
      character: [ "syo", "reiji" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "POLARIS",
    img: "https://i.imgur.com/FnHXylx.png",
    opts: {
      character: [ "cecil", "tokiya", "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "DAYDREAM",
    img: "https://i.imgur.com/uQS54kL.png",
    opts: {
      character: [ "reiji", "ranmaru", "otoya", "natsuki", "ren", "syo" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "NIGHT DREAM",
    img: "https://i.imgur.com/uQS54kL.png",
    opts: {
      character: [ "ai", "camus", "masato", "cecil", "tokiya" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "Maji LOVE Legend Star",
    img: "https://i.imgur.com/Aq3Jq8v.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Mirai, Yume, Arigatou... Soshite!",
    img: "https://i.imgur.com/Aq3Jq8v.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Tempest",
    img: "https://i.imgur.com/tPzsMUA.png",
    opts: {
      character: [ "mamoru" ],
      group: ["other"]
    }
  },
  {
    name: "Mighty Aura",
    img: "https://i.imgur.com/ROCGrPa.png",
    opts: {
      character: [ "tokiya", "eiji" ],
      group: ["heavens", "starish"]
    }
  },
  {
    name: "be the light!",
    img: "https://i.imgur.com/ROCGrPa.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Dreamer",
    img: "https://i.imgur.com/ROCGrPa.png",
    opts: {
      character: [ "eiji" ],
      group: ["heavens"]
    }
  },
  {
    name: "JUSTICE IMPULSE",
    img: "https://i.imgur.com/lyyd01u.png",
    opts: {
      character: [ "syo", "yamato" ],
      group: ["starish", "heavens"]
    }
  },
  {
    name: "Hatsukoi o Mata Hajimeyou",
    img: "https://i.imgur.com/lyyd01u.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "OVER THE TOP",
    img: "https://i.imgur.com/lyyd01u.png",
    opts: {
      character: [ "yamato" ],
      group: ["heavens"]
    }
  },
  {
    name: "Visible Elf",
    img: "https://i.imgur.com/qXJRW44.png",
    opts: {
      character: [ "cecil", "shion" ],
      group: ["starish", "heavens"]
    }
  },
  {
    name: "Kanbinaru Arcadia",
    img: "https://i.imgur.com/qXJRW44.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Michibiki Hikari (導き光)",
    img: "https://i.imgur.com/qXJRW44.png",
    opts: {
      character: [ "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Lovely Eyes",
    img: "https://i.imgur.com/XEB4X2I.png",
    opts: {
      character: [ "ren", "van" ],
      group: ["starish", "heavens"]
    }
  },
  {
    name: "Give Me True Love",
    img: "https://i.imgur.com/XEB4X2I.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "My Cutie... Drive me Crazy!",
    img: "https://i.imgur.com/XEB4X2I.png",
    opts: {
      character: [ "van" ],
      group: ["heavens"]
    }
  },
  {
    name: "Grown Empathy",
    img: "https://i.imgur.com/73DaJZH.png",
    opts: {
      character: [ "natsuki", "nagi" ],
      group: ["starish", "heavens"]
    }
  },
  {
    name: "Tears in Love",
    img: "https://i.imgur.com/73DaJZH.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "You're mine!",
    img: "https://i.imgur.com/73DaJZH.png",
    opts: {
      character: [ "nagi" ],
      group: ["heavens"]
    }
  },
  {
    name: "Lasting Oneness",
    img: "https://i.imgur.com/3kbuG5R.png",
    opts: {
      character: [ "masato", "kira" ],
      group: ["starish", "heavens"]
    }
  },
  {
    name: "I swear...",
    img: "https://i.imgur.com/3kbuG5R.png",
    opts: {
      character: [ "masato"],
      group: ["starish"]
    }
  },
  {
    name: "Dazzling Darling",
    img: "https://i.imgur.com/3kbuG5R.png",
    opts: {
      character: ["kira" ],
      group: ["heavens"]
    }
  },
  {
    name: "NEXT DOOR",
    img: "https://i.imgur.com/YVb63nS.png",
    opts: {
      character: [ "otoya", "eiichi" ],
      group: ["starish", "heavens"]
    }
  },
  {
    name: "Brilliant Days",
    img: "https://i.imgur.com/YVb63nS.png",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "STATE OF PERFECTION",
    img: "https://i.imgur.com/YVb63nS.png",
    opts: {
      character: ["eiichi"],
      group: ["heavens"]
    }
  },
  {
    name: "God's S.T.A.R",
    img: "https://i.imgur.com/EMgrkfF.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "KIZUNA",
    img: "https://i.imgur.com/EMgrkfF.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Fumetsu no Inferno",
    img: "https://i.imgur.com/DrW6rMq.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "HE★VENLY PARADE",
    img: "https://i.imgur.com/DrW6rMq.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Yume wo Uta e to...!",
    img: "https://i.imgur.com/vyYgl44.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish", "qn", "heavens"]
    }
  },
  {
    name: "Welcome to UTA☆PRI RAINBOW World!!",
    img: "https://i.imgur.com/5csvpuh.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "KILLER KISS",
    img: "https://i.imgur.com/KDD1rEA.png",
    opts: {
      character: [ "reiji","camus" ],
      group: ["qn"]
    }
  },
  {
    name: "On Your Mark!",
    img: "https://i.imgur.com/KDD1rEA.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "Melting of snow",
    img: "https://i.imgur.com/KDD1rEA.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Haruhana",
    img: "https://i.imgur.com/8FCfh6T.png",
    opts: {
      character: [ "ranmaru", "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "BE PROUD",
    img: "https://i.imgur.com/8FCfh6T.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "Synchronism",
    img: "https://i.imgur.com/8FCfh6T.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "WE ARE ST☆RISH!!",
    img: "https://i.imgur.com/lXzYSHw.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  
  //--------------------------------------------------------
  {
    name: "ADVENT ACE",
    img: "https://i.imgur.com/NA8czGP.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Superb Spirits",
    img: "https://i.imgur.com/NA8czGP.png",
    opts: {
      character: [ "syo", "tokiya", "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "ISSHO NI HANG IN THERE♪",
    img: "https://i.imgur.com/NA8czGP.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "HEAVEN SKY",
    img: "https://i.imgur.com/ONcb5Ty.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Shining☆Romance",
    img: "https://i.imgur.com/XLzcvFp.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "FORCE LIVE",
    img: "https://i.imgur.com/rGlm5Wt.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Lost Alice",
    img: "https://i.imgur.com/mQVlGxM.png",
    opts: {
      character: [ "reiji", "ranmaru", "natsuki", "masato" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "Trois",
    img: "https://i.imgur.com/6wNpZG8.png",
    opts: {
      character: [ "ai", "camus", "syo" ],
      group: ["qn", "starish"]
    }
  },
  {
    name: "Ultra Blast",
    img: "https://i.imgur.com/FkiBy0c.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Fantastic☆Prelude",
    img: "https://i.imgur.com/FkiBy0c.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Lycoris no Mori",
    img: "https://i.imgur.com/Lgw76lU.png",
    opts: {
      character: [ "otoya", "ren", "tokiya", "cecil" ],
      group: [""]
    }
  },
  {
    name: "FLY TO THE FUTURE",
    img: "https://i.imgur.com/RShPm9l.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "THE WORLD IS MINE",
    img: "https://i.imgur.com/RShPm9l.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Fiction",
    img: "https://i.imgur.com/mfaZTuc.png",
    opts: {
      character: [ "reiji", "ai"],
      group: ["qn"]
    }
  },
  {
    name: "Non-Fiction",
    img: "https://i.imgur.com/eEEtonx.png",
    opts: {
      character: [ "ranmaru", "camus"],
      group: ["qn"]
    }
  },
  {
    name: "Setsugetsuka",
    img: "https://i.imgur.com/5aUBYhk.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Up-Down-Up!",
    img: "https://i.imgur.com/MJHImKB.png",
    opts: {
      character: [ "van", "otoya", "ai" ],
      group: ["starish", "qn", "heavens"]
    }
  },
  {
    name: "Egoistic",
    img: "https://i.imgur.com/0XQdbrS.png",
    opts: {
      character: [ "eiichi", "natsuki", "ranmaru" ],
      group: ["starish", "qn", "heavens"]
    }
  },
  {
    name: "Feather in the Hand",
    img: "https://i.imgur.com/uxkUR2l.png",
    opts: {
      character: [ "eiji", "camus", "masato" ],
      group: ["starish", "qn", "heavens"]
    }
  },
  {
    name: "Souai Träumerei",
    img: "https://i.imgur.com/ueKieiX.png",
    opts: {
      character: [ "reiji", "kira", "ren" ],
      group: ["starish", "qn", "heavens"]
    }
  },
  {
    name: "Colorfully☆Spark",
    img: "https://i.imgur.com/SA6Xluw.png",
    opts: {
      character: [ "nagi", "shion", "syo" ],
      group: ["starish", "heavens"]
    }
  },
  {
    name: "Kaleidoscope",
    img: "https://i.imgur.com/6R0I1Gs.png",
    opts: {
      character: [ "tokiya", "yamato", "cecil" ],
      group: ["starish", "heavens"]
    }
  },
  {
    name: "LIFE ~WITH THANKS~",
    img: "https://i.imgur.com/pC9Onja.png",
    opts: {
      character: [ "eiichi" ],
      group: ["heavens"]
    }
  },
  {
    name: "Koi no Ondo−melt into one−",
    img: "https://i.imgur.com/pC9Onja.png",
    opts: {
      character: [ "kira" ],
      group: ["heavens"]
    }
  },
  {
    name: "Zettaiteki☆N・A・G・I",
    img: "https://i.imgur.com/pC9Onja.png",
    opts: {
      character: [ "nagi" ],
      group: ["heavens"]
    }
  },
  {
    name: "Just You",
    img: "https://i.imgur.com/pC9Onja.png",
    opts: {
      character: [ "eiji" ],
      group: ["heavens"]
    }
  },
  {
    name: "Netsuaichuu BANG×BANG×BANG!",
    img: "https://i.imgur.com/pC9Onja.png",
    opts: {
      character: [ "van" ],
      group: ["heavens"]
    }
  },
  {
    name: "Jinsei on Sparking!",
    img: "https://i.imgur.com/pC9Onja.png",
    opts: {
      character: [ "yamato" ],
      group: ["heavens"]
    }
  },
  {
    name: "Lyrical Poetry",
    img: "https://i.imgur.com/pC9Onja.png",
    opts: {
      character: [ "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Ai wo Sasageyo ～THE SECRET SHANGRI-LA～",
    img: "https://i.imgur.com/CaXOB9t.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "GIRA X 2★SEVEN",
    img: "https://i.imgur.com/CaXOB9t.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Encore",
    img: "https://i.imgur.com/TM2gvZ2.png",
    opts: {
      character: [ "mamoru" ],
      group: ["other"]
    }
  },
  {
    name: "I Am Here.",
    img: "https://i.imgur.com/GDzHQlv.png",
    opts: {
      character: [ "otoya"],
      group: ["starish"]
    }
  },
  {
    name: "Ai to Yoberu Ki no Shita de",
    img: "https://i.imgur.com/GDzHQlv.png",
    opts: {
      character: [ "otoya"],
      group: ["starish"]
    }
  },
  {
    name: "HOLY KNIGHT",
    img: "https://i.imgur.com/mlSsRYs.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Shinnaru Senritsu wa Saiai wo Utau",
    img: "https://i.imgur.com/mlSsRYs.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "SUKIxSUKI Hanamaru",
    img: "https://i.imgur.com/vWUWtxs.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "Tsuki no Uta",
    img: "https://i.imgur.com/vWUWtxs.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },

  {
    name: "WONDER☆RONDO",
    img: "https://i.imgur.com/WxicYMi.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Dancing Over Night",
    img: "https://i.imgur.com/WxicYMi.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Target is You!",
    img: "https://i.imgur.com/RgAOoRU.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Toki no Jewel",
    img: "https://i.imgur.com/RgAOoRU.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Koi Kara Ai e… Soshite Mirai ni ",
    img: "https://i.imgur.com/dYfbIFB.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Rose Rose Romance",
    img: "https://i.imgur.com/dYfbIFB.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Sweet Kiss",
    img: "https://i.imgur.com/KIu7HUw.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "Kakeru Kiseki",
    img: "https://i.imgur.com/KIu7HUw.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "Crown of Agna",
    img: "https://i.imgur.com/WigpIU7.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "☆light ☆night",
    img: "https://i.imgur.com/WigpIU7.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Maji LOVE Kingdom",
    img: "https://i.imgur.com/IqPheej.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish", "qn", "heavens"]
    }
  },
  {
    name: "Welcome to UTA☆PRI KINGDOM!!",
    img: "https://i.imgur.com/IqPheej.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish", "qn", "heavens"]
    }
  },
  {
    name: "WHITE GRAVITY",
    img: "https://i.imgur.com/P6Ka93l.png",
    opts: {
      character: [ "masato","natsuki","syo","cecil","ai","camus" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "BLACK DEJAVU",
    img: "https://i.imgur.com/HCwE0Oe.png",
    opts: {
      character: [ "ranmaru", "otoya", "tokiya", "ren", "reiji" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Paradise Lost ~Fall on me~",
    img: "https://i.imgur.com/BfxNPFf.png",
    opts: {
      character: [ "eiichi","van", "yamato" ],
      group: ["heavens"]
    }
  },
  {
    name: "Paradise Lost ~Beside you~",
    img: "https://i.imgur.com/gaTt54B.png",
    opts: {
      character: [ "eiichi","van", "yamato" ],
      group: ["heavens"]
    }
  },
  {
    name: "SUPER STAR",
    img: "https://i.imgur.com/xxg73Hc.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "THIS IS...!",
    img: "https://i.imgur.com/6NuVPnD.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Genesis HE★VENS",
    img: "https://i.imgur.com/xu2sd18.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Alright, All night",
    img: "https://i.imgur.com/Nc0caDQ.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "Timepiece",
    img: "https://i.imgur.com/dtEOUgO.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "Clap Hands!!",
    img: "https://i.imgur.com/j5a0x2W.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "I LOVE & NEED YOU",
    img: "https://i.imgur.com/HRYmkZ8.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "LOVE ・ EVOL",
    img: "https://i.imgur.com/1JcbnYN.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "Dream Maker",
    img: "https://i.imgur.com/EX2Cz0B.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "Steward Dance",
    img: "https://i.imgur.com/F9TeDWF.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "ALL MY MISSION",
    img: "https://i.imgur.com/wlw3tgh.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "RAIN OR SHINE",
    img: "https://i.imgur.com/8QzE7sT.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "UP TO THE LIMIT",
    img: "https://i.imgur.com/8QzE7sT.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "STAR WISH",
    img: "https://i.imgur.com/fR6M8ZI.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "QUARTET CROWN",
    img: "https://i.imgur.com/Kvk6bni.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "ENDLESS SCORE",
    img: "https://i.imgur.com/b7Nbm9c.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Grateful friends, Graceful ways",
    img: "https://i.imgur.com/TwTcbSi.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Ready Steady Race!",
    img: "https://i.imgur.com/TwTcbSi.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Akatsuki no Utage",
    img: "https://i.imgur.com/fT8YYKl.png",
    opts: {
      character: [ "eiichi" ],
      group: ["heavens"]
    }
  },
  {
    name: "Reimei drops",
    img: "https://i.imgur.com/fT8YYKl.png",
    opts: {
      character: [ "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Morning in the sky",
    img: "https://i.imgur.com/fT8YYKl.png",
    opts: {
      character: [ "kira" ],
      group: ["heavens"]
    }
  },
  {
    name: "Lovable midday",
    img: "https://i.imgur.com/fT8YYKl.png",
    opts: {
      character: [ "nagi" ],
      group: ["heavens"]
    }
  },
  {
    name: "Tasogare Hugging",
    img: "https://i.imgur.com/fT8YYKl.png",
    opts: {
      character: [ "van" ],
      group: ["heavens"]
    }
  },
  {
    name: "Oumagatoki Mea",
    img: "https://i.imgur.com/fT8YYKl.png",
    opts: {
      character: [ "yamato" ],
      group: ["heavens"]
    }
  },
  {
    name: "Yoiyami Secret moon",
    img: "https://i.imgur.com/fT8YYKl.png",
    opts: {
      character: [ "eiji" ],
      group: ["heavens"]
    }
  },
  {
    name: "One Day",
    img: "https://i.imgur.com/fT8YYKl.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Maji LOVE ST☆RISH Tours",
    img: "https://i.imgur.com/O4vrzO2.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "ST☆RT OURS",
    img: "https://i.imgur.com/O4vrzO2.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Love Song For You",
    img: "https://i.imgur.com/8ijcU6b.png",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "Ok, Hello World!",
    img: "https://i.imgur.com/UMOJnFL.png",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  {
    name: "POP SHOWER",
    img: "https://i.imgur.com/UMOJnFL.png",
    opts: {
      character: [ "otoya" ],
      group: ["starish"]
    }
  },
  //----------------------------------------------------------------------
  
  {
    name: "Snow Ballade",
    img: "https://i.imgur.com/dsvLw7w.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Stay with...",
    img: "https://i.imgur.com/dsvLw7w.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Moon Rain",
    img: "https://i.imgur.com/rwifjU0.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "Let's Be Happy",
    img: "https://i.imgur.com/Bn9pzww.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "Ai wo Bonapeti♪",
    img: "https://i.imgur.com/tfWOyWa.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "With Ding Dong",
    img: "https://i.imgur.com/tfWOyWa.png",
    opts: {
      character: [ "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "TRIGGER CHANCE",
    img: "https://i.imgur.com/v8zUI9A.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "PERFECT STORY",
    img: "https://i.imgur.com/v8zUI9A.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Ready to be a Lady",
    img: "https://i.imgur.com/4cNLxnE.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "DREAM TALE",
    img: "https://i.imgur.com/4cNLxnE.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "Natural Identity",
    img: "https://i.imgur.com/ScEWDOJ.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "Rai Rai ☆ All Right",
    img: "https://i.imgur.com/1YiFrNc.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "Dizzy Glow",
    img: "https://i.imgur.com/1YiFrNc.png",
    opts: {
      character: [ "syo" ],
      group: ["starish"]
    }
  },
  {
    name: "Intimate Distance",
    img: "https://i.imgur.com/uFTRVSk.png",
    opts: {
      character: [ "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Torrid Love",
    img: "https://i.imgur.com/OJ43alT.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Re:alive",
    img: "https://i.imgur.com/OJ43alT.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "UUUU",
    img: "https://i.imgur.com/L9hsIk5.png",
    opts: {
      character: [ "ren", "syo", "otoya", "natsuki" ],
      group: ["starish"]
    }
  },
  {
    name: "SAMURAIZM",
    img: "https://i.imgur.com/EvelPJm.png",
    opts: {
      character: [ "masato", "cecil", "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "SIMPLE",
    img: "https://i.imgur.com/9U9gJQK.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "LOVE AFFAIR",
    img: "https://i.imgur.com/3uOYhMy.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "LOVE ABLAZE",
    img: "https://i.imgur.com/3uOYhMy.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Clear Sky Message",
    img: "https://i.imgur.com/VbLKGiL.png",
    opts: {
      character: [ "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Sunshine melody",
    img: "https://i.imgur.com/FzuoPik.png",
    opts: {
      character: [ "otoya", "syo", "ranmaru" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Stars From Microcosmos",
    img: "https://i.imgur.com/WyamkTh.png",
    opts: {
      character: [ "natsuki", "tokiya", "ren", "ai" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "Tsuki ni Yume Ai ni Anata",
    img: "https://i.imgur.com/I1eDgI5.png",
    opts: {
      character: [ "masato", "cecil", "reiji", "camus" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "All yours",
    img: "https://i.imgur.com/1B6YTzs.png",
    opts: {
      character: [ "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Floating Labyrinth",
    img: "https://i.imgur.com/I0gjy4f.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "ALIVE IN YOURS",
    img: "https://i.imgur.com/O3RwIUN.png",
    opts: {
      character: [ "ren" ],
      group: ["starish"]
    }
  },
  {
    name: "FLAKE HEART",
    img: "https://i.imgur.com/iMJNuHV.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "Illusionist",
    img: "https://i.imgur.com/ioyUt3f.png",
    opts: {
      character: [ "natsuki", "syo", "cecil"],
      group: ["starish"]
    }
  },
  {
    name: "Sacred Pairs",
    img: "https://i.imgur.com/1jxzoyQ.png",
    opts: {
      character: [ "ren", "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "HUG SONG",
    img: "https://i.imgur.com/rhW6Tie.png",
    opts: {
      character: [ "otoya", "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "YOUR BIRTHDAY",
    img: "https://i.imgur.com/v3mio2J.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish", "qn"]
    }
  },
  {
    name: "First Time",
    img: "https://i.imgur.com/Ky9KsVI.png",
    opts: {
      character: [ "eiichi" ],
      group: ["heavens"]
    }
  },
  {
    name: "Blooming Baby",
    img: "https://i.imgur.com/YImF4Kl.png",
    opts: {
      character: [ "eiji" ],
      group: ["heavens"]
    }
  },
  {
    name: "Ikusen no Evidence",
    img: "https://i.imgur.com/5aDoSJ1.png",
    opts: {
      character: [ "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "YOUR ADVENTURE!!",
    img: "https://i.imgur.com/6Uagg8K.png",
    opts: {
      character: [ "van" ],
      group: ["heavens"]
    }
  },
  {
    name: "The Wizard of OZ and...",
    img: "https://i.imgur.com/L14T7ns.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Unmei no Toki",
    img: "https://i.imgur.com/L14T7ns.png",
    opts: {
      character: [ "eiichi", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Emerald City he no Michi",
    img: "https://i.imgur.com/L14T7ns.png",
    opts: {
      character: [ "van", "kira", "yamato" ],
      group: ["heavens"]
    }
  },
  {
    name: "Futari no Yume",
    img: "https://i.imgur.com/L14T7ns.png",
    opts: {
      character: [ "eiji", "nagi" ],
      group: ["heavens"]
    }
  },
  {
    name: "Neverland no Kiseki",
    img: "https://i.imgur.com/WgjiifR.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Yume no Kuni Neverland",
    img: "https://i.imgur.com/WgjiifR.png",
    opts: {
      character: [ "natsuki", "syo", "tokiya" ],
      group: ["starish"]
    }
  },
  {
    name: "Ikkiuchi",
    img: "https://i.imgur.com/WgjiifR.png",
    opts: {
      character: [ "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "Ai no Uta",
    img: "https://i.imgur.com/WgjiifR.png",
    opts: {
      character: [ "otoya", "masato" ],
      group: ["starish"]
    }
  },
  {
    name: "Boku Dake no Kimi Kimi Dake no Boku",
    img: "https://i.imgur.com/7yKUos0.png",
    opts: {
      character: [ "nagi" ],
      group: ["heavens"]
    }
  },
  {
    name: "Togabito no Requiem",
    img: "https://i.imgur.com/vXOYH1b.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Keiyaku Seiritsu",
    img: "https://i.imgur.com/vXOYH1b.png",
    opts: {
      character: [ "reiji", "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "Seimei no Ibuki",
    img: "https://i.imgur.com/vXOYH1b.png",
    opts: {
      character: [ "reiji", "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "PRI☆LOVE∞UNIVERSE♪",
    img: "https://i.imgur.com/w8VhouJ.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish", "qn", "heavens"]
    }
  },
  //-----------------------------------
  {
    name: "Dancing Escape",
    img: "https://i.imgur.com/apahZLU.png",
    opts: {
      character: [ "yamato" ],
      group: ["heavens"]
    }
  },
  {
    name: "Embrace Ensemble",
    img: "https://i.imgur.com/rAAQyRo.png",
    opts: {
      character: [ "kira" ],
      group: ["heavens"]
    }
  },
  {
    name: "Drown in",
    img: "https://i.imgur.com/2bpXSU0.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "Kiramekira",
    img: "https://i.imgur.com/2bpXSU0.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "SONG LETTER",
    img: "https://i.imgur.com/e7WqwOq.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "GLORIOUS ANGELS",
    img: "https://i.imgur.com/eIDWyIl.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "KIR☆MEKI EMOTION",
    img: "https://i.imgur.com/9nlbXGq.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]
    }
  },
  {
    name: "MUSIC FOR LIFE",
    img: "https://i.imgur.com/7qPPD8b.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "FULLTEN",
    img: "https://i.imgur.com/7qPPD8b.png",
    opts: {
      character: [ "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "Ambivalent",
    img: "https://i.imgur.com/fP0vbUP.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "MUSOU",
    img: "https://i.imgur.com/fP0vbUP.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "Frost Dream",
    img: "https://i.imgur.com/PgmzG4I.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Pit a pat",
    img: "https://i.imgur.com/PgmzG4I.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Angel's Note",
    img: "https://i.imgur.com/vQDI8Me.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "Makoto ni Tsuki Michite",
    img: "https://i.imgur.com/6jqKThf.png",
    opts: {
      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]
    }
  },
  {
    name: "TABOO NIGHT XXXX",
    img: "https://i.imgur.com/RnqvYZj.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "JINN-Ω-RAY",
    img: "https://i.imgur.com/RnqvYZj.png",
    opts: {
      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "零-Zero-",
    img: "https://i.imgur.com/N7RrxFH.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "ワンダフルSMILE",
    img: "https://i.imgur.com/N7RrxFH.png",
    opts: {
      character: [ "reiji" ],
      group: ["qn"]
    }
  },
  {
    name: "WINNER",
    img: "https://i.imgur.com/naPVawS.png",
    opts: {
      character: [ "ranmaru" ],
      group: [""]
    }
  },
  {
    name: "Black Panther",
    img: "https://i.imgur.com/naPVawS.png",
    opts: {
      character: [ "ranmaru" ],
      group: [""]
    }
  },
  {
    name: "Am I a fairy or...?",
    img: "https://i.imgur.com/Oj1yVE3.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "紡ぐ日常",
    img: "https://i.imgur.com/Oj1yVE3.png",
    opts: {
      character: [ "ai" ],
      group: ["qn"]
    }
  },
  {
    name: "氷道化師-Ice Pierrot-",
    img: "https://i.imgur.com/WrgBKs1.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "Romantic days",
    img: "https://i.imgur.com/WrgBKs1.png",
    opts: {
      character: [ "camus" ],
      group: ["qn"]
    }
  },
  {
    name: "The RUN to the RAY",
    img: "https://i.imgur.com/A28WaLa.png",
    opts: {
      character: [ "reiji", "ranmaru" ],
      group: ["qn"]
    }
  },
  {
    name: "God Love警報発令",
    img: "https://i.imgur.com/iSIMpNu.png",
    opts: {
      character: [ "ai", "camus" ],
      group: ["qn"]
    }
  }


  //-----------------------------------
  /*
  {
    name: "",
    img: "",
    opts: {
      character: [ "" ],
      group: [""]
    }
  },

      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil" ],
      group: ["starish"]

      character: [ "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion" ],
      group: ["heavens"]

      character: [ "reiji", "ranmaru", "ai", "camus" ],
      group: ["qn"]

      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish", "qn"]

      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish", "qn", "heavens"]
{
    name: "placeholder",
    img: "https://i.imgur.com/1fvpLjL.png",
    opts: {
      character: [ "otoya", "masato", "natsuki", "syo", "tokiya", "ren", "cecil", "eiichi", "kira", "nagi", "eiji", "van", "yamato", "shion", "reiji", "ranmaru", "ai", "camus" ],
      group: ["starish", "qn", "heavens"]
    }
  } 
  */
 
];
