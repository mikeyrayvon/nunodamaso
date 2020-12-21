import Header from './Header'
import Footer from './Footer'
import ExitPreviewButton from './ExitPreviewButton'

const Layout = ({ settings, isPreview, children, altLangs, lang }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header
        settings={settings}
        altLangs={altLangs}
        currentLang={lang.currentLang}
        isMainLanguage={lang.isMainLanguage}
      />
      <main className='relative flex-grow'>{children}</main>
      {isPreview ? <ExitPreviewButton /> : null}
      <Footer settings={settings} />
    </div>
  )
}

export default Layout
