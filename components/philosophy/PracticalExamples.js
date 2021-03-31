import { useTranslation } from 'react-i18next'

import Container from 'components/Container'

const PracticalExamples = ({ doc }) => {
  const { t } = useTranslation()

  if (doc.data.practical_examples[0].example) {
    return (
      <section className='bg-blue-lightest pt-28 pb-20'>
        <Container>
          {doc.data.examples_heading &&
            <div className='flex flex-wrap -mx-6 mb-8'>
              <div className='w-full sm:w-1/2 text-lg mb-4 px-6'>
                <h2 className='text-xl text-blue-dark font-serif'>{ doc.data.examples_heading }</h2>
              </div>
              <div className='w-full sm:w-1/2 mb-4 px-6'>
                <img src='/images/yinyang.svg' />
              </div>
            </div>
          }
          <ul className='flex flex-wrap -mx-6 mb-12'>
            {doc.data.practical_examples.map((item, index) => (
              <li className='w-full sm:w-1/2 px-6 mb-10' key={`practical_example_${index}`}>
                <div className='bg-blue-light rounded-b-2xl rounded-tr-2xl text-blue-dark border border-blue-dark'>
                  <div className='p-8'>
                    <span className='text-lg'>{ item.example }</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {doc.data.examples_summary &&
            <div className='flex flex-wrap -mx-6 justify-center'>
              <div className='w-full lg:w-1/2'>
                <span>{ doc.data.examples_summary }</span>
              </div>
            </div>
          }
        </Container>
      </section>
    )
  }

  return null
}

export default PracticalExamples
