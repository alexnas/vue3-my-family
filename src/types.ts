interface IPerson {
  name: string
  age: number
  children: IChild[]
}

interface IChild {
  id: number
  name: string
  age: number
}

export type { IPerson, IChild }
