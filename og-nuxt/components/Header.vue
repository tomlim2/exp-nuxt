<template>
<header class="header">
    <SvgsLogo :size='36' color='#000' />
    <nav class="nav">
        <ul class="menus">
            <li class="menu"><ButtonsLink pathName="/todo">todo</ButtonsLink></li>
            <li class="menu"><ButtonsLink pathName="/spotify">spotify</ButtonsLink></li>
        </ul>
    </nav>
</header>
</template>

<script setup>
definePageMeta({
    layout: "custom",
});

onMounted(()=>{
    
})
</script>

<style lang="scss">
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav{
            .menus{
                display: flex;
                gap: 4px;
                .menu{

                }
            }
        }
    }
</style>
