import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Global stylesheet (Tailwind is imported inside it)
  css: ['~/assets/css/main.css'],

  // Tailwind CSS v4 runs as a Vite plugin: no tailwind.config.js needed
  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Law Che P. Gotgot | Aspiring IT Developer',
      meta: [
        { name: 'description', content: 'Personal portfolio of Law Che P. Gotgot, a BSIT student and aspiring IT developer.' },
        { name: 'theme-color', content: '#080D12' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Sora:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },
})
