import Head from 'next/head'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { Client, manageLocale } from 'utils/prismicHelpers'

import Layout from 'components/Layout'
import PostList from 'components/journal/PostList'

const Posts = ({ settings, docs, lang, preview }) => {
  return (
    <Layout
      settings={settings}
      lang={lang}
      isPreview={preview.isActive}
    >
      <Head>
        <title>Website | Journal</title>
      </Head>
      <PostList docs={docs} />
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
    Prismic.Predicates.at('document.type', 'journal'), {
      orderings : '[document.first_publication_date]',
      pageSize: 100,
      fetch: [
        'journal.title',
        'journal.main_image',
        'journal.summary'
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
      docs: docs ? docs.results : [],
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

export default Posts;
