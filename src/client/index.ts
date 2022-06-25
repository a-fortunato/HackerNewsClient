import { QueryClient, QueryFunction } from 'react-query'
import config from '../config'

// the queryKey is guaranteed to be an Array here
const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const response = await fetch(`${config.apiHost}${queryKey[0]}.json`)
  const data = await response.json()
  return data
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
})

export default queryClient
