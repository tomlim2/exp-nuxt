import { defineStore } from 'pinia'

const key = 'spotify/accessToken'

interface SpotifyStoreState {
    userInfo: Object | undefined
    accessToken: String | undefined
}

export const spotifyStore = defineStore('account', {
    state: (): SpotifyStoreState => ({ userInfo: undefined, accessToken: undefined }),
    getters: {
        isSignin: (state) => Boolean(state.userInfo),
    },
    actions: {
        setAccessToken(accessToken: string) {
            this.accessToken = String(accessToken)
            window.localStorage.setItem(key, accessToken);
        },
        removeAccessToken() {
            this.accessToken = undefined
            window.localStorage.removeItem(key);
        },
    },
})