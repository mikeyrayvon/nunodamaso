const NavTrigger = ({ navActive, handleClick }) => {
  return (
    <div onClick={() => { handleClick(!navActive) }}>X</div>
  )
}

export default NavTrigger
