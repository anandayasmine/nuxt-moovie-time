import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    // Make environment variables accessible here
    public: {
      API_KEY: process.env.API_KEY,
      // Add more environment variables as needed
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
