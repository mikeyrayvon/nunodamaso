import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { Client, manageLocale } from 'utils/prismicHelpers'
import { useTranslation } from 'react-i18next'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Container from 'components/Container'

const History = ({ settings, doc, lang, preview }) => {
  const { t } = useTranslation()

  return (
    <Layout
      settings={settings}
      altLangs={doc ? doc.alternate_languages : null}
      lang={lang}
      isPreview={preview.isActive}
    >
      <Seo
        settings={settings}
        title={t('history')}
        summary={doc && doc.data ? doc.data.summary : null}
        image={doc && doc.data ? doc.data.main_image : null}
      />
      {doc && doc.data &&
        <section className='pt-36'>
          <Container>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-center mb-20 font-serif'>{ doc.data.title ? doc.data.title : t('history') }</h1>
            <div className='rich-text post-content'>
              {RichText.render(doc.data.body, linkResolver)}
            </div>
          </Container>
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

  const doc = await Client().getSingle('history', ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

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

export default History
