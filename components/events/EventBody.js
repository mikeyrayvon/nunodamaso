import { RichText } from 'prismic-reactjs'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'
import ResponsiveImage from 'components/ResponsiveImage'

const EventBody = ({ doc }) => {
  const {body, gallery} = doc.data

  return (
    <section className='pt-28 pb-20'>
      <Container>
        <div className='flex -mx-6 justify-between'>
          <div className='w-7/12 px-6 ml-1/12'>
            <div className='rich-text max-w-prose'>
              {RichText.render(body, linkResolver)}
            </div>
          </div>
          <div className='w-4/12 px-6'>
            {gallery[0].image.url !== undefined &&
              gallery.map((item, i) => i < 3 ? (
                <div className='mb-10' key={doc.id + 'gallery' + i}>
                  <ResponsiveImage
                    image={item.image}
                    sizes={{
                      full: 'w=860'
                    }}
                    pictureClass='block'
                  />
                </div>
              ) : null)
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EventBody
