import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { Client, manageLocale } from 'utils/prismicHelpers'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Hero from 'components/landing/Hero'
import Intro from 'components/landing/Intro'
import PracticeList from 'components/PracticeList'
import Seo from 'components/Seo'

const Landing = ({ settings, doc, lang, preview }) => {

  return (
    <Layout
      settings={settings}
      altLangs={doc ? doc.alternate_languages : null}
      lang={lang}
      isPreview={preview.isActive}
    >
      <Seo settings={settings} />
      {doc && doc.data &&
        <>
          <Hero image={doc.data.main_image} />
          <Intro
            heading={doc.data.intro_heading}
            text={doc.data.intro_text}
          />
          <PracticeList
            heading={doc.data.disciplines_heading}
            text={doc.data.disciplines_text}
            image={doc.data.disciplines_image}
            practices={doc.data.disciplines}
          />
        </>
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

  const doc = await Client().getSingle('landing', ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

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

export default Landing
