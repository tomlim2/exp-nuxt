import Axios from "axios"
import { useStore, store } from "~~/stores"


export default class SpotifyModel { 
    key: string
    baseUrl: string
    store: store
    constructor() {
        this.key = 'spotify/accessToken'
        this.baseUrl = 'https://api.spotify.com/v1/'
        this.store = useStore()
    }

    setAccessToken = () => {
        const accessToken = window.localStorage.getItem(this.key)
        return accessToken
    }

    setHeader = () => {
        const accessToken = this.setAccessToken()
        const headers = {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }
        return headers
    }

    GET = async (path: string) => {
        try {
            const response = await Axios.get(this.baseUrl + path, this.setHeader())    
            return response.data
        } catch (error) {
            this.store.spotify.removeAccessToken()
        }
        
        
    }

    signin = (authEndPoint: String, clientId: String, redirectUri: String, scopes: String[]) => {
        const url = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
        return window.location.replace(url);
    } 

    getUserInfo = async () => {        
        const result = await this.GET('me');
        
        this.store.spotify.userInfo = result;

        return result
        
    }
}