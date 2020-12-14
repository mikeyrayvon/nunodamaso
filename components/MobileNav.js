import { default as NextLink } from 'next/link'

const MobileNav = ({ navActive }) => {
  return (
    <div className={'mobile-nav fixed inset-0 z-0 bg-white flex justify-center items-center text-center' + (navActive ? ' nav-active' : '')}>
      <nav>
        <ul className='text-6xl'>
          <li className='px-2'>
            <NextLink href={'/posts'}>
              <a className='hover:underline'>Posts</a>
            </NextLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav
