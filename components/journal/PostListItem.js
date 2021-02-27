import React from 'react'
import { default as NextLink } from 'next/link'
import { useTranslation } from 'react-i18next'

import ResponsiveImage from '../ResponsiveImage'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const PostListItem = ({ doc, setHoveredId }) => {
  const { t } = useTranslation()

  if (doc && doc.data) {
    return (
      <div className='mb-40'>
        <NextLink
          as={linkResolver(doc)}
          href={hrefResolver(doc)}
        >
          <a>
            <div className='flex justify-end relative'>
              <div className='absolute left-0 w-1/2 flex flex-col justify-center h-full z-10'>
                <h3 className='text-3xl'>{doc.data.title}</h3>
              </div>
              <div className='w-2/3 flex'>
                <div className='w-1/3 rounded-l-3xl overflow-hidden bg-gray relative'>
                  <ResponsiveImage
                    image={doc.data.main_image}
                    sizes={{
                      mobile: 'w=353',
                      md: 'w=474',
                      xl: 'w=538',
                      full: 'w=688'
                    }}
                    pictureClass='absolute flex inset-0'
                    imgClass='object-cover'
                  />
                </div>
                <div className='w-2/3 bg-blue-lightest rounded-r-3xl overflow-hidden p-12 flex flex-col h-full justify-center py-36'>
                  <div>
                    <p className='mb-2'>{doc.data.summary}</p>
                    <span className='text-blue'>{ t('continue-reading') }</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </NextLink>
      </div>
    )
  }

  return null
}

export default PostListItem
