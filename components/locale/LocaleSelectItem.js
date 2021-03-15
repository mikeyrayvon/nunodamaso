import NextLink from 'next/link';

import { linkResolver, hrefResolver } from 'prismic-configuration';

import SelectCarat from './SelectCarat'

const LocaleSelectItem = ({ code, path, current, isVisible, setIsVisible }) => {
  const isCurrent = current === code

  if (isCurrent) {
    return (
      <span
        className={'cursor-default order-1'}
        onClick={() => {
          setIsVisible(!isVisible)
        }}
      >
        <span className='inline-block uppercase'>{code}</span>
        <SelectCarat active={isVisible} />
      </span>
    )
  } else {
    return (
      <NextLink
        locale={code}
        href={path}
        passHref
      >
        <a className={'order-2' +
          (!isVisible ? ' pointer-events-none' : '')}>
          <span className='inline-block uppercase' onClick={() => {
            setIsVisible(false)
          }}>{code}</span>
        </a>
      </NextLink>
    )
  }
  return null
}

export default LocaleSelectItem
