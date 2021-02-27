import { RichText } from 'prismic-reactjs'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'
import ResponsiveImage from 'components/ResponsiveImage'

const EventBody = ({ doc }) => {
  const {body, gallery} = doc.data

  return (
    <section className='pt-28 pb-20'>
      <Container>
        <div className='flex flex-wrap lg:flex-nowrap -mx-6 justify-between'>
          <div className='lg:w-7/12 px-6 lg:ml-1/12 mb-10'>
            <div className='rich-text max-w-prose'>
              {RichText.render(body, linkResolver)}
            </div>
          </div>
          <div className='lg:w-4/12 flex flex-wrap lg:flex-col'>
            {gallery[0].image.url !== undefined &&
              gallery.map((item, i) => i < 3 ? (
                <div className='px-6 w-full md:w-1/2 lg:w-full mb-10' key={doc.id + 'gallery' + i}>
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
