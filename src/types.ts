interface IPerson {
  name: string
  age: number | null
  children: IChild[]
}

interface IChild {
  id: number
  name: string
  age: number | null
}

export type { IPerson, IChild }
