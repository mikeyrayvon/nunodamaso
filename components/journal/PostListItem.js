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
            <div className='flex flex-col md:flex-row justify-end relative'>
              <div className='hidden md:flex absolute left-0 w-1/2 flex-col justify-center h-full z-10'>
                <h3 className='text-3xl'>{doc.data.title}</h3>
              </div>
              <div className='md:w-2/3 md:flex'>
                <div className='md:w-1/3 rounded-t-xl md:rounded-t-none md:rounded-l-3xl overflow-hidden bg-gray relative'>
                  <ResponsiveImage
                    image={doc.data.main_image}
                    sizes={{
                      mobile: 'w=353',
                      md: 'w=474',
                      xl: 'w=538',
                      full: 'w=688'
                    }}
                    pictureClass='h-48 w-full md:h-full md:absolute flex inset-0'
                    imgClass='object-cover w-full'
                  />
                </div>
                <div className='md:w-2/3 bg-blue-lightest rounded-b-xl md:rounded-b-none md:rounded-r-3xl overflow-hidden p-8 md:p-12 flex flex-col h-full justify-center md:py-36'>
                  <div>
                    <h3 className='md:hidden text-xl mb-2'>{doc.data.title}</h3>
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
