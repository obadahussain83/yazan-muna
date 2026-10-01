export const WEDDING = {
  groomName: "يزن",
  brideName: "منى",
  groomInitial: "Y",
  brideInitial: "M",
  groomFullName: "يزن أمجد إبراهيم عرار",
  groomKunya: "أبو محمد",
  brideFullName: "منى مازن ديب سلامة",
  brideFamily: "أبناء المرحوم ماهر سلامة",

  weddingDate: new Date(2026, 9, 9, 19, 0, 0),
  dateLabel: "الجمعة 09.10.2026",
  timeLabel: "7:00-10:00 pm",

  city: "عناتا",
  venue: "قلعة الشام",
  venueSubtitle: "الكائنة في عناتا",
  venueMapUrl: "https://maps.google.com/?q=%D9%82%D9%84%D8%B9%D8%A9+%D8%A7%D9%84%D8%B4%D8%A7%D9%85+%D8%B9%D9%86%D8%A7%D8%AA%D8%A7",
  venueMapEmbedUrl:
    "https://www.google.com/maps?q=%D9%82%D9%84%D8%B9%D8%A9+%D8%A7%D9%84%D8%B4%D8%A7%D9%85+%D8%B9%D9%86%D8%A7%D8%AA%D8%A7&output=embed",

  galleryImages: [
    "/gallery/photo-1.jpg",
    "/gallery/photo-2.jpg",
  ],

  program: [
    { time: "الجمعة 09.10.2026", title: "حفل الزفاف في قلعة الشام الكائنة في عناتا", icon: "party" },
    { time: "7:00-10:00 pm", title: "استقبال الضيوف والتهاني", icon: "welcome" },
    { time: "تنويه", title: "يمنع التصوير في قاعة النساء", icon: "rings" },
  ],

  invitationLine:
    "سبحان من جمع القلوب بفضله، طاب اللقاء وزاد تشريفكم",
  invitationVerse:
    "وعلى رحاب الود عمر دارها، في ليلة قد أشرقت أنوارها",
  familiesLine: "أفراح آل عرار وآل سلامة",
  hostLine:
    "يتشرفون بدعوتكم لحضور حفل زفاف نجلهما وكريمتهم",
  blessingLine: "وبارك عيشة تعالى",
  noPhotosLine: "يمنع التصوير في قاعة النساء",
  heroLine: "تكتمل فرحتنا بحضوركم ومشاركتكم أجمل اللحظات",
  thankYouMessage: "دامت دياركم عامرة بالأفراح",
  tapToOpenText: "اضغط لفتح الدعوة",
} as const;
