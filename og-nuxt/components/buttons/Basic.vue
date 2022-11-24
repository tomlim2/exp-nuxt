<template>
    <button class="basic">
        <slot />
    </button>
</template>

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
    }
</style>