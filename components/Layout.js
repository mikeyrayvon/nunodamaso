import Header from './Header'
import Footer from './Footer'
import ExitPreviewButton from './ExitPreviewButton'
import MailchimpForm from './MailchimpForm'
import GetStarted from './GetStarted'

const Layout = ({ settings, isPreview, children, altLangs, lang }) => {
  return (
    <div>
      <Header
        settings={settings}
        altLangs={altLangs}
        currentLang={lang.currentLang}
        isMainLanguage={lang.isMainLanguage}
      />
      <div className='flex flex-col min-h-screen'>
        <main className='relative flex-grow'>{children}</main>
        {isPreview ? <ExitPreviewButton /> : null}
        <GetStarted settings={settings} />
        <MailchimpForm settings={settings} />
        <Footer settings={settings} />
      </div>
    </div>
  )
}

export default Layout
