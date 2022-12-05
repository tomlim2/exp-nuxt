<script setup lang="ts">
definePageMeta({
    layout:'custom',
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
  middleware (to, from) {
    const prevId = Number(from.params.id)
    const nowId = Number(to.params.id)
    const transitionDirection = (nowId - prevId) == 1 ? 'slide-left' : 'slide-right'
    
    //@ts-ignore
    to.meta.pageTransition.name = transitionDirection
  }
})
</script>

<template>
    <h1>#{{ $route.params.id }}</h1>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.2s;
}

.slide-left-enter-from {
    opacity: 0;
    transform: translate(50px, 0);
}

.slide-left-leave-to {
    opacity: 0;
    transform: translate(-50px, 0);
}

.slide-right-enter-from {
    opacity: 0;
    transform: translate(-50px, 0);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translate(50px, 0);
}
</style>