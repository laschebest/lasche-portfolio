export const siteConfig = {
  name: "laschebest",
  shortName: "lasche",
  initials: "lasche",
  role: "Full Stack Developer",
  location: "Kocaeli, TR",
  bio: "Yazılım öğrencisi. Kod ve tasarımın kesiştiği noktada çalışıyorum. Güzel ve çalışan şeyler yapmaya odaklanıyorum.",
  bioExtended:
    "Merhaba. Ben Yunus. Kocaeli'de yazılım öğrencisiyim. Kullanıcı deneyimini ve görsel tasarımı ciddiye alan biri olarak, hem güzel hem de çalışan şeyler yapmaya odaklanıyorum. JS, TS, Python, C# ve React ile çalışıyorum. Photoshop ve After Effects ile görseller üretiyorum.",
  available: false,

  contact: {
    email: "laschebest@gmail.com",
    github: "https://github.com/laschebest",
    instagram: "https://instagram.com/yunussmichaelson",
    twitter: "https://x.com/yunusmichaelson",
  },

  stats: [
    { value: "3+", label: "Yayında Proje" },
    { value: "6+", label: "Dil & Framework" },
    { value: "4", label: "Üzerinde Çalışılan Proje" },
    { value: "∞", label: "Öğrenme İsteği" },
  ],

  skills: [
    {
      icon: "⬛",
      name: "Development",
      items: [
        "JavaScript & TypeScript",
        "React & Next.js",
        "Python & C#",
        "ASP.NET & MongoDB",
        "TailwindCSS",
        "HTML & CSS",
      ],
    },
    {
      icon: "◧",
      name: "Design",
      items: [
        "UI/UX Design",
        "Adobe Photoshop",
        "After Effects",
        "Prototyping",
        "Visual Design",
        "Motion Design",
      ],
    },
    {
      icon: "◈",
      name: "Tools",
      items: ["Git & GitHub", "AWS", "Visual Studio", "VS Code", "SQL", "Node.js"],
    },
  ],

  ticker: [
    "UI Design",
    "UX Research",
    "Web Development",
    "React & Next.js",
    "Photoshop",
    "After Effects",
    "Full Stack",
    "TypeScript",
  ],

  seo: {
    title: "laschebest - Full Stack Developer",
    description: "Software Student & Full Stack Developer.",
    url: "https://lasche.vercel.app",
    ogImage: "https://lasche.vercel.app/l-logo.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
