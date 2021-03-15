// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = process.env.API_ENDPOINT

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.ACCESS_TOKEN

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  const locale = doc.lang !== 'de-ch' ? '/' + doc.lang.substring(0,2) : ''

  if (doc.type === 'journal') {
    return `${locale}/journal/${doc.uid}`
  }
  if (doc.type === 'event') {
    return `${locale}/events/${doc.uid}`
  }

  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  const locale = doc.lang !== 'de-ch' ? '/' + doc.lang.substring(0,2) : ''

  if (doc.type === 'journal') {
    return `${locale}/journal/[uid]`
  }
  if (doc.type === 'event') {
    return `${locale}/events/[uid]`
  }

  return '/'
}
