import { useEffect, useRef, useState } from 'react'
import { CheckIcon, CopyIcon } from '../../layout/components/Icons'

export function Output({ sentence }: { sentence: string }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [copy, setCopy] = useState(false)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth
    }
  }, [sentence])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sentence)
      setCopy(true)
      setTimeout(() => setCopy(false), 1000)
    } catch (error) {
      throw new Error('Error trying to copy: ' + error)
    }
  }

  return (
    <section className='pt-3 flex justify-center gap-5'>
      <input
        ref={inputRef}
        className='text-[#f1f1f1] bg-transparent font-semibold text-3xl text-center tracking-wider outline rounded-sm py-1 px-2 outline-[#f1f1f1] outline-[0.1px]'
        value={sentence}
        readOnly
      />
      <div className='group cursor-pointer relative text-center '>
        <button
          onClick={copyToClipboard}
          className='flex justify-center items-center w-full h-full'
        >
          {copy ? <CheckIcon /> : <CopyIcon />}
        </button>
        <div
          className='opacity-0 bg-[#f1f1f1] text-black text-center text-xs rounded-md py-1 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2  w-12 pointer-events-none font-semibold'
          role='tooltip'
        >
          {copy ? 'Copied' : 'Copy'}
          <svg
            className='absolute text-white h-2 w-full left-0 top-full'
            x='0px'
            y='0px'
            viewBox='0 0 255 255'
            xmlSpace='preserve'
          >
            <polygon className='fill-current' points='0,0 127.5,127.5 255,0' />
          </svg>
        </div>
      </div>
    </section>
  )
}
