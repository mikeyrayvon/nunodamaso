import { useState } from 'react'

import PostListItem from './PostListItem'
import Container from '../Container'

const PostList = ({ docs }) => {
  console.log(docs)
  return (
    <Container>
      <div>
        {docs.map(doc => (
          <PostListItem doc={doc} key={doc.id} />
        ))}
      </div>
    </Container>
  )
}

export default PostList
