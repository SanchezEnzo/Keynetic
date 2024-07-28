import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'

export function LayoutApp() {
  return (
    <div className='bg-[#0f0f0f] w-full min-h-screen h-full text-[#f1f1f1] flex flex-col items-center'>
      <Header />
      <Outlet />
    </div>
  )
}
