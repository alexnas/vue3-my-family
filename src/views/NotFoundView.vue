<script setup lang="ts">
// const pageTitle = 'Ooops - there is no such page...'
</script>

<template>
  <div class="mr-10 mt-5 text-right">
    <div class="pl-2 text-xl font-semibold text-gray-400">Ooops - there is no such page...</div>
    <router-link :to="{ path: '/' }" replace>Back to Home</router-link>
  </div>
</template>
