import { Header } from '../components/Header/Header'
import { Keyboard } from '../components/keyboard/Keyboard'

export function LayoutApp() {
  return (
    <div className='bg-[#0f0f0f] w-full h-screen text-[#f1f1f1] flex flex-col items-center'>
      <Header />
      <Keyboard />
    </div>
  )
}
