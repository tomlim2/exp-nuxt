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

<template>
    <header class="header">
        <div class="logo">
            <SvgsLogo @click="navigateTo('/')" :size='36' color='#fff' />
        </div>
        <nav class="nav">
            <ul class="menus">
                <li class="menu"><ButtonsLink pathName="/examples">Nuxt Examples</ButtonsLink></li>
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



<style lang="scss">
.header {    
    .logo{
        position: fixed;
        top: 16px;
        left: 16px;
        mix-blend-mode: exclusion;
        z-index: 9999;
    }
    
    .nav {
        position: fixed;
        top: 16px;
        right: 16px;
        display: flex;
        align-items: center;
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 9999;

        .menus {
            display: flex;
            gap: 8px;
        }
    }
}
</style>
