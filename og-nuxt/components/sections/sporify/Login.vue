<template>
    <ButtonsBasic @click="onClick">
        login to spotify
    </ButtonsBasic>
</template>

<script setup>
import { useModel } from '~~/models';

const config = useRuntimeConfig()

const model = useModel()
const onClick = () => {
    const authEndPoint = config.spotify.authEndPoint
    const clientId = config.spotify.clientId
    const redirectUri = config.spotify.redirectUri
    const scopes = [
        "user-read-currently-playing",
        "user-read-playback-state",
    ];
    model.spotify.signin(authEndPoint, clientId, redirectUri, scopes)
}
</script>