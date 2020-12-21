import { useState } from 'react'

import PostListItem from './PostListItem'
import Container from '../Container'

const PostList = ({ docs }) => {
  return (
    <Container>
      <div className='flex flex-wrap -mx-6'>
        {docs.map((docs) => (
          <PostListItem doc={doc} key={doc.id} />
        ))}
      </div>
    </Container>
  )
}

export default PostList
