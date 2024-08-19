import { useEffect, useRef } from 'react'
import { CopyIcon } from '../../layout/components/Icons'

export function Output({ sentence }: { sentence: string }) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth
    }
  }, [sentence])

  return (
    <section className='pt-3 flex justify-center gap-5'>
      <input
        ref={inputRef}
        className='text-[#f1f1f1] bg-transparent font-semibold text-3xl text-center tracking-wider outline rounded-sm py-1 px-2 outline-[#f1f1f1] outline-[0.1px]'
        value={sentence}
        readOnly
      />
      <button>
        <CopyIcon />
      </button>
    </section>
  )
}
