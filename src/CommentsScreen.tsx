import React from 'react'
import useComments from './hooks/useComments'

interface Props {
  ids: string[]
}

function CommentsScreen({ ids }: Props) {
  const comments = useComments(ids)
  return null
}

export default CommentsScreen
