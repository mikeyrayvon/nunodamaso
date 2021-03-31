import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { Client, manageLocale } from 'utils/prismicHelpers'
import { useTranslation } from 'react-i18next'

import Layout from 'components/Layout'
import MainContent from 'components/philosophy/MainContent'
import PracticalExamples from 'components/philosophy/PracticalExamples'

const Philosophy = ({ settings, doc, lang, preview }) => {
  const { t } = useTranslation()

  return (
    <Layout
      settings={settings}
      altLangs={doc.alternate_languages}
      lang={lang}
      isPreview={preview.isActive}
    >
      <Head>
        <title>Nuno Damaso | { t('philosophy') }</title>
      </Head>
      {doc && doc.data &&
        <section className='pt-36'>
          <MainContent doc={doc} />
          <PracticalExamples doc={doc} />
        </section>
      }
    </Layout>
  )
}

export async function getStaticProps({
  preview = null,
  previewData = {},
  locale,
  locales
}) {

  const { ref } = previewData
  const isPreview = preview || false
  const country = locale === 'en' ? '-us' : '-ch'
  const localeCode = locale + country

  const settings = await Client().getSingle('settings', ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

  const doc = await Client().getSingle('philosophy', ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

  const { currentLang, isMainLanguage} = manageLocale(locales, localeCode)

  return {
    props: {
      settings,
      doc,
      preview: {
        isActive: isPreview,
        activeRef: ref ? ref : null,
      },
      lang:{
        currentLang,
        isMainLanguage,
      },
      i18nNamespaces: ['default']
    }
  }
}

export default Philosophy
