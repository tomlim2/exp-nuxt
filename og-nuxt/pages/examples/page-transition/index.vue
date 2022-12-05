<template>
    <div class="page-transition main">
        <div class="content">
            <h2>Page Transition</h2>
            <router-view/>
            <slot/>
        </div>
    </div>
</template>

<script setup>
// definePageMeta({
//     pageTransition: {
//         name: 'home'
//     }
// })
</script>

<style lang="scss">
.page-transition.main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #fff;

    .links {
        display: flex;
        gap: 12px;
    }
}
</style>

<style>
.home-enter-active,
.home-leave-active {
    transition: opacity .5s;
}

.home-enter,
.home-leave-active {
    opacity: 0;
}
</style>