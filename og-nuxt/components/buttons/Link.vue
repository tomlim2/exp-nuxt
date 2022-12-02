<template>
    <NuxtLink class="link" :class="[className, {disabled:isDisabled}]" :to="pathName">
        <slot />
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    pathName: {
        type: String,
    },
    className: {
        type: String
    },
    isDisabled:{
        type: Boolean
    }
})
</script>

<style lang="scss" scoped>
.link {
    padding: 8px 12px;
    border-radius: 4px;
    background-color: #151515;
    color: #fff;

    transition: ease-in-out 80ms background-color;
    cursor: pointer;

    &.signined-spotify {
        background-color: #1db954;

        &:hover{
            color: #000;
            background-color: #1ed760;
        }
    }

    &:hover {
        background-color: #252525;        
    }

    &.disabled{
        opacity: .5;
        pointer-events: none;
    }
}
</style>