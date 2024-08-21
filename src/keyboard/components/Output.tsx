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
    <section className='pt-3 flex justify-center gap-3 items-center'>
      <input
        ref={inputRef}
        className='text-[#1f1f1f] font-semibold md:text-2xl text-xl text-center tracking-wider outline rounded-sm py-1 px-2 outline-[#1f1f1f] outline-[0.1px] max-md:w-[250px] bg-[#f1f1f1] '
        value={sentence}
        readOnly
      />
      <button
        onClick={copyToClipboard}
        className='flex justify-start items-center  gap-2 outline outline-[#1f1f1f] outline-[0.1px] rounded-sm max-md:h-8 h-9 px-1 bg-orange-200 text-[#1f1f1f] font-semibold'
      >
        {copy ? (
          <>
            <CheckIcon />
          </>
        ) : (
          <>
            <CopyIcon />
          </>
        )}
      </button>
    </section>
  )
}
