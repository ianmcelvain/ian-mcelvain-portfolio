import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/seo',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
  ],
  ssr: true,

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://ianmcelvain.com',
    name: 'Ian McElvain',
    description: 'Writing games, native apps, & websites since 2012',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  colorMode: {
    preference: 'light',
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

  runtimeConfig: {
    public: {
      apiBase: '/api',
      baseUrl: process.env.BASE_URL || 'http://127.0.0.1:3000',
    },
  },

  compatibilityDate: '2024-12-06',

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },

  target: 'static',
});
