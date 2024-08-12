// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],

  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:3306/graphql",
      },
    },
  },
});
