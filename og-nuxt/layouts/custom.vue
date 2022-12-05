<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id || 1))
const prev = computed(() => '/examples/page-transition/' + (id.value - 1))
const next = computed(() => '/examples/page-transition/' + (id.value + 1))
</script>
<template>
  <div class="custom">
    <slot />
    <div v-if="$route.params.id">
      <NuxtLink :to="prev">⬅️</NuxtLink> |
      <NuxtLink :to="next">➡️</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  .custom{
    width: 100vw;
    height: 100vh;
    background-color: beige;
  }
</style>