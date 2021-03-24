import { RichText } from 'prismic-reactjs'

import { useTranslation } from 'react-i18next'
import { hrefResolver, linkResolver } from 'prismic-configuration'

import ResponsiveImage from 'components/ResponsiveImage'
import Container from 'components/Container'

const MainContent = ({ doc }) => {
  const { t } = useTranslation()

  return (
    <section className='pb-24'>
      <Container>
        <div className='flex flex-wrap -mx-6 md:justify-between'>
          <div className='w-full md:w-1/2 px-6'>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-center mb-20 font-serif'>{ doc.data.title ? doc.data.title : t('philosophy') }</h1>
            <div className='rich-text'>
              {doc.data.body &&
                RichText.render(doc.data.body, linkResolver)
              }
            </div>
          </div>
          <div className='w-full md:w-1/2 px-6'>
            {doc.data.main_image &&
              <div className='md:w-3/5 mx-auto'>
                <ResponsiveImage image={doc.data.main_image} />
              </div>
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MainContent
