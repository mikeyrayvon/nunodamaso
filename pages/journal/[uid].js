import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { queryRepeatableDocuments } from 'utils/queries'
import { hrefResolver, linkResolver } from 'prismic-configuration'
import { Client, manageLocale } from 'utils/prismicHelpers'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Container from 'components/Container'
import Slider from 'components/Slider'

const Post = ({ settings, doc, preview, lang }) => {
  if (doc && doc.data) {
    return (
      <Layout
        settings={settings}
        lang={lang}
        isPreview={preview.isActive}
        altLangs={doc.alternate_languages}
      >
        <Seo
          settings={settings}
          title={doc.data.title}
          summary={doc.data.summary}
        />
        <section className='pt-36'>
          <Container>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-center mb-20 font-serif'>{ doc.data.title }</h1>
            <div className='rich-text post-content'>
              {RichText.render(doc.data.body, linkResolver)}
            </div>
          </Container>
        </section>
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

  const settings = await Client().getSingle('settings', ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

  const doc = await Client().getByUID('journal', params.uid, ref ? { ref, lang: localeCode } : { lang: localeCode }) || {}

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
    (doc) => doc.type === 'journal'
  );
  return {
    paths: documents.map((doc) => {
      const locale = doc.lang.substring(0,2)
      return { params: { uid: doc.uid }, locale };
    }),
    fallback: false,
  };
}

export default Post;
