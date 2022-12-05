<template>
    <div class="hub">
        <div class="links">
            <ButtonsLink pathName="/examples/server">
                Server
            </ButtonsLink>
            <ButtonsLink pathName="/examples/middleware">
                Middleware
            </ButtonsLink>
            <ButtonsLink pathName="/examples/page-transition/1">
                Page Transition
            </ButtonsLink>
        </div>
    </div>
</template>

<style lang="scss">
.hub {
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
