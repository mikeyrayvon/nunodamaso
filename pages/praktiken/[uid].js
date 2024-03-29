import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { queryRepeatableDocuments } from 'utils/queries'
import { hrefResolver, linkResolver } from 'prismic-configuration'
import { Client, manageLocale } from 'utils/prismicHelpers'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Container from 'components/Container'
import PracticeList from 'components/PracticeList'

const Practice = ({ settings, doc, landing, preview, lang }) => {
  return (
    <Layout
      settings={settings}
      lang={lang}
      isPreview={preview.isActive}
      altLangs={doc ? doc.alternate_languages : null}
    >
      <Seo
        settings={settings}
        title={doc && doc.data ? doc.data.title : null}
        summary={doc && doc.data ? doc.data.summary : null}
        image={doc && doc.data ? doc.data.main_image : null}
      />
      {doc && doc.data &&
        <section className='pt-36'>
          <Container>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-center mb-20 font-serif'>{ doc.data.title }</h1>
            {doc.data.body &&
              <div className='rich-text post-content'>
                {RichText.render(doc.data.body, linkResolver)}
              </div>
            }
          </Container>
        </section>
      }
      {landing && landing.data &&
        <PracticeList
          heading={landing.data.disciplines_heading}
          text={landing.data.disciplines_text}
          practices={landing.data.disciplines}
        />
      }
    </Layout>
  )
}

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

  const settings = await Client().getSingle('settings', ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

  const doc = await Client().getByUID('practice', params.uid, ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

  const landingFetch = ['landing.disciplines_heading', 'landing.disciplines_text', 'landing.disciplines']

  const landing = await Client().getSingle('landing', ref ? {
    ref,
    lang: localeCode,
    fetch: landingFetch
  } : {
    lang: localeCode,
    fetch: landingFetch
  }) || {}

  const { currentLang, isMainLanguage} = manageLocale(locales, localeCode)

  return {
    props: {
      settings,
      doc,
      landing,
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
    (doc) => doc.type === 'practice'
  );
  return {
    paths: documents.map((doc) => {
      const locale = doc.lang.substring(0,2)
      return { params: { uid: doc.uid }, locale };
    }),
    fallback: false,
  };
}

export default Practice;
