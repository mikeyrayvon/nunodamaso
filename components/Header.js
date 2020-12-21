import { useState } from 'react'

import NavTrigger from './NavTrigger'
import HeaderNav from './HeaderNav'
import MobileNav from './MobileNav'

const Header = ({ settings }) => {
  const [navActive, setNavActive] = useState(false)

  return (
    <header className='w-full mb-24'>
      <MobileNav navActive={navActive} />
      <NavTrigger navActive={navActive} toggleNavActive={() => {
        if (navActive) {
          setNavActive(false)
        } else {
          setNavActive(true)
        }
      }} />
      <HeaderNav />
    </header>
  )
}

export default Header
