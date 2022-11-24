export default class SpotifyModel { 
    signin = (authEndPoint: String, clientId: String, redirectUri: String, scopes: String[]) => {
        const url = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
        return window.location.replace(url);
    }   
}