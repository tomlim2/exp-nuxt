<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id || 1))
const prev = computed(() => '/examples/page-transition/' + (id.value - 1))
const next = computed(() => '/examples/page-transition/' + (id.value + 1))
</script>
<template>
  <NuxtLayout name="default">
    <slot />
    <div class="links" v-if="$route.params.id">
      <ButtonsLink :pathName="prev">Prev</ButtonsLink> |
      <ButtonsLink :pathName="next">Next</ButtonsLink>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: fixed;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
}
</style>