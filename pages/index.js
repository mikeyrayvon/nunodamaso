import Head from 'next/head'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import DefaultLayout from 'layouts'
import Container from 'components/Container'

const Landing = ({ settings, landing }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Website</title>
      </Head>
      {landing && landing.data &&
        <Container>
          <div className='text-content mb-20'>
            {RichText.render(landing.data.body, linkResolver)}
          </div>
        </Container>
      }
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const landing = await Client().getSingle('landing') || {}

  return {
    props: {
      settings,
      landing,
      preview
    }
  }
}

export default Landing
