import Head from 'next/head'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { Client, manageLocale } from 'utils/prismicHelpers'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Hero from 'components/landing/Hero'
import Intro from 'components/landing/Intro'
import Disciplines from 'components/landing/Disciplines'

const Landing = ({ settings, doc, lang, preview }) => {
  return (
    <Layout
      settings={settings}
      altLangs={doc.alternate_languages}
      lang={lang}
      isPreview={preview.isActive}
    >
      <Head>
        <title>Nuno Damaso</title>
      </Head>
      {doc && doc.data &&
        <>
          <Hero image={doc.data.main_image} />
          <Intro
            heading={doc.data.intro_heading}
            text={doc.data.intro_text}
          />
          <Disciplines
            heading={doc.data.disciplines_heading}
            text={doc.data.disciplines_text}
            image={doc.data.disciplines_image}
            disciplines={doc.data.disciplines}
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

  const settings = await Client().getSingle('settings') || {}

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
