import { useState, useEffect } from 'react'
import { default as NextLink } from 'next/link'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router';

import Container from './Container'

const HeaderNav = () => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <Container>
      <div className='flex py-4 md:py-8 -mx-6 uppercase'>
        <div className='flex-grow w-1/2 text-blue px-6'>
          <a href={router.pathname}>EN</a>
          <span className='pointer-events-none'> | </span>
          <a href={`/fr${router.pathname}`}>FR</a>
          <span className='pointer-events-none'> | </span>
          <a href={`/de${router.pathname}`}>DE</a>
        </div>
        <div className='px-6'><a href='/'><img src='images/logo.svg' /></a></div>
        <nav className='main-nav flex-grow w-1/2 text-blue'>
          <ul className='flex justify-end'>
            <li className='px-6'>
              <NextLink href={'/philosophy'}>
                <a className='hover:underline'>{ t('philosophy') }</a>
              </NextLink>
            </li>
            <li className='px-6'>
              <NextLink href={'/history'}>
                <a className='hover:underline'>{ t('history') }</a>
              </NextLink>
            </li>
            <li className='px-6'>
              <NextLink href={'/journal'}>
                <a className='hover:underline'>{ t('journal') }</a>
              </NextLink>
            </li>
            <li className='px-6'>
              <NextLink href={'/events'}>
                <a className='hover:underline'>{ t('events') }</a>
              </NextLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default HeaderNav
