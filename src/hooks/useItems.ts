import { useQueries, UseQueryResult } from 'react-query'

interface Arguments {
  ids: string[] | undefined,
  enabled?: boolean
}

function useItems<T>({ ids, enabled = true }: Arguments) {
  const results = useQueries<T[]>(ids?.map((id: String) => ({
    queryKey: `/item/${id}`,
    enabled,
  })) ?? []) as UseQueryResult<T>[]
  return results
}

export default useItems
