import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { useTranslation } from 'react-i18next'

import Container from './Container'

const MailchimpForm = ({ settings }) => {
  const { t } = useTranslation()

  if (settings && settings.data) {
    if (settings.data.mailchimp_action) {
      let email
      const submit = (subscribe) => {
        return email &&
        email.value.indexOf("@") > -1 &&
        subscribe({
          EMAIL: email.value
        })
      }

      return (
        <section className='bg-blue-light py-40'>
          <Container>
            <MailchimpSubscribe
              url={settings.data.mailchimp_action}
              render={({ subscribe, status, message }) => (
                <div className='flex -mx-6 justify-center'>
                  <div className='w-full sm:w-2/3 md:w-7/12 lg:w-1/2 px-6 relative'>
                    <div className='mb-8'>
                      <p className='text-lg text-gray'>If you would like to recieve occasional updates about upcoming classes and events, please subscribe to our newsletter.</p>
                    </div>
                    <div className='flex mb-4'>
                      <input
                        ref={node => (email = node)}
                        type='email'
                        className='text-lg py-2 focus:outline-none focus:border-blue font-normal border-b-2 border-black flex-grow bg-transparent'
                        placeholder='email'
                      />
                      <button className='focus:outline-none ml-4 button py-2 hover:text-blue text-black' onClick={() => submit(subscribe)}>
                        <span className="font-normal bg-transparent">{ t('subscribe') }</span>
                      </button>
                    </div>
                    <div className='absolute w-full sm:w-2/3 rich-text'>
                      {status === "sending" && <div>{ t('sending') }...</div>}
                      {(status === "error" || status === "success") && (
                        <div dangerouslySetInnerHTML={{ __html: message }} />
                      )}
                    </div>
                  </div>
                </div>
              )}
            />
          </Container>
        </section>
      )
    }
  }

  return null
}

export default MailchimpForm
