import Prismic from 'prismic-javascript'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

import { queryRepeatableDocuments } from 'utils/queries'
import { hrefResolver, linkResolver } from 'prismic-configuration'
import { Client } from 'utils/prismicHelpers'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Slider from 'components/Slider'

const Post = ({ settings, doc }) => {

  if (doc && doc.data) {

    let title = 'Nuno Damaso'

    if (doc.data.title) {
      title += ` | ${doc.data.title}`
    }

    return (
      <Layout settings={settings}>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <h1 className='mb-20'>{doc.data.title}</h1>
          {doc.data.body &&
            <div className='text-content mb-20'>
              {RichText.render(doc.data.body, linkResolver)}
            </div>
          }
        </Container>
        {doc.data.gallery &&
          <Slider slides={doc.data.gallery} docId={doc.id} />
        }
      </Layout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const doc = await Client().getByUID('journal', params.uid, ref ? { ref } : null) || {}

  return {
    props: {
      settings,
      preview,
      doc
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === 'journal'
  );
  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid }, locale: doc.lang };
    }),
    fallback: false,
  };
}

export default Post;
