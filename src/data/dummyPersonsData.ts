import type { IPerson } from '@/types'

export const person: IPerson = {
  name: 'Петр',
  age: 99,
  children: [
    {
      id: 1,
      name: 'Саша',
      age: 10
    },
    {
      id: 2,
      name: 'Нина',
      age: 5
    },
    {
      id: 3,
      name: 'Валера',
      age: 2
    }
  ]
}
