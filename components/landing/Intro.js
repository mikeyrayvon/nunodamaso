import { RichText } from 'prismic-reactjs'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'

const Intro = ({ heading, text }) => {
  return (
    <section className='bg-blue-light pt-28 pb-20'>
      <Container>
        <div className='flex -mx-6 lg:flex-wrap lg:items-end'>
          <div className='w-full lg:w-1/2 pl-6'>
            {heading &&
              <h2 className='text-blue-dark text-xl mb-5'>{heading}</h2>
            }
            {text &&
              <div className='lg:w-2/3'>{RichText.render(text, linkResolver)}</div>
            }
          </div>
          <div className='w-full lg:w-1/2 pr-6'>
            Graphic
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Intro
