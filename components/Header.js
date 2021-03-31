import { useState, useEffect } from 'react'

import HeaderNav from './HeaderNav'

const Header = ({ settings }) => {
  const [navActive, setNavActive] = useState(false)

  return (
    <header className='w-full mb-24 fixed top-0 w-screen z-50'>
      <HeaderNav navActive={navActive} setNavActive={setNavActive} />
    </header>
  )
}

export default Header
