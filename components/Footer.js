import { RichText } from 'prismic-reactjs'
import { FaInstagram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import Container from './Container'
import MailchimpForm from './MailchimpForm'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const Footer = ({ settings }) => {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className='bg-white mt-auto pt-24 pb-6'>
      <Container>
        <div className='flex flex-wrap mb-4 -mx-6'>
          <div className='w-full sm:w-1/2 text-2xl mb-4 px-6'>
            <span className='block uppercase'>Nuno Damaso</span>
            <span className='block'>Holistic Health Coaching</span>
          </div>
          <div className='w-full sm:w-1/2 mb-4 px-6'>
            <img src='images/yinyang.svg' />
          </div>
        </div>
        {settings && settings.data &&
          <div className='flex flex-wrap -mx-6'>
            <div className='w-full md:w-1/4 text-blue px-6'>
              {settings.data.contact_email.length > 0 &&
                <div className='mb-4'><a href={`mailto:${settings.data.contact_email[0].text}`}>{settings.data.contact_email[0].text}</a></div>
              }
              {settings.data.contact_phone.length > 0 &&
                <div className='mb-4'><a href={`tel:${settings.data.contact_phone[0].text}`}>{settings.data.contact_phone[0].text}</a></div>
              }
            </div>
            <div className='w-full md:w-1/4 px-6 mb-4'>
              {settings.data.address &&
                RichText.render(settings.data.address, linkResolver)
              }
              {settings.data.google_maps &&
                <a className='text-blue text-sm mt-2' href={settings.data.google_maps}>View on Google Maps</a>
              }
            </div>
          </div>
        }
        <div className='mt-32 -mx-6'>
          <div className='px-6'>
            <span>&copy; {year} Nuno Damaso. {t('rights')}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
