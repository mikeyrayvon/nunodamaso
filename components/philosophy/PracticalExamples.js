import { RichText } from 'prismic-reactjs'

import { useTranslation } from 'react-i18next'

import Container from 'components/Container'

const PracticalExamples = ({ doc }) => {
  const { t } = useTranslation()
  console.log(doc.data)
  if (doc.data.practical_examples[0].example) {
    return (
      <section className='bg-blue-lightest pt-36 pb-24'>
        <Container>
          <div className='flex flex-wrap -mx-6 mb-20'>
            <div className='w-full px-6'>
              <h2 className='text-5xl'>{ t('practical-examples') }</h2>
            </div>
          </div>
          <ul className='flex flex-wrap -mx-6'>
            {doc.data.practical_examples.map((item, index) => (
              <li className='w-full sm:w-1/2 px-6 text-3xl mb-12' key={`practical_example_${index}`}>
                <span>{ item.example }</span>
              </li>
            ))}
          </ul>
          {doc.data.examples_summary &&
            <div className='flex flex-wrap -mx-6 mt-20 justify-center'>
              <div className='w-full sm:w-1/2 px-6'>
                <span className='text-2xl'>{ doc.data.examples_summary }</span>
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
