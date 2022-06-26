import { useQueries } from 'react-query'

const useComments = (commentsIds: string[]) => {
  const results = useQueries<Story[]>(storiesIds?.map((id: String) => ({
    queryKey: `/item/${id}`,
    enabled: !!storiesIds,
  })) ?? []) as UseQueryResult<Story>[]
}

export default useComments
