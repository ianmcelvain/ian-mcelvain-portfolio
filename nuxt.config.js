// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
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