import React from 'react'
import { default as NextLink } from 'next/link'

import ResponsiveImage from './ResponsiveImage'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const PostListItem = ({ post, setHoveredId }) => {
  if (post && post.data) {
    return (
      <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-6 mb-20 sm:mb-40'>
        <NextLink
          as={linkResolver(post)}
          href={hrefResolver(post)}
        >
          <a>
            <ResponsiveImage
              image={post.data.main_image}
              sizes={{
                mobile: 'w=353',
                md: 'w=474',
                xl: 'w=538',
                full: 'w=688'
              }}
              pictureClass='block mb-2'
            />
            <h2>{post.data.title}</h2>
          </a>
        </NextLink>
      </div>
    )
  }

  return null
}

export default PostListItem
