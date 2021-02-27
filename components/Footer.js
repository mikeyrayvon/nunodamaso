import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { FaInstagram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import Container from './Container'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const Footer = ({ settings }) => {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className='bg-white mt-auto pt-24 pb-6'>
      <Container>
        <div className='flex flex-wrap mb-4 -mx-6'>
          <div className='w-full sm:w-1/2 text-lg mb-4 px-6'>
            <span className='block uppercase'>Nuno Damaso</span>
            <span className='block'>Holistic Health Coaching</span>
          </div>
          <div className='w-full sm:w-1/2 mb-4 px-6'>
            <img src='/images/yinyang.svg' />
          </div>
        </div>

        <div className='flex flex-wrap -mx-6'>
          {settings && settings.data &&
            <div className='w-full md:w-1/4 text-blue px-6'>
              {settings.data.contact_email.length > 0 &&
                <div className='mb-4'><a href={`mailto:${settings.data.contact_email[0].text}`}>{settings.data.contact_email[0].text}</a></div>
              }
              {settings.data.contact_phone.length > 0 &&
                <div className='mb-4'><a href={`tel:${settings.data.contact_phone[0].text}`}>{settings.data.contact_phone[0].text}</a></div>
              }
            </div>
          }
          {settings && settings.data &&
            <div className='w-full md:w-1/4 px-6 mb-4'>
              {settings.data.address &&
                RichText.render(settings.data.address, linkResolver)
              }
              {settings.data.google_maps &&
                <div className='mt-1'>
                  <a className='text-blue text-sm' href={settings.data.google_maps}>{ t('google-maps') }</a>
                </div>
              }
            </div>
          }
          <nav className='w-full md:w-1/2 flex flex-wrap text-blue'>
            <ul>
              <li className='px-6 mb-1'>
                <NextLink href={'/philosophy'}>
                  <a className='hover:underline'>{ t('philosophy') }</a>
                </NextLink>
              </li>
              <li className='px-6 mb-1'>
                <NextLink href={'/history'}>
                  <a className='hover:underline'>{ t('history') }</a>
                </NextLink>
              </li>
              <li className='px-6 mb-1'>
                <NextLink href={'/journal'}>
                  <a className='hover:underline'>{ t('journal') }</a>
                </NextLink>
              </li>
              <li className='px-6 mb-1'>
                <NextLink href={'/events'}>
                  <a className='hover:underline'>{ t('events') }</a>
                </NextLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className='flex mt-32 -mx-6 sm:justify-end'>
          <div className='px-6 w-auto'>
            <span className='text-xs'>&copy; { year } Nuno Damaso. { t('rights') }</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
