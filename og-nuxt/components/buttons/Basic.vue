<template>
    <button class="basic" :disabled="disabled">
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    disabled: {
        type: Boolean,
    },
})
</script>

<style lang="scss" scoped>
    .basic {
        padding: 8px 12px;
        border-radius: 4px;
        background-color: #252525;
        color: #fff;
        cursor: pointer;
        transition: ease-in-out 80ms background-color;

        &:hover{
            background-color: #151515;
        }

        &:disabled{
            opacity: .5;
            pointer-events: none;
        }
    }
</style>