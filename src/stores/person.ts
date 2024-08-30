import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IPerson } from '@/types'

const emptyPerson: IPerson = {
  name: '',
  age: null,
  children: []
}

export const usePersonStore = defineStore('person', () => {
  const person = ref<IPerson>({ ...emptyPerson })
  const tempPerson = ref<IPerson>({ ...emptyPerson })

  return { person, tempPerson }
})
