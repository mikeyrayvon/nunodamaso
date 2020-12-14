import 'styles/index.css'

function MyApp({ Component, pageProps }) {

  console.log('%cDiscipline', 'background: #FFF; color: #000; font-family: sans-serif; padding: 1em; font-size: 2em')

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
