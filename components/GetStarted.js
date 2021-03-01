import { FiPhone, FiMail } from 'react-icons/fi'
import Container from 'components/Container'

const GetStarted = ({ settings }) => {
  if (settings.data) {
    const {
      get_started_heading,
      get_started_text,
      contact_email,
      contact_phone
    } = settings.data

    return (
      <section className='bg-black pt-28 pb-20 text-white'>
        <Container>
          <div className='flex flex-wrap lg:flex-nowrap -mx-6 lg:justify-between'>
            <div className='px-6 w-full mb-16 lg:mb-0 lg:w-1/2'>
              {get_started_heading &&
                <h2 className='text-xl mb-4'>{get_started_heading}</h2>
              }
              {get_started_text &&
                <div><span>{get_started_text}</span></div>
              }
            </div>
            <div className='px-6 w-full lg:w-5/12 text-lg'>
              {contact_email.length &&
                <div className='mb-6 flex'>
                  <FiMail className='w-8 h-8 mr-4'/>
                  <a className='lg:flex-grow hover:underline' href={`mailto:${contact_email[0].text}`}>{contact_email[0].text}</a>
                </div>
              }
              {contact_phone.length &&
                <div className='mb-6 flex'>
                  <FiPhone className='w-8 h-8 mr-4'/>
                  <a className='lg:flex-grow hover:underline' href={`tel:${contact_phone[0].text}`}>{contact_phone[0].text}</a>
                </div>
              }
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return null
}

export default GetStarted
