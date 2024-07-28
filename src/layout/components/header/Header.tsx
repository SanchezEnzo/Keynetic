import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className=' pt-10'>
      <div className='flex gap-10'>
        <Link
          to='/keyboard'
          className='p-5 font-semibold rounded-md outline outline-[#f1f1f1] outline-[0.1px]'
        >
          KEYBOARD
        </Link>
        <Link
          to='/search'
          className='p-5 font-semibold rounded-md outline outline-[#f1f1f1] outline-[0.1px]'
        >
          SEARCH
        </Link>
        <Link
          to='/audio'
          className='p-5 font-semibold rounded-md outline outline-[#f1f1f1] outline-[0.1px]'
        >
          Audio
        </Link>
      </div>
    </header>
  )
}
