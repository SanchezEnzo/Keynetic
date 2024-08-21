import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'

export function LayoutApp() {
  return (
    <div className='w-full text-[#f1f1f1] flex flex-col items-center relative'>
      <img
        src='/imgs/flowers.jpg'
        className='brightness-[0.6] bg-scroll bg-top w-full min-h-[100dvh] h-full bg-cover fixed -z-10'
      ></img>
      <Header />
      <Outlet />
    </div>
  )
}

// Todo: No abrir teclado en el celu
// Todo: implementar grid
