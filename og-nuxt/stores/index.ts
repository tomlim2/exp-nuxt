import { spotifyStore } from '~~/stores/spotify'

export class store {
    spotify: any
    constructor() {
        this.spotify = spotifyStore()
    }
}

export const useStore = () => {
    return new store
}