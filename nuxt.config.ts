import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/i18n", "@nuxt/image"],
  future: {
    compatibilityVersion: 5,
  },
  experimental: {
    typescriptPlugin: true,
    defaults: {
      nuxtLink: {
        prefetchOn: {
          visibility: true,
          interaction: true,
        },
      },
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: [
      { code: "en", language: "en-US", name: "English", file: "en.yaml" },
      { code: "zh", language: "zh-TW", name: "中文", file: "zh-TW.yaml" },
    ],
    defaultLocale: "en",
  },
});
