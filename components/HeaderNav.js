import { useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { default as NextLink } from 'next/link'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'


import Container from './Container'
import LocaleSelect from './locale/LocaleSelect'

const HeaderNav = ({navActive, setNavActive}) => {
  const { t } = useTranslation()
  const router = useRouter()
  const isLanding = router.pathname === '/'
  const [isPastHero, setIsPastHero] = useState(false)

  useLayoutEffect(() => {
    if (isLanding) {
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onScroll = () => {
    const scrollPosition = window.scrollY
    const viewportHeight = window.innerHeight

    if (scrollPosition > (viewportHeight * .8)) {
      setIsPastHero(true)
    } else if (scrollPosition < (viewportHeight * .8)) {
      setIsPastHero(false)
    }
  }

  return (
    <div className={'z-10 absolute w-screen transition-colors duration-500 ' + (!isPastHero && isLanding && !navActive ? 'text-white' : 'text-blue')}>
      <Container>
        <div className='flex -mx-6 uppercase text-sm'>

          <div className='py-4 lg:py-8 w-1/3 lg:w-1/2 px-8 lg:px-6 relative z-10'>
            <LocaleSelect />
          </div>

          <div className='py-4 lg:py-8 w-1/3 px-6 text-center relative z-10' style={{
            filter: (!isPastHero && isLanding && !navActive ? 'invert(100%)' : 'invert(0%)'),
            transition: 'filter 500ms linear'
          }}>
            <a href='/'><img src='/images/logo.svg' className='inline w-6 md:w-7 lg:w-8 xl:w-10'/></a>
          </div>

          <nav className={'opacity-0 pointer-events-none fixed z-0 inset-0 bg-white pt-20 transition transform scale-90 lg:relative lg:inset-auto lg:py-8 lg:flex-grow lg:w-1/2 lg:block lg:opacity-100 lg:transition-none lg:pointer-events-auto lg:bg-transparent lg:-mr-4' + (navActive ? ' opacity-100 scale-100 pointer-events-auto' : '')}>
            <ul className='flex flex-col h-full justify-center lg:flex-row lg:justify-end text-lg lg:text-sm'>
              <li className='mb-12 text-center lg:pl-6 lg:pr-4'>
                <NextLink href={'/philosophy'}>
                  <a className='hover:underline'>{ t('philosophy') }</a>
                </NextLink>
              </li>
              <li className='mb-12 text-center lg:px-4'>
                <NextLink href={'/history'}>
                  <a className='hover:underline'>{ t('history') }</a>
                </NextLink>
              </li>
              <li className='mb-12 text-center lg:px-4'>
                <NextLink href={'/journal'}>
                  <a className='hover:underline'>{ t('journal') }</a>
                </NextLink>
              </li>
              <li className='mb-12 text-center lg:pl-4 lg:pr-6'>
                <NextLink href={'/events'}>
                  <a className='hover:underline'>{ t('events') }</a>
                </NextLink>
              </li>
            </ul>
          </nav>

          <div className='w-1/3 pt-4 text-right relative z-10 lg:hidden'>
            <span className='py-4 px-8' onClick={() => { setNavActive(!navActive) }}>
              <span className={navActive ? 'hidden' : ''}>Menu</span>
              <span className={navActive ? '' : 'hidden'}>Close</span>
            </span>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default HeaderNav
