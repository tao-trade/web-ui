// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.TAOTRADE_API_URL || 'http://localhost:8000'
    }
  },
  devtools: { enabled: true }
})
