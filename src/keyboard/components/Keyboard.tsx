import { useEffect } from 'react'
import { useKeyboard } from '../hooks/useKeyboard'
import { ClearIcon, DeleteIcon, SpaceIcon } from '../../layout/components/Icons'
import { Textarea } from './Textarea'
import { Key } from './Key'

const KEYS = [
  {
    label: 'Schwa',
    value: 'ə'
  },
  {
    label: 'ɪ',
    value: 'ɪ'
  },
  {
    label: 'ShortE',
    value: 'ɛ'
  },
  {
    label: 'SmilingA',
    value: 'æ'
  },
  {
    label: 'CentralA',
    value: 'ʌ'
  },
  {
    label: 'ShortA',
    value: 'ɑ'
  },
  {
    label: 'ShortO',
    value: 'ɔ'
  },
  {
    label: 'ʊ',
    value: 'ʊ'
  },

  {
    label: 'e',
    value: 'e'
  },

  {
    label: 'Pe',
    value: 'p'
  },
  {
    label: 'Be',
    value: 'b'
  },
  {
    label: 'Te',
    value: 't'
  },
  {
    label: 'De',
    value: 'd'
  },
  {
    label: 'Ka',
    value: 'k'
  },
  {
    label: 'Ge',
    value: 'g'
  },
  {
    label: 'Efe',
    value: 'f'
  },
  {
    label: 'Ve',
    value: 'v'
  },
  {
    label: 'θ',
    value: 'θ'
  },
  {
    label: 'ð',
    value: 'ð'
  },
  {
    label: 's',
    value: 's'
  },
  {
    label: 'Zeta',
    value: 'z'
  },
  {
    label: 'ʃ',
    value: 'ʃ'
  },
  {
    label: 'ʒ',
    value: 'ʒ'
  },
  {
    label: 'Ache',
    value: 'h'
  },
  {
    label: 'Eme',
    value: 'm'
  },
  {
    label: 'Ene',
    value: 'n'
  },
  {
    label: 'NasalEne',
    value: 'ŋ'
  },
  {
    label: 'Ele',
    value: 'l'
  },

  {
    label: 'Jota',
    value: 'j'
  },
  {
    label: 'DobleVe',
    value: 'w'
  },

  {
    label: 'ˈ',
    value: 'ˈ'
  },
  {
    label: 'ˌ',
    value: 'ˌ'
  },
  {
    label: 'ː',
    value: 'ː'
  },
  {
    label: 'ˑ',
    value: 'ˑ'
  }
]

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
    <section className='w-full flex flex-col h-full justify-around items-center'>
      <ul className='grid grid-cols-auto-fill w-[800px] gap-2 my-0 mx-auto '>
        {KEYS.map(key => (
          <li>
            <Key letter={key.value} handleKeyboard={addLetter} />
          </li>
        ))}
      </ul>
      <ul className='grid grid-cols-auto-fill w-[800px] gap-2 my-0 mx-auto'>
        {ACTIONS_KEYS.map(key => (
          <li>
            <Key letter={key.label} handleKeyboard={key.action} />
          </li>
        ))}
      </ul>
      <Textarea sentence={sentence} />
    </section>
  )
}
