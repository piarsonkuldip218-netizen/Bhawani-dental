# Bhawani Dental Clinic — Website Handover Document

**Handover date:** _______________
**Handed over by:** _______________ (developer)
**Handed over to:** Bhawani Dental Clinic / Dr. Neelam Shah

---

## 1. Live Website

**Live URL:** https://bhawanidental.github.io/Bhawani-dental/

> If the URL still shows the old developer username, it means the workflow needs one re-run. Open the **Actions** tab in GitHub and click **"Re-run all jobs"** on the latest workflow.

---

## 2. Accounts You Now Own

| Account | Username / Email | Password |
| --- | --- | --- |
| Gmail (master) | bhawanidental@gmail.com | _______________ |
| GitHub (code + hosting) | bhawanidental | _______________ |
| Google Business Profile (Maps) | linked to above Gmail | (uses Gmail password) |

> Store these somewhere safe. Recover via the Gmail account if forgotten.

---

## 3. How to Update Website Content

All clinic-facing text (phone, address, services, doctor info, reviews) lives in **one file**:

**File:** `lib/data.ts`

### To edit on phone or laptop (no software install needed):

1. Go to: https://github.com/bhawanidental/Bhawani-dental/blob/feat/initial-site/lib/data.ts
2. Click the pencil icon (Edit)
3. Make your changes
4. Scroll down → **"Commit changes"**
5. Wait 2 minutes → site auto-updates

### Common edits

| Want to change... | Field in `lib/data.ts` |
| --- | --- |
| Phone number | `contact.phone`, `contact.phoneRaw`, `contact.whatsapp` |
| Email | `contact.email` |
| Address | `contact.address` |
| Hours | `contact.hours` |
| Doctor name / qualification | `doctor.name`, `doctor.qualification` |
| Add / remove a service | `services` array |
| Add a patient review | `testimonials` array |
| Camp / discount banner | `promo.active` (true / false) and `promo.detail` |

### Turning the camp banner off

When the camp ends, edit `lib/data.ts`:

```ts
export const promo = {
  active: false,   // change true to false
  ...
};
```

Commit. Banner disappears in 2 minutes.

---

## 4. How to Add a Custom Domain (e.g. bhawanidental.com)

When you are ready to use a paid domain instead of the free `.github.io` URL:

1. Buy the domain from any registrar (GoDaddy, Namecheap, etc.) — buy it under **the clinic's name and email**.
2. In the registrar's DNS settings, add these records:
   - `A` record → host `@` → value `185.199.108.153`
   - `A` record → host `@` → value `185.199.109.153`
   - `A` record → host `@` → value `185.199.110.153`
   - `A` record → host `@` → value `185.199.111.153`
   - `CNAME` record → host `www` → value `bhawanidental.github.io`
3. In GitHub: **Settings → Pages → Custom domain** → enter `bhawanidental.com` → Save.
4. In GitHub: **Settings → Secrets and variables → Actions → Variables (tab)** → New variable:
   - Name: `CUSTOM_DOMAIN`
   - Value: `true`
5. Re-run the latest workflow under **Actions** tab.
6. Wait ~30 minutes for HTTPS to provision automatically.

---

## 5. What is Free vs. Paid

| Item | Cost | Renewal |
| --- | --- | --- |
| GitHub repo + hosting | **FREE** | Forever |
| Live `.github.io` URL | **FREE** | Forever |
| HTTPS / SSL certificate | **FREE** | Auto-renewed |
| Custom domain (`bhawanidental.com`) | ~ Rs. 800 / year | Annually |
| Email (Gmail) | **FREE** | Forever |

You will never receive a hosting bill for this website.

---

## 6. Technology Used

- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Three Fiber (3D scene)
- GitHub Pages (hosting)
- GitHub Actions (auto-deploy)

> Any web developer familiar with React / Next.js can work on this in the future.

---

## 7. Support

For changes you cannot make yourself, contact the developer:

| | |
| --- | --- |
| Name | _______________ |
| Phone | _______________ |
| Email | _______________ |

**Free support window:** 30 days from handover date for any bug fixes.

After that, hourly or per-change pricing applies (discuss with developer).

---

## 8. Files to Never Edit Manually

These files are auto-generated or technical configuration. Editing them by mistake will break the site:

- `package.json`, `package-lock.json`
- `next.config.mjs`
- `tsconfig.json`
- `tailwind.config.ts`
- `app/globals.css` (only if you understand CSS)
- Anything in `node_modules/` (this folder won't appear on GitHub anyway)

**Safe to edit:**
- `lib/data.ts` (everything content-related)
- `README.md` (this file's twin)
- `HANDOVER.md` (this file)

---

_End of Handover Document._
