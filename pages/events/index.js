import Head from 'next/head'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { Client, manageLocale } from 'utils/prismicHelpers'
import { useTranslation } from 'react-i18next'

import Layout from 'components/Layout'
import EventList from 'components/events/EventList'

const Events = ({ settings, docs, lang, preview }) => {
  const { t } = useTranslation()

  return (
    <Layout
      settings={settings}
      lang={lang}
      isPreview={preview.isActive}
    >
      <Head>
        <title>Nuno Damaso | { t('events') }</title>
      </Head>
      {docs && docs.length > 0 &&
        <EventList docs={docs} />
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

  const settings = await Client().getSingle('settings') || {}

  const docs = await Client().query(
    Prismic.Predicates.at('document.type', 'event'),
    {
      orderings : '[document.start_date]',
      pageSize: 100,
      fetch: [
        'event.title',
        'event.main_image',
        'event.location',
        'event.start_date',
        'event.end_date'
      ],
      ...(ref ? { ref } : null)
    },
  ).catch(error => {
    console.log(error)
  }) || {}

  const { currentLang, isMainLanguage} = manageLocale(locales, locale)

  return {
    props: {
      settings,
      docs: docs.results ? docs.results : [],
      preview: {
        isActive: isPreview,
        activeRef: ref ? ref : null,
      },
      lang:{
        currentLang,
        isMainLanguage,
      }
    }
  }
}

export default Events;
