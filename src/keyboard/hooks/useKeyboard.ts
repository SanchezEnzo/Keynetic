import { useState } from 'react'

export function useKeyboard() {
  const [sentence, setSentence] = useState('')

  const addLetter = (letter?: string) => {
    setSentence((prev: string) => prev + letter)
  }

  const deleteLetter = () => setSentence(prev => prev.slice(0, prev.length - 1))
  const addSpace = () => setSentence((prev: string) => prev + ' ')
  const clearSentence = () => setSentence('')
  console.log(sentence)

  return { sentence, addLetter, deleteLetter, addSpace, clearSentence }
}
