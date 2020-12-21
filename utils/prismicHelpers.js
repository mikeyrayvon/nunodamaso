import Prismic from 'prismic-javascript'
import Link from 'next/link'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver
} from 'prismic-configuration'

export const [, prismicRepoName] = apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/);

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)

export const manageLocale = (locales, locale) => {
  // Languages from API response
  // Setting Master language as default language option
  const mainLanguage = locales[0];

  // Sets current language based on the locale
  const currentLang = locale !== undefined ? locale : mainLanguage;
  const isMainLanguage = mainLanguage === currentLang;

  return { mainLanguage, currentLang, isMainLanguage }
}

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export default Client
