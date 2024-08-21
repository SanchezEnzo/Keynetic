import { useEffect } from 'react'
import { useKeyboard } from '../hooks/useKeyboard'
import { ClearIcon, DeleteIcon, SpaceIcon } from '../../layout/components/Icons'
import { Output } from './Output'
import { Key } from './Key'
import { CONSONANTS, DIPTHONGS, OTHER_KEYS, VOWELS } from '../utils/letters'

export function Keyboard() {
  const { addLetter, sentence, addSpace, clearSentence, deleteLetter } =
    useKeyboard()

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') {
        deleteLetter()
      }
      console.log(e)
    }

    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [deleteLetter])

  const ACTIONS_KEYS = [
    {
      label: 'Delete',
      value: <DeleteIcon />,
      action: deleteLetter
    },
    {
      label: 'Space',
      value: <SpaceIcon />,
      action: addSpace
    },
    {
      label: 'Clear',
      value: <ClearIcon />,
      action: clearSentence
    }
  ]

  return (
    <section className='w-full flex flex-col h-full justify-around items-center py-8 2xl:py-40 max-md:pt-5 gap-5 2xl:gap-10 '>
      <div className='flex md:px-20 md:gap-10 gap-5 max-sm:px-2 max-md:flex-col'>
        <ul className='flex flex-wrap justify-center items-center my-0 mx-auto w-full max-w-[450px]  gap-3 '>
          {VOWELS.map(key => (
            <li
              key={key.label}
              className='w-[50px] h-[50px] max-sm:w-[38px] max-sm:h-[38px] py-2 outline outline-[#1f1f1f] outline-[.1px] flex justify-center items-center rounded-t-lg rounded-b-lg shadow-[#1f1f1f] shadow-key active:shadow-clickedKey active:translate-y-[3px] bg-red-200'
            >
              <Key letter={key.value} handleKeyboard={addLetter} />
            </li>
          ))}
        </ul>
        <ul className='flex flex-wrap justify-center my-0 mx-auto w-full max-w-[250px]  gap-3 max-h-[120px]  '>
          {DIPTHONGS.map(key => (
            <li
              key={key.label}
              className='w-[50px] h-[50px] max-sm:w-[38px] max-sm:h-[38px] py-2 outline outline-[#1f1f1f] outline-[.1px] flex justify-center items-center rounded-t-lg rounded-b-lg shadow-[#1f1f1f] shadow-key active:shadow-clickedKey active:translate-y-[3px] bg-green-200'
            >
              <Key letter={key.value} handleKeyboard={addLetter} />
            </li>
          ))}
        </ul>
      </div>
      <ul className='flex flex-wrap justify-center my-0 mx-auto w-full max-w-[1000px] px-20  max-sm:px-2 gap-3 '>
        {CONSONANTS.map(key => (
          <li
            key={key.label}
            className='w-[50px] h-[50px] max-sm:w-[38px] max-sm:h-[38px] py-2 outline outline-[#1f1f1f] outline-[.1px] flex justify-center items-center rounded-t-lg rounded-b-lg shadow-[#1f1f1f] shadow-key active:shadow-clickedKey active:translate-y-[3px] bg-cyan-200'
          >
            <Key letter={key.value} handleKeyboard={addLetter} />
          </li>
        ))}
      </ul>
      <div className='flex max-md:flex-col md:gap-10 gap-5 max-sm:px-2'>
        <ul className='flex flex-wrap justify-center my-0 mx-auto w-full  gap-3 '>
          {OTHER_KEYS.map(key => (
            <li
              key={key.label}
              className='w-[50px] h-[50px] max-sm:w-[38px] max-sm:h-[38px] py-2 outline outline-[#1f1f1f] outline-[.1px] flex justify-center items-center rounded-t-lg rounded-b-lg shadow-[#1f1f1f] shadow-key active:shadow-clickedKey active:translate-y-[3px] bg-purple-200'
            >
              <Key letter={key.value} handleKeyboard={addLetter} />
            </li>
          ))}
        </ul>
        <ul className='flex w-full justify-center gap-3'>
          {ACTIONS_KEYS.map(key => (
            <li
              key={key.label}
              className='w-[100px] max-sm:w-[60px] max-sm:h-[38px] py-2 outline outline-[#1f1f1f] outline-[.1px] flex justify-center items-center rounded-t-lg rounded-b-lg shadow-[#1f1f1f] shadow-key active:shadow-clickedKey active:translate-y-[3px] bg-[#f1f1f1]'
            >
              <Key letter={key.label} handleKeyboard={key.action} />
            </li>
          ))}
        </ul>
      </div>
      <Output sentence={sentence} />
    </section>
  )
}
