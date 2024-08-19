import { ComingSoonIcons } from './Icons'

export function UnderConstructionSoon() {
  return (
    <div className=' flex flex-col justify-center items-center bg-colorYellowBg w-[350px] h-[350px] pb-10 px-10 rounded-xl border-solid border '>
      <ComingSoonIcons />
      <p className='text-[22px] font-semibold text-center'>
        We're working hard on this feature.
      </p>
    </div>
  )
}
