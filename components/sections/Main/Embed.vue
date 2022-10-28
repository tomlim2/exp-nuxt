<template>
  <div id="main" class="main">
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    {{state.countStore.count}}
    <button @click="onClick('plus')">+</button>
    <button @click="onClick('minus')">-</button>
    <Image :isDarkmode="true" @click="onClick('image')"></Image>
  </div>
</template>

<script setup lang="ts" scoped>
const state = reactive({
  countStore: computed(()=> useCountStore())
})

const onClick = (id:string) => {
  switch (id) {
    case 'plus':
        state.countStore.increment()
      break;
    case 'minus':
        state.countStore.minus()
      break;
    case 'image':
    console.log("tttttt");  
      break;
    default:
      break;
  }
  
}

</script>
