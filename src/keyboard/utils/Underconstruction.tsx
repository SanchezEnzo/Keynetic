import { ComingSoonIcons } from './Icons'

export function UnderConstructionSoon() {
  return (
    <div className=' flex flex-col justify-center items-center bg-colorYellowBg w-[450px] h-[450px] pb-10 px-10 rounded-xl border-solid border mb-40'>
      <ComingSoonIcons />
      <p className='text-[22px] font-semibold'>
        Estamos trabajando duro en esta función.
      </p>
    </div>
  )
}
