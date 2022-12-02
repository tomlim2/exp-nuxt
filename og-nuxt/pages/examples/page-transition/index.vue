<template>
    <div class="page-transition main">
        <div class="content">
            <h2>Page Transition</h2>
            <div class="links">
                <ButtonsLink v-for="(itme, index) in 4" :key="index" :pathName="`/examples/page-transition/pattern-test${index}`">
                    {{`Pattern ${index}`}}
                </ButtonsLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.page-transition.main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #fff;

    .links{
        display: flex;
        gap: 12px;
    }
}
</style>