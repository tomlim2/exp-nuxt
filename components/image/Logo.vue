<template>
  <div
    id="logo"
    class="logo"
    :class="{ darkmode: isDarkmode }"
    :style="style"
    @click="props.onClick"
  >
    <!-- <img class="img" :src="state.source" /> -->
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
#logo {
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