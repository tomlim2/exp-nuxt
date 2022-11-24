import SpotifyModel from "./spotifyModel";

class Model {
    spotify: SpotifyModel

    constructor () {
        this.spotify = new SpotifyModel
    }
}

export const useModel = () => new Model