import { RichText } from 'prismic-reactjs'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'

const Intro = ({ heading, text }) => {
  return (
    <section className='bg-blue-light pt-8 pb-20'>
      <Container>
        <div className='flex flex-wrap -mx-6 lg:flex-nowrap lg:items-end'>
          <div className='w-full px-6 lg:w-1/2 lg:pr-0 pt-8'>
            {heading &&
              <h2 className='text-blue-dark text-xl mb-5'>{heading}</h2>
            }
            {text &&
              <div className='lg:w-2/3'>{RichText.render(text, linkResolver)}</div>
            }
          </div>
          <div className='w-full px-6 lg:w-1/2 lg:pl-0 pt-8'>
            <img src='/images/diagram.svg' className='w-full'/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Intro
