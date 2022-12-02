const head = {
    charset: 'utf-16',
    viewport: 'width=500, initial-scale=1',
    title: 'OG-Nuxt',
    link: [{
        hid: 'icon',
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.svg'
    }],
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
}
const spotifyEnv = {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    authEndPoint: process.env.SPOTIFY_AUTH_ENDPOINT
}

const cssOptions = {
    preprocessorOptions: {
        scss: {
            additionalData: '@use "@/assets/styles/reset.scss" as *;'
        }
    }
}

export default defineNuxtConfig({
    app: {
        head,
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    runtimeConfig: {
        public: {
            spotify: spotifyEnv
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
    vite: {
        css: cssOptions
    }
})
