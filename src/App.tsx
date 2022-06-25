import React from 'react'
import { QueryClientProvider } from 'react-query'
import RootNavigation from './RootNavigation'
import client from './client'

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <RootNavigation />
    </QueryClientProvider>
  )
}
