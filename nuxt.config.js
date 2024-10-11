import path from 'path';

const __filename = import.meta.url;
const __dirname = path.dirname(__filename);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://ianmcelvain.com',
    name: 'Ian McElvain',
    description: 'Writing games, native apps, & websites since 2012',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  colorMode: {
    preference: 'light',
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  target: 'static',
  ssr: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      apiBase: '/api',
      baseUrl: process.env.BASE_URL || 'http://127.0.0.1:3000',
    },
  },
  modules: ['@nuxtseo/module', '@nuxt/ui', '@nuxt/content', '@nuxt/eslint'],
  eslint: {

  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
});
