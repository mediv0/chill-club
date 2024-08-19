// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/main.scss"],
  devtools: { enabled: false },

  app: {
    head: {
      title: "Chill club - listen to music and chill",
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        {
          hid: "description",
          name: "description",
          content: "Best music radios hand picked for you",
        },
        // open graph facebook
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Chill club - listen to music and chill",
        },
        { property: "og:site_name", content: "Chill club" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://chill-club.vercel.app/" },
        {
          property: "og:description",
          content: "Best music radios hand picked for you",
        },
        {
          property: "og:image",
          content:
            "https://repository-images.githubusercontent.com/387036634/c5e5aec4-146d-4a7a-ac4a-2eabbe0945da",
        },

        // Twitter
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://chill-club.vercel.app/" },
        {
          property: "twitter:title",
          content: "Chill club - listen to music and chill",
        },
        {
          property: "twitter:description",
          content: "Best music radios hand picked for you",
        },
        {
          property: "twitter:image",
          content:
            "https://repository-images.githubusercontent.com/387036634/c5e5aec4-146d-4a7a-ac4a-2eabbe0945da",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  nitro: {
    static: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image"],
});
