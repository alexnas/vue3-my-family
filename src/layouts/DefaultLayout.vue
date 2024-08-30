<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="flex h-screen flex-col bg-white">
    <TheHeader />

    <main class="flex flex-1 overflow-hidden">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
