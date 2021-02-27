import { RichText } from 'prismic-reactjs'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'

const Disciplines = ({ heading, text, image, disciplines }) => {
  return (
    <section className='bg-white pt-28 pb-20'>
      <Container>
        <div className='flex -mx-6 mb-16 lg:items-end'>
          <div className='px-6 w-full lg:w-1/2 mb-4'>
            {heading &&
              <h2 className='text-xl lg:w-1/2'>{heading}</h2>
            }
          </div>
          <div className='px-6 w-full lg:w-1/2 mb-4'>
            {text &&
              RichText.render(text, linkResolver)
            }
          </div>
        </div>
        <div className='flex -mx-6 lg:justify-between'>
          <div className='px-6 w-full lg:w-2/5 mb-4'>
            {image &&
              <img src={image.url} />
            }
          </div>
          <div className='w-full lg:w-1/2 mb-4 flex flex-wrap content-start'>
            {disciplines &&
              disciplines.map(({name, summary, more_reading}) => {
                return (
                  <div className='w-1/2 mb-16 px-6'>
                    <h3 className='text-lg mb-4'>{name}</h3>
                    {RichText.render(summary, linkResolver)}
                    {more_reading.id &&
                      <NextLink href={`/${more_reading.type}/${more_reading.slug}`}>
                        <a className='text-sm text-blue'>Continue reading</a>
                      </NextLink>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Disciplines
