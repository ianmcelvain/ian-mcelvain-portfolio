import gql from '@rollup/plugin-graphql';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    plugins: [gql()],
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    public: {
      apiBase: '/api',
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/strapi',
      {
        strapi: {
          url: 'http://localhost:1337',
        },
      },
    ],
    ['@nuxtjs/apollo'],
  ],
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint:
  //         process.env.BACKEND_URL || 'http://localhost:1337/graphql',
  //     },
  //   },
  // },
  apollo: {
    clients: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URL || 'http://localhost:1337/graphql',
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
