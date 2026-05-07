# Zefi Agency

Marketing site for **Zefi Agency** — a global online reputation management studio.
Headquartered in Sydney, working with brands worldwide.

## Stack

Plain, dependency-free static site. No build step.

- `index.html` — single-page landing
- `styles.css` — design system, responsive layout, animations
- `script.js` — scroll-reveal, mobile menu, year stamp

## Local preview

```bash
python3 -m http.server 8765
# open http://127.0.0.1:8765
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In Vercel → **New Project** → Import this repository.
3. Framework Preset: **Other**. No build command. Output dir: `./`.
4. Deploy. Add custom domain `zefiagency.com` under **Project → Settings → Domains**.

## Structure

```
.
├── index.html
├── styles.css
├── script.js
├── .gitignore
└── README.md
```

## License

Proprietary © Zefi Agency Pty Ltd. All rights reserved.
