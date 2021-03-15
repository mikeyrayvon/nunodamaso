import { useRouter } from 'next/router'

import useComponentVisible from 'utils/hooks/useComponentVisible'

import LocaleSelectItem from './LocaleSelectItem'

const LocaleSelect = () => {
  const router = useRouter()
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  return (
    <div ref={ref} className={'flex flex-col w-8 transition-height overflow-hidden' + (!isComponentVisible ? ' h-4' : ' h-12')}>
      <LocaleSelectItem
        code={'de'}
        path={router.asPath}
        current={router.locale}
        isVisible={isComponentVisible}
        setIsVisible={setIsComponentVisible}
      />
      <LocaleSelectItem
        code={'fr'}
        path={`/fr${router.asPath}`}
        current={router.locale}
        isVisible={isComponentVisible}
        setIsVisible={setIsComponentVisible}
      />
      <LocaleSelectItem
        code={'en'}
        path={`/en${router.asPath}`}
        current={router.locale}
        isVisible={isComponentVisible}
        setIsVisible={setIsComponentVisible}
      />

    </div>
  )
}

export default LocaleSelect
