# XKDLYNN: Law's Portfolio

A two-page personal portfolio built with **Nuxt 4**, **Vue 3 (Composition API)** and **Tailwind CSS v4**.

## Run it locally

Requires Node.js 20.19+ (or 22+) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other commands: `npm run build` (production build), `npm run preview` (serve the build).

## Where to edit things

| I want to change...                          | Edit this file                  |
| -------------------------------------------- | ------------------------------- |
| Name, school, email, GitHub, Facebook, motto | `app/app.config.ts`             |
| Skill levels, interests, hobbies             | `app/pages/profile.vue` (top of `<script setup>`) |
| Colors and fonts                             | `app/assets/css/main.css` (`@theme`) |
| Profile photo                                | replace `public/images/profile.jpg` |
| Logo                                         | replace `public/images/logo.png` |

## Folder guide

- `app/pages/`: each file is a route (`index.vue` = `/`, `profile.vue` = `/profile`).
- `app/components/`: reusable pieces (`AppNavbar`, `HeroSection`, `SkillCard`, `ProfileSection`).
- `app/layouts/default.vue`: shared background, navbar and footer around every page.
- `app/assets/css/main.css`: Tailwind import, color tokens and a few shared styles.
- `app/app.config.ts`: your personal details in one place.
- `app/app.vue`: app entry; renders the layout and the current page.
- `public/`: static files served as-is (`/images/profile.jpg`, `/favicon.ico`).
- `nuxt.config.ts`: Nuxt settings, Tailwind plugin, fonts and page metadata.

## Share it

**ZIP:** delete `node_modules` and `.nuxt` first, then zip the `my-portfolio` folder.

**GitHub:**

```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/my-portfolio.git
git push -u origin main
```
