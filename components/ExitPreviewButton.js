import { useRouter } from 'next/router'

const ExitPreviewButton = () => {
  const router = useRouter()
  const previewExitUrl = '/api/exit-preview'
  const linkUrl = router.asPath ? `${previewExitUrl}?currentUrl=/docs${router.asPath}` : previewExitUrl

  return (
    <a href={linkUrl}>Exit Preview</a>
  )
}

export default ExitPreviewButton
