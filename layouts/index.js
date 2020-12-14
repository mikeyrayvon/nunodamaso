import Header from 'components/Header'
import Footer from 'components/Footer'

const DefaultLayout = ({ settings, children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header settings={settings} />
      <main className='relative flex-grow'>{children}</main>
      <Footer settings={settings} />
    </div>
  )
}

export default DefaultLayout
