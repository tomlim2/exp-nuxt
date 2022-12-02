<template>
    <div class="server">server</div>
</template>

<script setup>
    const getDataFromNuxt = async () => {
        const result = await $fetch('/api/hello')
        console.log(result.api);
    }
    onMounted(()=>{
        getDataFromNuxt()
    })
</script>

<style lang="scss">
.server {
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