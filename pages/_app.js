import 'styles/index.css'
import { i18nextInit } from '../i18n.js';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  i18nextInit(router, pageProps.i18nNamespaces);

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
