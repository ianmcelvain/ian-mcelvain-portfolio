import gql from '@rollup/plugin-graphql';

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
  vite: {
    plugins: [gql()],
  },
  runtimeConfig: {
    mailchimpAPIKey: process.env.MAILCHIMP_API_KEY,
    mailchimpServer: process.env.MAILCHIMP_SERVER,
    mailchimpAudienceID: process.env.MAILCHIMP_AUDIENCE_ID,
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
