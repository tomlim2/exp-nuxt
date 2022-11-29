<template>
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" :width="size / 27 * 49" :height="size" viewBox="0 0 49 27">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M24.5 21.3281C22.0524 24.7613 18.0376 27 13.5 27C6.04416 27 0 20.9558 0 13.5C0 6.04416 6.04416 0 13.5 0C18.0376 0 22.0524 2.23873 24.5 5.67193C26.9476 2.23873 30.9624 0 35.5 0V13.5H49C49 20.9558 42.9558 27 35.5 27C30.9624 27 26.9476 24.7613 24.5 21.3281Z"
            :fill="color" />
    </svg>
</template>

<script setup>
const props = defineProps({
    size: {
        type: Number,
    },
    color: {
        type: String,
    }
})
</script>

<style lang="scss">
.logo {
    cursor: pointer;
}
</style>