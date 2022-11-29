<template>
  <div>
    redirect page
  </div>
</template>

<script setup>
import { useStore } from '@/stores/index'
import { useModel } from '~~/models';

const store = useStore();
const model = useModel()
const route = useRoute();
const router = useRouter();


const processSignin = () => {
  if (route.params.platform == 'spotify') {
    if (location.hash && location.hash.startsWith('#access_token')) {
      const tokenInfos = location.hash.split('&')[0];
      const token = tokenInfos.split('=')[1]

      store.spotify.setAccessToken(token)
    }
  }
  getUserInfo()
}

const getUserInfo = async () => {
  const result = await model.spotify.getUserInfo()
  if(result) {
    router.push('/spotify')
  }
}

definePageMeta({
  layout: "custom",
});

onMounted(() => {
  processSignin()
})
</script>