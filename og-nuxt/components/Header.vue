<template>
    <header class="header">
        <SvgsLogo @click="navigateTo('/')" :size='36' color='#000' />
        <nav class="nav">
            <ul class="menus">
                <li class="menu">
                    <ButtonsLink pathName="/todo">Todo</ButtonsLink>
                </li>
                <li class="menu">
                    <ButtonsLink pathName="/spotify" :className="state.isSpotifySignined ? 'signined-spotify' : ''">Spotify</ButtonsLink>
                </li>
            </ul>
            <UserProfile :imgUrl="state.isSpotifySignined ? state.userInfo.images[0].url : ''" />
        </nav>
    </header>
</template>

<script setup>
import { useStore } from '~~/stores';


const store = useStore()
const router = useRouter()

const state = reactive({
    isSpotifySignined: computed(() => store.spotify.isSignin),
    userInfo: computed(() => store.spotify.userInfo),
})

const navigateTo = (pathName) => {
    router.push(pathName)
}


</script>

<style lang="scss">
.header {
    position: fixed;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    .nav {
        display: flex;
        align-items: center;
        gap: 8px;

        .menus {
            display: flex;
            gap: 8px;
        }
    }
}
</style>
