<!-- GitHub "About" one-liner (copy this into repo description):
Multilingual brutalist portfolio — React, Vite, EN/JP, EmailJS contact. Live → new-porfolio-rosy.vercel.app
-->

<p align="center">
  <br />
  <strong>JGCB</strong>
  <br />
  <sub>Full-Stack Developer · Japan</sub>
  <br /><br />
  <a href="https://new-porfolio-rosy.vercel.app/"><strong>↗ Live site</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/JohnGabriel1998/NewPorfolio">Source</a>
</p>

---

## 00 / Intent

**Personal portfolio** for **John Gabriel Caganda Bagacina** — not a generic template.  
Editorial layout, high contrast, and motion that feels intentional: **ink** `#1d201e`, **paper** `#f5f3ed`, **acid** `#d5ff42`, **orange** `#ff7548`, offset shadows, film grain, and a cursor-driven glow.

Built to read well in **English and Japanese**, ship fast on **Vercel**, and turn contact messages into real inbox mail via **EmailJS**.

---

## 01 / What’s inside

| Section | What you get |
|--------|----------------|
| **Home** | Hero with portrait, stack line, scroll CTA |
| **About** | Story + stat strip (tech, languages, base) |
| **Education** | Timeline + awards on dark panel |
| **Services** | Three-column service grid |
| **Portfolio** | Showcase projects with live links & tags |
| **Skills** | Capability grid |
| **Contact** | Form + in-panel **success/error modal**, mailto fallback |

**Also:** fixed header with scroll progress, pill nav, EN/JP toggle, locale-aware resume PDFs, reveal-on-scroll animations.

---

## 02 / Stack

```
React  ·  Vite  ·  CSS (section-scoped)  ·  @emailjs/browser  ·  Vercel
```

No UI framework — custom components and styles aligned to the site’s brutalist/editorial look (`Manrope`, `DM Mono`, `Playfair Display`).

---

## 03 / Run locally

```bash
git clone https://github.com/JohnGabriel1998/NewPorfolio.git
cd NewPorfolio
npm install
cp .env.example .env   # add your keys
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

**Scripts**

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |

---

## 04 / Contact form (EmailJS)

Add to `.env` (see `.env.example`):

```env
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
```

Optional fallback:

```env
VITE_WEB3FORMS_ACCESS_KEY=
```

**Production:** set the same `VITE_*` variables in **Vercel → Settings → Environment Variables**, then redeploy.  
**EmailJS:** allow your Vercel domain under Account → Security / Domains.

Template reference files live in `/emailjs` for the EmailJS dashboard.

---

## 05 / Structure

```
src/
├── components/     Header, ContactForm, ContactFormModal, ResumeLink, …
├── sections/         One file per page section
├── styles/           CSS paired to sections (HeroSection.css, …)
├── i18n/locales/     en.js · ja.js
└── App.jsx           I18nProvider + layout
public/
└── resumes/          EN + JA PDFs
```

---

## 06 / Links

- **Live:** [new-porfolio-rosy.vercel.app](https://new-porfolio-rosy.vercel.app/)
- **GitHub:** [@JohnGabriel1998](https://github.com/JohnGabriel1998)
- **LinkedIn:** [johngabrielbagacina](https://linkedin.com/in/johngabrielbagacina)

---

<p align="center">
  <sub>© 2026 JGCB · Designed & built with purpose</sub>
</p>
