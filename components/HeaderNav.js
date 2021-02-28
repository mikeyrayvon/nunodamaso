import { useState, useEffect } from 'react'
import { default as NextLink } from 'next/link'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'


import Container from './Container'
import LocaleSelect from './locale/LocaleSelect'

const HeaderNav = () => {

  const { t } = useTranslation()

  return (
    <Container>
      <div className='flex py-4 md:py-8 -mx-6 uppercase text-sm'>
        <div className='flex-grow w-1/2 text-blue px-6'>
          <LocaleSelect />
        </div>
        <div className='px-6'><a href='/'><img src='/images/logo.svg' /></a></div>
        <nav className='main-nav flex-grow w-1/2 text-blue'>
          <ul className='flex justify-end'>
            <li className='pl-6 pr-4'>
              <NextLink href={'/philosophy'}>
                <a className='hover:underline'>{ t('philosophy') }</a>
              </NextLink>
            </li>
            <li className='px-4'>
              <NextLink href={'/history'}>
                <a className='hover:underline'>{ t('history') }</a>
              </NextLink>
            </li>
            <li className='px-4'>
              <NextLink href={'/journal'}>
                <a className='hover:underline'>{ t('journal') }</a>
              </NextLink>
            </li>
            <li className='pl-4 pr-6'>
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
