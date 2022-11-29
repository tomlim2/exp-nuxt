// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            spotify: {
                clientId: process.env.SPOTIFY_CLIENT_ID,
                redirectUri: process.env.SPOTIFY_REDIRECT_URI,
                authEndPoint: process.env.SPOTIFY_AUTH_ENDPOINT
            }
        }
    },
    modules: [
        '@pinia/nuxt',  
        [
            '@pinia/nuxt',
            {
              autoImports: [
                'defineStore',
                ['defineStore', 'definePiniaStore'],
              ],
            },
          ],
    ],
})
