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
        <div className='flex flex-wrap -mx-6'>
          <div className='w-full md:w-1/2 px-6'>
            <h1 className='text-7xl text-center mb-24'>{ t('philosophy') }</h1>
            <div className='text-content'>
              {doc.data.body &&
                RichText.render(doc.data.body, linkResolver)
              }
            </div>
          </div>
          <div className='w-full md:w-1/2 px-6'>
            {doc.data.main_image &&
              <ResponsiveImage
                image={doc.data.main_image}
              />
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MainContent
