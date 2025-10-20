# my-blogprofile

Personal portfolio + mini blog built with React (Vite) and deployed to GitHub Pages.

- Live site: `https://Claudeyami.github.io/my-blogprofile`
- Stack: React 19, React Router, Vite, Tailwind (utility styles), GitHub Pages

## Getting started

```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview local production build
npm run preview

# lint
npm run lint
```

## Deploy to GitHub Pages

This project is configured to deploy with the `gh-pages` package. It builds the app and publishes the `dist/` folder to the `gh-pages` branch.

Important configs already set:
- `package.json`
  - `homepage: "https://Claudeyami.github.io/my-blogprofile"`
  - scripts: `predeploy` and `deploy`
- `vite.config.js`
  - `base: "/my-blogprofile/"` (required for assets on GitHub Pages)
- Router
  - Uses `HashRouter` to avoid 404 when reloading on GitHub Pages

First-time setup and publish:
```bash
# if repo is not initialized yet
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Claudeyami/my-blogprofile.git
git push -u origin main

# publish to GitHub Pages
npm run deploy
```
After a minute, your site should be available at `https://Claudeyami.github.io/my-blogprofile`.

## Project structure

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    ProjectCard.jsx
  pages/
    Home.jsx        # landing page (about, skills, projects, blog highlight)
    Projects.jsx    # projects grid
    Blog.jsx        # blog page placeholder
    Contact.jsx     # contact page
  assets/
index.html
vite.config.js
```

## Notes
- If you rename the repository or username, update:
  - `package.json > homepage`
  - `vite.config.js > base`
- Re-run `npm run deploy` whenever you want to publish updates.
