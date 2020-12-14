import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const MailchimpForm = ({ mailchimpAction }) => {

  let email

  const submit = () => {
    return email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    })
  }

  return (
    <div>
      <MailchimpSubscribe
        url={mailchimpAction}
        render={({ subscribe, status, message }) => (
          <div>
            <div className='flex flex-row space-x-4 mb-4'>
              <input
                ref={node => (email = node)}
                type='email'
                className='font-normal border-b border-black flex-grow bg-transparent'
              />
              <button className='button py-1' onClick={submit}>
                <span className="font-normal text-xl bg-transparent">Subscribe</span>
              </button>
            </div>
            <div>
              {status === null && <div>&nbsp;</div>}
              {status === "sending" && <div>Sending...</div>}
              {(status === "error" || status === "success") && (
                <div
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default MailchimpForm
