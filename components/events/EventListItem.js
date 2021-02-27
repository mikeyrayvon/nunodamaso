import React from 'react'
import { default as NextLink } from 'next/link'

import ResponsiveImage from '../ResponsiveImage'

import { hrefResolver, linkResolver } from 'prismic-configuration'
import { constructDatespan } from 'utils/helpers'

const EventListItem = ({ doc, setHoveredId }) => {
  if (doc && doc.data) {
    const { main_image, title, location, start_date, end_date } = doc.data
    return (
      <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-6 mb-20 sm:mb-40'>
        <NextLink
          as={linkResolver(doc)}
          href={hrefResolver(doc)}
        >
          <a className='h-full block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-75 border border-blue-lightest'>
            <ResponsiveImage
              image={main_image}
              sizes={{
                mobile: 'w=353',
                md: 'w=474',
                xl: 'w=538',
                full: 'w=688'
              }}
              pictureClass='block'
            />
            <div className='p-4 pb-6'>
              <div><span className='uppercase text-sm'>Event</span></div>
              <h2 className='text-lg mb-2'>{title}</h2>
              {location &&
                <div>
                  <span>{location}</span>
                </div>
              }
              {start_date &&
                <div>
                  <span>{constructDatespan(start_date, end_date)}</span>
                </div>
              }
              {doc.tags.length > 0 &&
                <ul className='mt-1 pb-2 text-sm'>
                  {doc.tags.map((tag, i) => {
                    return i < 3 ? (
                      <li className='inline'>
                        {tag}
                        {i < doc.tags.length - 1 &&
                          <span className='mx-1'>•</span>
                        }
                      </li>
                    ) : null
                  })}
                </ul>
              }
              <div className='pt-2'><span className='text-blue'>Learn more</span></div>
            </div>
          </a>
        </NextLink>
      </div>
    )
  }

  return null
}

export default EventListItem
