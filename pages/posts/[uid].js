import Prismic from 'prismic-javascript'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

import { queryRepeatableDocuments } from 'utils/queries'
import { hrefResolver, linkResolver } from 'prismic-configuration'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts'
import Container from 'components/Container'
import Slider from 'components/Slider'

const Post = ({ settings, post }) => {

  if (post && post.data) {

    let title = 'Website'

    if (post.data.title) {
      title += ` | ${post.data.title}`
    }

    return (
      <DefaultLayout settings={settings}>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <h1 className='mb-20'>{post.data.title}</h1>
          {post.data.body &&
            <div className='text-content mb-20'>
              {RichText.render(post.data.body, linkResolver)}
            </div>
          }
        </Container>
        {post.data.gallery &&
          <Slider slides={post.data.gallery} docId={post.id} />
        }
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const post = await Client().getByUID('post', params.uid, ref ? { ref } : null) || {}

  return {
    props: {
      settings,
      preview,
      post
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => `/posts/${doc.uid}`),
    fallback: true,
  }
}

export default Post;
