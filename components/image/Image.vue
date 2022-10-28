<template>
  <div
    id="image-frame"
    class="image-frame"
    :class="{ darkmode: props.isDarkmode }"
    :style="props.style"
    @click="props.onClick"
  >
    <!-- <img v-if="state.source" class="img" :src="state.source" /> -->
    <img class="img" src="~/assets/img/icon-question.svg" />
  </div>
</template>

<script setup lang="ts" scoped>
const props = defineProps({
  isDarkmode: {
    type: Boolean,
    default: false,
  },
  style: {
    type: String,
    default: "",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
#image-frame {
  overflow: hidden;

  &.darkmode {
    background-color: #252525;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>