<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePersonStore } from '@/stores/person'
import MainViewContainer from '@/views/MainViewContainer.vue'

const personStore = usePersonStore()
const { person } = storeToRefs(personStore)
</script>

<template>
  <main-view-container>
    <div v-if="person.name" class="mt-2 font-semibold">
      <div>
        <h2>Персональные данные</h2>

        <div v-if="person.name" class="mt-2 font-semibold">
          {{ person.name }}, {{ person.age }} лет
        </div>
      </div>
      <div>
        <div class="pt-8">
          <h2>Дети</h2>
          <div v-for="child in person.children" :key="child.id">
            <div class="mt-3 w-fit rounded-sm bg-gray-200 p-2 font-semibold">
              {{ child.name }}, {{ child.age }} лет
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mt-2 font-semibold">Данные отсутствуют</div>
  </main-view-container>
</template>
