# Druid LDN website

Source for [druidldn.studio](https://druidldn.studio). React (Create React App) + styled-components.

## Where things live

| To change… | Edit |
|---|---|
| Homepage text, skills list, client logos | `src/pages/Home/Home.tsx` |
| Builds (projects, text, photos, filters) | `src/pages/Builds/Builds.tsx` |
| About page / team | `src/pages/About/About.tsx` |
| Contact page | `src/pages/Contact/Contact.tsx` |
| Footer (address, email, phone) | `src/Components/Footer/Footer.tsx` |
| Page title, search & share-preview text | `public/index.html` |
| Photos | `src/assets/images/<client>/` (keep photos under ~2000px wide) |

The Hire page (`src/pages/HirePage`) is unfinished placeholder content; its route is switched off in `src/App.tsx`.

## Run locally

```
npm install --legacy-peer-deps
npm start
```

## Publishing

Every push to `main` builds the site and deploys it to GitHub Pages
(`.github/workflows/deploy.yml`). `public/CNAME` sets the custom domain.
