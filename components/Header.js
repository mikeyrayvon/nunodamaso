import { useState, useEffect } from 'react'

import NavTrigger from './NavTrigger'
import HeaderNav from './HeaderNav'
import MobileNav from './MobileNav'

const Header = ({ settings }) => {
  const [navActive, setNavActive] = useState(false)

  return (
    <header className='w-full mb-24 fixed top-0 w-screen z-50'>
      <MobileNav navActive={navActive} />
      <NavTrigger navActive={navActive} handleClick={setNavActive} />
      <HeaderNav />
    </header>
  )
}

export default Header
