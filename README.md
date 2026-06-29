# education-website

Action: file_editor create /app/frontend/website/README.md --file-text "# Brightline University — Frontend Website

A complete, frontend-only static website built for the **MANTRA 2026 Summer School** assignment.
Topic: **Educational Website (University / College)**

## Tech Stack
- HTML5 — semantic markup
- CSS3 — custom design system, Flexbox + Grid, fully responsive media queries
- Vanilla JavaScript — mobile menu, FAQ accordion, gallery lightbox, course filter, registration form validation, scroll reveal
- No frameworks · No build step · Pure static site

## Pages
| File | Page |
|------|------|
| `index.html` | Home — hero, marquee, bento highlights, programs preview, testimonials |
| `about.html` | About — story, mission/vision, values, leadership |
| `courses.html` | Courses — filterable program grid + FAQ accordion |
| `gallery.html` | Gallery — image grid with hover captions + lightbox |
| `contact.html` | Contact / Registration — form with client-side JS validation |

## Folder Structure
```
website/
├── index.html
├── about.html
├── courses.html
├── gallery.html
├── contact.html
├── css/
│   └── styles.css
└── js/
    └── script.js
```

## SEO Checklist
- ✅ Unique `<title>` on every page
- ✅ `meta description` + `meta keywords` on every page
- ✅ Open Graph tags
- ✅ One `<h1>` per page, semantic `<h2>`/`<h3>` hierarchy
- ✅ Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ✅ Descriptive `alt` text on every image
- ✅ Simple, readable filenames (`about.html`, `courses.html`, etc.)
- ✅ Internal linking between all pages

## JavaScript Features
1. **Mobile hamburger menu** — toggles on small screens
2. **FAQ accordion** — animated open/close with rotating \"+\" icon
3. **Course filter pills** — filter programs by level (UG / PG / Research / Short)
4. **Gallery lightbox** — click any image to view full size, close with ESC
5. **Registration form validation** — required-field, email regex, phone format, min-length; live + on-submit
6. **Scroll reveal** — fade-up animation on scroll
7. **Active nav link** highlighting

## Responsive Design
Mobile-first, with breakpoints at 600 / 720 / 760 / 900 / 1080 / 1280px.
Tested on phone (≤480), tablet (~768), and desktop (≥1280) viewports.

## Local Preview
```bash
# Any static server works
npx serve website -l 3000
# or
python3 -m http.server 3000 --directory website
```

## Deploy to Netlify
1. Push the contents of `website/` to a GitHub repository
2. On Netlify: **Add new site → Import from Git**
3. Build command: *(none — leave empty)*
4. Publish directory: `.` (or `website` if you pushed the parent folder)
5. Deploy

## Submission Details
- **Student:** Bandi Shanmukha Priya
- **Roll Number:** 250200137
- **Topic:** Educational site
- **Submission Date:** 2 July 2026
