import { useReducer } from 'react'
import {
  initialValueKeyboardReducer,
  keyboardReducer
} from '../reducers/keyboardReducer'

export function useKeyboard() {
  const [state, dispatch] = useReducer(
    keyboardReducer,
    initialValueKeyboardReducer
  )

  const addLetter = (letter?: string) =>
    dispatch({ type: 'ADD_LETTER', payload: letter })

  const deleteLetter = () => dispatch({ type: 'DELETE_LETTER' })
  const addSpace = () => dispatch({ type: 'ADD_SPACE' })
  const clearSentence = () => dispatch({ type: 'CLEAR_SENTENCE' })

  return { sentence: state, addLetter, deleteLetter, addSpace, clearSentence }
}
