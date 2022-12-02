<template>
    {{testAddWord('hi there')}}
</template>

<script setup>
definePageMeta({
  middleware: "auth"
  // or middleware: 'auth'
})
</script>