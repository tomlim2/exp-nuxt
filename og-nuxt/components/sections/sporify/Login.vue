<template>
    <div class="sigin-section">
        <ButtonsBasic @click="signinToSpotify" :disabled="state.isSpotifySignined">
            Login to Spotify
        </ButtonsBasic>
        <ButtonsBasic @click="signout" :disabled="!state.isSpotifySignined">
            Logout
        </ButtonsBasic>
    </div>

</template>

<script setup>
import { useModel } from '~~/models';
import { useStore } from '~~/stores';

const store = useStore()
const config = useRuntimeConfig()
const state = reactive({
    isSpotifySignined: computed(() => store.spotify.isSignin),
    userInfo: computed(() => store.spotify.userInfo),
})

const model = useModel()
const signinToSpotify = () => {
    const authEndPoint = config.spotify.authEndPoint
    const clientId = config.spotify.clientId
    const redirectUri = config.spotify.redirectUri
    const scopes = [
        "user-read-currently-playing",
        "user-read-playback-state",
    ];

    model.spotify.signin(authEndPoint, clientId, redirectUri, scopes)
}

const signout = () => {
    model.spotify.signout()
}
</script>

<style lang="scss">
.sigin-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    gap: 10px;
    background-color: #fff;
}
</style>