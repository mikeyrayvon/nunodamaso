const NavTrigger = ({ navActive, toggleNavActive }) => {
  return (
    <div className='relative flex justify-center md:hidden mt-8 mb-4'>
      <div className={'nav-trigger flex flex-col justify-between' + (navActive ? ' nav-active' : '')} onClick={() => { toggleNavActive() }}>
        <div className='nav-trigger-bar origin-center h-1 w-full bg-black'></div>
        <div className='nav-trigger-bar origin-center h-1 w-full bg-black'></div>
      </div>
    </div>
  )
}

export default NavTrigger
