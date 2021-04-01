import Head from 'next/head'
import { useRouter } from 'next/router'

const Seo = ({ children, settings, title, summary, image }) => {
  let metaTitle = 'Holistic Health Coaching'
  let metaDescription = 'Nuno Damaso'
  let metaImageUrl
  const router = useRouter()
  const siteUrl = 'https://nunodamaso.com'

  if (settings && settings.data) {
    const {site_title, site_description, site_image} = settings.data
    metaTitle = (site_title ? site_title : '') + (site_title && title ? ' | ' : '') + (title ? title : '')
    metaDescription = site_description
    if (site_image && site_image.url) {
      metaImageUrl = site_image.url
    }
  }

  if (summary) {
    metaDescription = summary
  }

  if (image && image.url) {
    metaImageUrl = image.url
  }

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />

      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Holistic Health Coaching' />
      {metaImageUrl &&
        <meta property='og:image' content={metaImageUrl} />
      }

      <link rel='canonical' href={siteUrl + router.pathname} />
      {router.locales.map(locale => {
        return (
          <link rel='alternate' hreflang={locale} href={siteUrl + (locale !== router.defaultLocale ? '/' + locale : '') + router.pathname} />
        )}
      )}
      {children}
    </Head>
  )
}

export default Seo
