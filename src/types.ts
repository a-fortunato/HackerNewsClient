export interface Story {
  id: string
  by: string
  title: string
  url: string
}

export type QueryError = { message: string } | undefined
