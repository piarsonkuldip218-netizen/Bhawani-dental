# Bhawani Dental Clinic — Website

Premium, single-page marketing website for Bhawani Dental Clinic.
Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Three Fiber**.

> **Live URL** (after first deploy): `https://<github-username>.github.io/Bhawani-dental/`

---

## ✨ Features

- Premium glassmorphism design with teal/cyan dental palette
- 3D animated hero with stylized tooth (R3F + drei)
- Smooth scroll animations (Framer Motion)
- Mobile-optimized: capped DPR, paused 3D when off-screen, reduced blur on small screens
- Centralized content in `lib/data.ts` — edit one file, the whole site updates
- Static export — deploys free to **GitHub Pages**

---

## 🚀 Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📝 Editing clinic content (the most common task)

All client-facing text, contact details, services, doctor info, testimonials, and navigation live in **one file**:

```
lib/data.ts
```

Examples of what to edit:

| Want to change... | Edit this in `lib/data.ts` |
| --- | --- |
| Phone number, address, hours | `contact` object |
| Doctor name, qualification | `doctor` object |
| Services offered | `services` array |
| Patient reviews | `testimonials` array |
| Why-us reasons | `whyUs` array |
| Stats (years, patients) | `stats` array |
| Nav menu items | `navLinks` array |

After editing, push to `main` and GitHub Actions will auto-deploy within ~2 minutes.

---

## 🌐 Deployment — GitHub Pages

The repo is pre-configured for GitHub Pages. **First-time setup (one click):**

1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **GitHub Actions**.
4. The first deploy runs automatically. Subsequent pushes to `main` redeploy.

The site URL is `https://<owner>.github.io/Bhawani-dental/`.

### Custom domain (optional)

When the client buys a domain (e.g. `bhawanidental.com`):

1. In the domain registrar (GoDaddy/Namecheap), add these DNS records:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - or a `CNAME` for `www` → `<owner>.github.io`
2. In GitHub repo: **Settings → Pages → Custom domain** → enter the domain.
3. In GitHub repo: **Settings → Secrets and variables → Actions → Variables** → add:
   - Name: `CUSTOM_DOMAIN`
   - Value: `true`
4. Re-run the deploy workflow. Wait for HTTPS to provision (a few minutes).

---

## 📦 Project structure

```
Bhawani-dental/
├── app/
│   ├── globals.css          # Theme, glass utilities, mobile optimizations
│   ├── layout.tsx           # Fonts, SEO metadata
│   └── page.tsx             # Section composition
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx             # Hero w/ 3D background
│   ├── Scene3D.tsx          # R3F canvas, tooth + particles
│   ├── Services.tsx
│   ├── About.tsx
│   ├── WhyUs.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx          # Form + map
│   ├── Footer.tsx
│   ├── FloatingButtons.tsx  # WhatsApp + Call
│   └── ScrollProgress.tsx
├── lib/
│   ├── data.ts              # ⭐ Edit here for content updates
│   └── path.ts              # GitHub Pages asset helper
├── .github/workflows/
│   └── deploy.yml           # Auto-deploy
├── next.config.ts           # Static export, basePath toggling
├── tailwind.config.ts       # Dental palette
└── package.json
```

---

## 🤝 Handover checklist (developer → client)

- [ ] Repo transferred to client's GitHub account (Settings → General → Transfer ownership)
- [ ] GitHub Pages re-enabled on client's account (Settings → Pages → Source: GitHub Actions)
- [ ] Custom domain DNS verified and HTTPS active
- [ ] Client given access to:
  - [ ] GitHub repo (now owned by them)
  - [ ] Domain registrar account (purchased in client's name)
  - [ ] Google Business Profile linked to clinic Gmail
  - [ ] (Optional) Google Analytics property
- [ ] Walk-through video / call covering: how to edit `lib/data.ts`, how to push changes, where to view live site

---

## 📄 License

Proprietary — built for Bhawani Dental Clinic.
