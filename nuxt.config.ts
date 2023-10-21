// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    [
      "@nuxtjs/strapi",
      {
        strapi: {
          url: "http://localhost:1337",
        },
      },
    ],
  ],
});
