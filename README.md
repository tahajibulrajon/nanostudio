# Nano Studio

A responsive, multi-section studio website for Nano Studio, built with semantic HTML, custom CSS and vanilla JavaScript.

## Preview locally

Open `index.html` in a browser, or run a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

- `index.html` — page structure and content
- `styles.css` — visual system, responsive layouts and motion
- `script.js` — mobile navigation, reveal effects and enquiry-form prototype
- `assets/favicon.svg` — browser icon
- `assets/og-cover.svg` — social sharing graphic

## Design system

- Steel Grey: `#64717E`
- Midnight Graphite: `#121820`
- Electric Lime: `#A6E85F`

## Before launch

1. Replace concept portfolio cards with approved, real work as it becomes available.
2. Connect the enquiry form to a trusted form backend (for example, Cloudflare Pages Forms alternative / Formspree / a custom endpoint). The current form is deliberately a front-end prototype and does not send or store submissions.
3. Add verified business contact details and social profile links.
4. Review all copy, accessibility and mobile layouts.

## Deployment

This is a static site and can be deployed directly to Cloudflare Pages. Use the repository root as the project directory. No build command is required; the output directory is `/` (root).
