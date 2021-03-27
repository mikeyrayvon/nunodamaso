import Prismic from 'prismic-javascript'
import Head from 'next/head'

import { queryRepeatableDocuments } from 'utils/queries'
import { Client, manageLocale } from 'utils/prismicHelpers'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Slices from 'components/slices'

const Practice = ({ settings, doc, preview, lang }) => {
  if (doc && doc.data) {

    let title = 'Nuno Damaso'

    if (doc.data.title) {
      title += ` | ${doc.data.title}`
    }

    console.log(doc.data.body)

    return (
      <Layout
        settings={settings}
        lang={lang}
        isPreview={preview.isActive}
        altLangs={doc.alternate_languages}
      >
        <Head>
          <title>{title}</title>
        </Head>
        {doc && doc.data &&
          <div className='pt-36'>
            <Container>
              <h1 className='text-xl sm:text-2xl md:text-3xl text-center mb-20 font-serif'>{ doc.data.title }</h1>
              {doc.data.body &&
                <Slices slices={doc.data.body} />
              }
            </Container>
          </div>
        }
      </Layout>
    );
  }

  return null;
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

  const doc = await Client().getByUID('practice', params.uid, ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

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
      }
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
