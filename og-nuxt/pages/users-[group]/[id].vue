<template>
    <div>
        <h2>params group</h2>
        <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
        <h2>params slug</h2>
        <p>{{ $route.params.slug }}</p>
    </div>
    
</template>

<script setup>
const route = useRoute()
if (route.params.group === 'admins' && !route.params.id) {
  console.log('Warning! Make sure user is authenticated!')
}
</script>