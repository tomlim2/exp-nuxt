<template>
    <div class="transition-pattern">
        <div class="content">
            <h2 class="title">You are in pattern {{route.params.testId}}</h2>
            <div class="links">
                <ButtonsLink :pathName="`/examples/page-transition/pattern-test${Number(route.params.testId) - 1}`" :isDisabled="Number(route.params.testId) < 1">
                    {{route.params.testId < 1 ? 'You are in the first index' : `Go to pattern ${Number(route.params.testId) - 1}`}}
                </ButtonsLink>
                <ButtonsLink :pathName="`/examples/page-transition/pattern-test${Number(route.params.testId) + 1}`">
                    {{`Go to pattern ${Number(route.params.testId) + 1}`}}
                </ButtonsLink>
            </div>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

const route = useRoute()
onMounted(() => {
    console.log(route.params.testId);
})
</script>

<style lang="scss" scoped>
.transition-pattern {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #fff;

    .content {
        h2.title{
            display: flex;
            justify-content: center;
        }
        .links {
            display: flex;
            gap: 12px;
            margin-top: 20px;
        }
    }
}
</style>