<template>
    <div>
      <Header />
      A *default* layout
      <slot />
    </div>
</template>

<script setup>
import { useModel } from '~~/models';

const model = useModel()
const getUserInfo = async () => {
  await model.spotify.getUserInfo()
}


onMounted(()=>{
  const hasAccessToken = Boolean(model.spotify.setAccessToken())
  console.log(hasAccessToken);
  if(hasAccessToken){
    getUserInfo()
  }
})
</script>