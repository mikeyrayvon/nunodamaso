import { RichText } from 'prismic-reactjs'
import { default as NextLink } from 'next/link'
import { useTranslation } from 'react-i18next'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'

const Disciplines = ({ heading, text, image, disciplines }) => {
  const { t } = useTranslation()
  return (
    <section className='bg-white pt-28 pb-20'>
      <Container>
        <div className='flex flex-wrap lg:flex-nowrap -mx-6 mb-16 lg:items-end'>
          <div className='px-6 w-full lg:w-2/5 2xl:w-1/2 mb-4'>
            {heading &&
              <h2 className='text-xl w-full 2xl:w-1/2 font-serif'>{heading}</h2>
            }
          </div>
          <div className='px-6 w-full lg:w-3/5 2xl:w-1/2 mb-4'>
            {text &&
              RichText.render(text, linkResolver)
            }
          </div>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap -mx-6 lg:justify-between'>
          <div className='px-6 w-full lg:w-2/5 mb-16 lg:mb-4'>
            {image &&
              <img src={image.url} />
            }
          </div>
          <div className='w-full lg:w-3/5 2xl:w-1/2 mb-4 flex flex-wrap content-start'>
            {disciplines &&
              disciplines.map(({name, summary, more_reading}, index) => {
                return (
                  <div className='w-full md:w-1/2 mb-16 px-6' key={`landing_disciplines_${index}`}>
                    <h3 className='text-lg mb-4 font-serif font-bold'>{name}</h3>
                    {summary &&
                      RichText.render(summary, linkResolver)
                    }
                    {more_reading.id &&
                      <NextLink href={`/${more_reading.type}/${more_reading.slug}`}>
                        <a className='text-sm text-blue'>{ t('continue-reading') }</a>
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
