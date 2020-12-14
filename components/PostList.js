import { useState } from 'react'

import PostListItem from './PostListItem'
import Container from 'components/Container'

const PostList = ({ posts }) => {
  return (
    <Container>
      <div className='flex flex-wrap -mx-6'>
        {posts.map((post) => (
          <PostListItem post={post} key={post.id} />
        ))}
      </div>
    </Container>
  )
}

export default PostList
