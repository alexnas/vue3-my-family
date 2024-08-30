import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IPerson } from '@/types'
import { person as dummyPersonData } from '@/data/dummyPersonsData'

const emptyPerson: IPerson = {
  name: '',
  age: -1,
  children: []
}

export const usePersonStore = defineStore('person', () => {
  const person = ref<IPerson>({ ...emptyPerson })
  //   const person = ref<IPerson>({ ...dummyPersonData })

  return { person }
})
