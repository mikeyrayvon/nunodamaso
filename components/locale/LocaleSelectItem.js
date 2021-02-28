import SelectCarat from './SelectCarat'

const LocaleSelectItem = ({ code, path, current, active, handleClick }) => {
  const isCurrent = current === code
  return (
    <a
      href={isCurrent ? null : path}
      className={
        (isCurrent ? 'cursor-default order-1' : 'order-2') +
        (!active && !isCurrent ? ' pointer-events-none' : '')
      }
      onClick={isCurrent ? () => {
        handleClick(!active)
      } : null}
    >
      <span className='inline-block uppercase'>{code}</span>
      {isCurrent &&
        <SelectCarat active={active} />
      }
    </a>
  )
}

export default LocaleSelectItem
