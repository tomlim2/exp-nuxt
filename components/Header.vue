<template>
  <header id="header" class="header">
    <nav class="nav">
      <ImageLogo class="logo" :isDarkmode="true" :onClick="onClick" />
      <ul class="menus">
        <li class="menu"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="menu"><NuxtLink to="/works">Works</NuxtLink></li>
        <li class="menu"><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts" scoped>
const onClick = () => {
  console.log("uiui");
}

</script>


<style scoped>
.logo {
  width: 100px;
  height: 100px;
}
ul {
  list-style: none;
}
</style>