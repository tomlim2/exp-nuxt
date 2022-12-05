<template>
    <div>
      <Header />
      <slot />
    </div>
</template>

<script setup>
// import { useModel } from '~~/models';

// const model = useModel()
// const getUserInfo = async () => {
//   await model.spotify.getUserInfo()
// }

// onMounted(()=>{
//   const hasAccessToken = Boolean(model.spotify.setAccessToken())
//   if(hasAccessToken){
//     getUserInfo()
//   }
// })
</script>