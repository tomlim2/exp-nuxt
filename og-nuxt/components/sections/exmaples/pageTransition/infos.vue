<template>
    <div class="transition-page-infos">
        <h1>PAGE <br> #{{ $route.params.id }}</h1>
    </div>
</template>

<style>
body{
    background-color: #000 !important;
}
</style>

<style lang="scss">
.transition-page-infos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #fff;

    h1{
        font-size: 20rem;
        line-height: .9;
        text-align: center;
    }
}
</style>