import gql from '@rollup/plugin-graphql';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  vite: {
    plugins: [gql()],
  },
  runtimeConfig: {
    public: {
      apiBase: '/api',
      baseUrl: process.env.BASE_URL || 'http://127.0.0.1:3000',
    },
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
    prefix: '/api',
  },
  modules: ['@nuxtjs/strapi', '@nuxtjs/apollo', '@nuxtseo/module', '@nuxt/ui'],
  apollo: {
    clients: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URL || 'http://127.0.0.1:1337/graphql',
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/layout',
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
});
