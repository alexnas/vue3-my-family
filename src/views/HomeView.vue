<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePersonStore } from '@/stores/person'
import MainViewContainer from '@/views/MainViewContainer.vue'

const personStore = usePersonStore()
const { person, tempPerson } = storeToRefs(personStore)

const addChild = () => {
  const arrLength = +tempPerson.value.children.length

  tempPerson.value.children.push({
    id: arrLength === 0 ? 1 : tempPerson.value.children[arrLength - 1].id + 1,
    name: '',
    age: null
  })
}

const deleteChild = (id: number) => {
  tempPerson.value.children = tempPerson.value.children.filter((child) => child.id !== +id)
}

const onSubmit = () => {
  person.value = {
    ...person.value,
    name: tempPerson.value.name,
    age: tempPerson.value.age,
    children: [...tempPerson.value.children]
  }
}
</script>

<template>
  <main-view-container>
    <form @submit.prevent="onSubmit">
      <div>
        <h2>Персональные данные</h2>

        <div class="mb-2 flex flex-col border-2 border-gray-100 p-2">
          <label class="text-sm text-gray-400" for="name">Имя</label>
          <input id="name" v-model="tempPerson.name" placeholder="Введите имя" />
        </div>
        <div class="flex flex-col border-2 border-gray-100 p-2">
          <label class="text-sm text-gray-400" for="age">Возраст</label>
          <input id="age" v-model="tempPerson.age" placeholder="Введите возраст" />
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between pt-5">
          <h2>Дети (макс. 5)</h2>
          <button
            @click.prevent="addChild"
            v-if="tempPerson.children.length <= 5"
            class="flex items-center rounded-full border-2 border-blue-400 px-3 text-blue-400 hover:border-blue-500 hover:text-blue-500"
          >
            <div class="pr-2 text-2xl">+</div>
            Добавить ребенка
          </button>
        </div>

        <div v-for="child in tempPerson.children" :key="child.id">
          <div class="mt-2 flex gap-2">
            <div class="flex flex-col border-2 border-gray-100 p-2">
              <label class="text-sm text-gray-400" for="name">Введите имя</label>
              <input id="name" v-model="child.name" placeholder="Имя" />
            </div>
            <div class="flex flex-col border-2 border-gray-100 p-2">
              <label class="text-sm text-gray-400" for="age">Возраст</label>
              <input id="age" v-model="child.age" placeholder="Введите возраст" />
            </div>
            <div class="flex items-center p-2">
              <button @click.prevent="deleteChild(child.id)" class="text-blue-400">Удалить</button>
            </div>
          </div>
        </div>

        <div class="pt-3">
          <button
            class="rounded-full border-2 border-blue-400 bg-blue-400 px-2 py-1 text-white hover:bg-blue-500"
          >
            Сохранить
          </button>
        </div>
      </div>
    </form>
  </main-view-container>
</template>
