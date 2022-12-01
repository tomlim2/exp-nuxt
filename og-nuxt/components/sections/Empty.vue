<template>
    <section :style="{backgroundColor}" class="section">
        <div class="word">OG empty section</div> 
    </section>
</template>

<script setup>
import { useStore } from '~~/stores';

const store = useStore()
const router = useRouter()
const props = defineProps({
    backgroundColor: {
        type: String,
        default: '#000'
    }
})
onMounted(()=>{
    
})

const state = reactive({
    isSpotifySignined: computed(() => store.spotify.isSignin),
    userInfo: computed(() => store.spotify.userInfo),
})

const navigateTo = (pathName) => {
    router.push(pathName)
}
</script>

<style lang="scss">
.section{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    
    .word{
        color: #fff;
        mix-blend-mode: exclusion;
    }
}
</style>