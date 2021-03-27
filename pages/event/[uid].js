import Prismic from 'prismic-javascript'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

import { queryRepeatableDocuments } from 'utils/queries'
import { hrefResolver, linkResolver } from 'prismic-configuration'
import { Client, manageLocale } from 'utils/prismicHelpers'

import Layout from 'components/Layout'
import Container from 'components/Container'
import EventHeader from 'components/events/EventHeader'
import EventBody from 'components/events/EventBody'

const Event = ({ settings, doc, lang, preview }) => {
  if (doc === null || doc.data === undefined)
    return null

  let title = 'Nuno Damaso'

  if (doc.data.title) {
    title += ` | ${doc.data.title}`
  }

  return (
    <Layout
      settings={settings}
      altLangs={doc.alternate_languages}
      lang={lang}
      isPreview={preview.isActive}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <EventHeader doc={doc} />
      <EventBody doc={doc} />
    </Layout>
  )
};

export async function getStaticProps({
  params,
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

  const doc = await Client().getByUID('event', params.uid, ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

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

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === 'event'
  );
  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid }, locale: doc.lang.slice(0, 2) };
    }),
    fallback: false,
  };
}

export default Event;
