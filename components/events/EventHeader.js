import { RichText } from 'prismic-reactjs'

import { hrefResolver, linkResolver } from 'prismic-configuration'
import { constructDatespan } from 'utils/helpers'

import Container from 'components/Container'
import ResponsiveImage from 'components/ResponsiveImage'

const EventHeader = ({ doc }) => {
  const {
    title,
    summary,
    main_image,
    location,
    start_date,
    end_date,
    tickets_link
  } = doc.data

  return (
    <section className='bg-blue-lightest pt-36 pb-20'>
      <Container>
        <div className='flex flex-wrap lg:flex-nowrap -mx-6'>
          <div className='w-full lg:w-1/12 lg:mt-1 px-6 lg:order-1'><span className='uppercase'>Event</span></div>
          <div className='w-full lg:w-1/2 px-6 pt-8 lg:order-3 mb-4'>
            {main_image &&
              <ResponsiveImage
                image={main_image}
                sizes={{
                  full: 'w=1300'
                }}
                pictureClass='block'
              />
            }
          </div>
          <div className='w-full lg:w-5/12 px-6 lg:order-2'>
            <h1 className='mb-8 text-2xl'>{title}</h1>
            {location.length > 0 &&
              <div className='mb-6'>
                <span className='text-lg'>{location}</span>
              </div>
            }
            {start_date &&
              <div className='mb-6'>
                <span className='text-lg'>{constructDatespan(start_date, end_date)}</span>
              </div>
            }
            {summary[0].text.length > 0 &&
              <div className='rich-text mb-6'>
                {RichText.render(summary, linkResolver)}
              </div>
            }
            {tickets_link.url &&
              <div className='pt-2'>
                <a href={tickets_link.url} className='inline-block bg-blue py-4 px-10 rounded-full text-white shadow-lg transition-bg hover:bg-blue-hover duration-75'>Register</a>
              </div>
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EventHeader
