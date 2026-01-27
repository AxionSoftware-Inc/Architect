# Architecture Website

Bu loyiha 100% statik HTML, CSS va JS dan iborat. Hech qanday murakkab backend talab qilinmaydi.

## Qanday qilib saytni ko'rish mumkin? (Preview)

Sizda "components" papkasi borligi uchun, brauzerning xavfsizlik qoidalari to'g'ridan-to'g'ri `file://` orqali fayllarni birlashtirishga ruxsat bermaydi. Shuning uchun lokal server kerak.

**Bu server saytning bir qismi emas, faqat sizning kompyuteringizda ko'rish uchun yordamchi vosita.**

### 1-usul (Eng osoni)
Papkaning ichidagi **`run_server.bat`** faylini ikki marta bosing.
So'ng brauzerda http://localhost:8000 manzilini oching.

### 2-usul (Node.js orqali)
Agar Node.js o'rnatilgan bo'lsa:
```bash
npx serve
```
yoki
```bash
npm start
```

## GitHub Pages ga joylash

GitHub Pages ga yuklaganingizda hech narsa qilishingiz shart emas. Shunchaki kodni yuklaysiz va u **avtomatik ishlaydi**. Chunki GitHub o'zi barcha xavfsizlik talablariga javob beradigan serverni taqdim etadi.

**Muhim:** `index.html` ni to'g'ridan-to'g'ri (sichqoncha bilan ikki marta bosib) ochmang. U ishlamaydi. Yuqoridagi usullardan foydalaning.
