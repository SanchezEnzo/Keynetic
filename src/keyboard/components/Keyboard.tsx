import { useEffect } from 'react'
import { useKeyboard } from '../hooks/useKeyboard'
import { ClearIcon, DeleteIcon, SpaceIcon } from '../../layout/components/Icons'
import { Output } from './Output'
import { Key } from './Key'
import { CONSONANTS, DIPTHONGS, OTHER_KEYS, VOWELS } from '../utils/consonants'

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
    <section className='w-full flex flex-col h-full justify-around items-center py-10  max-2xl:gap-5 gap-10'>
      <div className='flex px-20 gap-10'>
        <ul className='flex flex-wrap justify-center my-0 mx-auto w-full max-w-[350px] max-lg:px-12 max-sm:px-2 gap-2 '>
          {VOWELS.map(key => (
            <li
              key={key.label}
              className='w-[50px] h-[50px] max-sm:w-[50px] py-2 outline outline-[#f1f1f1] outline-[.1px] flex justify-center items-center rounded-sm'
            >
              <Key letter={key.value} handleKeyboard={addLetter} />
            </li>
          ))}
        </ul>
        <ul className='flex flex-wrap justify-center my-0 mx-auto w-full max-w-[250px]  max-lg:px-12 max-sm:px-2 gap-2 '>
          {DIPTHONGS.map(key => (
            <li
              key={key.label}
              className='w-[50px] h-[50px] max-sm:w-[50px] py-2 outline outline-[#f1f1f1] outline-[.1px] flex justify-center items-center rounded-sm'
            >
              <Key letter={key.value} handleKeyboard={addLetter} />
            </li>
          ))}
        </ul>
      </div>
      <ul className='flex flex-wrap justify-center my-0 mx-auto w-full max-w-[850px] px-20 max-lg:px-12 max-sm:px-2 gap-2 '>
        {CONSONANTS.map(key => (
          <li
            key={key.label}
            className='w-[50px] h-[50px] max-sm:w-[50px] py-2 outline outline-[#f1f1f1] outline-[.1px] flex justify-center items-center rounded-sm'
          >
            <Key letter={key.value} handleKeyboard={addLetter} />
          </li>
        ))}
      </ul>
      <div className='flex gap-10'>
        <ul className='flex flex-wrap justify-center my-0 mx-auto w-full  max-lg:px-12 max-sm:px-2 gap-2 '>
          {OTHER_KEYS.map(key => (
            <li
              key={key.label}
              className='w-[50px] h-[50px] max-sm:w-[50px] py-2 outline outline-[#f1f1f1] outline-[.1px] flex justify-center items-center rounded-sm'
            >
              <Key letter={key.value} handleKeyboard={addLetter} />
            </li>
          ))}
        </ul>
        <ul className='flex w-full justify-center  gap-2 '>
          {ACTIONS_KEYS.map(key => (
            <li
              key={key.label}
              className='w-[100px] py-2 outline outline-[#f1f1f1] outline-[.1px] flex justify-center items-center rounded-sm'
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
