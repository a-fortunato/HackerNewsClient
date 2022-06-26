import { useEffect, useMemo, useState } from 'react'
import { useQueries, useQuery, UseQueryResult } from 'react-query'
import { QueryError, Story } from '../types'

const useBestStories = () => {
  const [isFetchingStories, setFetchingStories] = useState(true)

  const {
    data: storiesIds,
    isLoading,
    error,
  } = useQuery<string[], QueryError>('/beststories')

  const results = useQueries<Story[]>(storiesIds?.map((id: String) => ({
    queryKey: `/item/${id}`,
    enabled: !!storiesIds,
  })) ?? []) as UseQueryResult<Story>[]

  const stories = useMemo<Story[]>(
    () => results.map((s) => s.data).filter((s) => s !== undefined) as Story[],
    [results],
  )

  useEffect(
    () => {
      // if (results.filter((s) => s.data !== undefined).length === storiesIds?.length) {
      if (stories.length === storiesIds?.length) {
        setFetchingStories(false)
      }
    },
    [stories.length, storiesIds?.length],
  )

  return {
    stories,
    isLoading,
    error,
    isFetchingStories,
  }
}

export default useBestStories
