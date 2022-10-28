<template>
  <SectionsMainEmbed />
</template>

<script setup lang="ts">
const title = ref("My App");
const description = ref("My App Description");
// This will be reactive even you change title/description above
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>