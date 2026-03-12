<div align="center">

# lasche portfolio

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=8B5CF6&center=true&vCenter=true&width=700&lines=Personal+portfolio+website;Built+with+Next.js+%2B+TypeScript;Minimal%2C+responsive+and+alive;Spotify+and+GitHub+integrated" alt="Typing SVG" />

<br />

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)
![Spotify API](https://img.shields.io/badge/Spotify_API-121212?style=for-the-badge&logo=spotify&logoColor=1ED760)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)

<br />

<img src="https://visitor-badge.laobi.icu/badge?page_id=laschebest.portfolio&left_text=visitors" alt="visitor badge" />
<img src="https://img.shields.io/github/stars/laschebest/lasche-portfolio?style=flat-square&color=8b5cf6" alt="stars" />
<img src="https://img.shields.io/github/last-commit/laschebest/lasche-portfolio?style=flat-square&color=f59e0b" alt="last commit" />

</div>

---

## ✦ About

Kendi portfolyo sitem.  
Kod, tasarım ve küçük detayların bir araya geldiği kişisel bir alan.

Canlı hali:  
**[lasche.vercel.app](https://lasche.vercel.app)**

---

## ✦ Preview

<div align="center">

### Light Mode
<img src="https://i.imgur.com/bAabAaq.png" alt="Light Preview" width="90%" />

</div>

---

## ✦ Features

- responsive tasarım
- mobile özel navbar
- GitHub'daki açıklaması olan repoları çekip listeleyen work kısmı
- repoları star sayısına göre sıralama
- Spotify anlık dinlenen şarkı kartı
- sade ama karakterli görsel dil
- server side veri çekme + client side yenileme mantığı

---

## ✦ Tech Stack

- **Next.js 14**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Spotify Web API**
- **GitHub API**

---

## ✦ Local Development

Projeyi lokal ortamda çalıştırmak için:

```bash
npm install
npm run dev
```
Uygulama varsayılan olarak şu adreste açılır:

http://localhost:3000

## ✦ Environment Variables

Spotify kartının çalışması için .env dosyasında şu değişkenler bulunmalıdır:
```
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```
Örnek dosya repo içinde mevcut:

.env.example

## ✦ Notes

- Spotify verisi server tarafında çekilir
- client tarafında kısa aralıklarla yenilenir
- GitHub tarafındaki seçili projeler otomatik olarak repolardan gelir
- açıklaması olmayan repoları da göstermek istersen filtre kısmını istediğin gibi düzenleyebilirsin

## ✦ Author
- [Instagram](https://instagram.com/yunussmichaelson)
- [X (Twitter)](https://x.com/yunusmichaelson)
