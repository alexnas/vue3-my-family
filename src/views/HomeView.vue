<script setup lang="ts">
import MainViewContainer from '@/views/MainViewContainer.vue'
</script>

<template>
  <main-view-container>
    <div>
      <h2>Персональные данные</h2>
      <div>Parent data</div>
    </div>
    <div>
      <div class="flex items-center justify-between pt-5">
        <h2>Дети (макс. 5)</h2>
        <button class="flex items-center rounded-full border-2 border-blue-400 px-3 text-blue-400">
          <div class="pr-2 text-2xl">+</div>
          Добавить ребенка
        </button>
      </div>

      <div>Children data form</div>
      <div class="pt-3">
        <button class="rounded-full border-2 border-blue-400 bg-blue-400 px-2 py-1 text-white">
          Сохранить
        </button>
      </div>
    </div>
  </main-view-container>
</template>
