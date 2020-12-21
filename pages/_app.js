import 'styles/index.css'
import { i18nextInit } from '../i18n.js';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  console.log('%cDiscipline', 'background: #FFF; color: #000; font-family: sans-serif; padding: 1em; font-size: 2em')

  const router = useRouter();

  i18nextInit(router, pageProps.i18nNamespaces);

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
