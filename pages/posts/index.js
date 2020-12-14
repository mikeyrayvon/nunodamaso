import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts';
import PostList from 'components/PostList';

const Posts = ({ settings, posts }) => {
  console.log(posts)
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Website | Posts</title>
      </Head>
      <PostList posts={posts} />
    </DefaultLayout>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const posts = await Client().query(
    Prismic.Predicates.at('document.type', 'post'), {
      orderings : '[document.first_publication_date]',
      pageSize: 100,
      fetch: ['post.title', 'post.main_image'],
      ...(ref ? { ref } : null)
    },
  ).catch(error => {
    console.log(error)
  }) || {}

  return {
    props: {
      settings,
      posts: posts ? posts.results : [],
      preview
    }
  }
}

export default Posts;
