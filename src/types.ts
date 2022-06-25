export interface Story {
  id: string
  by: string
  title: string
}

export type QueryError = { message: string } | undefined
