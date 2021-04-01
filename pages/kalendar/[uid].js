import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { queryRepeatableDocuments } from 'utils/queries'
import { hrefResolver, linkResolver } from 'prismic-configuration'
import { Client, manageLocale } from 'utils/prismicHelpers'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Container from 'components/Container'
import EventHeader from 'components/events/EventHeader'
import EventBody from 'components/events/EventBody'

const Event = ({ settings, doc, lang, preview }) => {
  return (
    <Layout
      settings={settings}
      altLangs={doc ? doc.alternate_languages : null}
      lang={lang}
      isPreview={preview.isActive}
    >
      <Seo
        settings={settings}
        title={doc && doc.data ? doc.data.title : null}
        summary={doc && doc.data ? doc.data.summary : null}
        image={doc && doc.data ? doc.data.main_image : null}
      />
      {doc && doc.data &&
        <>
          <EventHeader doc={doc} />
          <EventBody doc={doc} />
        </>
      }
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
      const locale = doc.lang.substring(0,2)
      return { params: { uid: doc.uid }, locale };
    }),
    fallback: false,
  };
}

export default Event;
