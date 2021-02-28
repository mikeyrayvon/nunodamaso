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
        code={'en'}
        path={router.asPath}
        current={router.locale}
        active={isComponentVisible}
        handleClick={setIsComponentVisible}
      />
      <LocaleSelectItem
        code={'fr'}
        path={`/fr${router.asPath}`}
        current={router.locale}
        active={isComponentVisible}
        handleClick={setIsComponentVisible}
      />
      <LocaleSelectItem
        code={'de'}
        path={`/de${router.asPath}`}
        current={router.locale}
        active={isComponentVisible}
        handleClick={setIsComponentVisible}
      />
    </div>
  )
}

export default LocaleSelect
