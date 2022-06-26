export interface Story {
  id: string
  by: string
  title: string
  url: string
  kids: string[]
  time: number
}

export interface Comment {
  by: string
  id: string
  kids: string[]
  parent: string
  text: string
  time: number
}

export type QueryError = { message: string } | undefined
