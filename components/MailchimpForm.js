import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { useTranslation } from 'react-i18next'

import Container from './Container'

const MailchimpForm = ({ settings }) => {
  const { t } = useTranslation()

  if (settings && settings.data && settings.data.mailchimp_action) {
    const {
      mailchimp_action,
      newsletter_text
    } = settings.data
    let email
    const submit = (subscribe) => {
      return email &&
      email.value.indexOf("@") > -1 &&
      subscribe({
        EMAIL: email.value
      })
    }

    return (
      <section className='bg-blue-light pt-28 pb-20'>
        <Container>
          <MailchimpSubscribe
            url={mailchimp_action}
            render={({ subscribe, status, message }) => (
              <div className='flex -mx-6 justify-center'>
                <div className='w-full sm:w-2/3 md:w-7/12 lg:w-1/2 px-6 relative'>
                  <div className='mb-8'>
                    {newsletter_text &&
                      <p className='text-lg text-gray'>{ newsletter_text }</p>
                    }
                  </div>
                  <div className='flex mb-4 items-center'>
                    <div className='flex-grow'>
                      <input
                        ref={node => (email = node)}
                        type='email'
                        className='text-lg py-2 focus:outline-none focus:border-blue font-normal border-b-2 border-black w-full bg-transparent rounded-none'
                        placeholder='email'
                      />
                    </div>
                    <div className='pl-4'>
                      <button className='focus:outline-none button py-2 hover:text-blue text-black text-center' onClick={() => submit(subscribe)}>
                        <span className="font-normal bg-transparent">{ t('subscribe') }</span>
                      </button>
                    </div>
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

  return null
}

export default MailchimpForm
