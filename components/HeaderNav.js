import { useState, useEffect } from 'react'
import { default as NextLink } from 'next/link'

import Container from './Container'

const HeaderNav = () => {
  return (
    <div className={'header-nav w-full py-4 md:py-8'}>
      <Container>
        <nav className='main-nav hidden md:block'>
          <ul className='flex flex-wrap -mx-6'>
            <li className='px-6'>
              <h1>
                <NextLink href={'/'}>
                  <a className='hover:underline'>Website</a>
                </NextLink>
              </h1>
            </li>
            <li className='px-6'>
              <NextLink href={'/posts'}>
                <a className='hover:underline'>Posts</a>
              </NextLink>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default HeaderNav
