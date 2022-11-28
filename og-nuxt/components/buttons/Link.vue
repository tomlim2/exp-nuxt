<template>
    <NuxtLink class="link" :to="pathName">
        <slot />
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    pathName: {
        type: Number,
    },
})
</script>

<style lang="scss" scoped>
.link {
    padding: 8px 12px;
    border-radius: 4px;
    background-color: #252525;
    color: #fff;
    cursor: pointer;
    transition: ease-in-out 80ms background-color;

    &:hover {
        background-color: #151515;
    }
}
</style>