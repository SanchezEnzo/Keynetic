export const initialValueKeyboardReducer = ''
type ActionTypes =
  | 'ADD_LETTER'
  | 'DELETE_LETTER'
  | 'ADD_SPACE'
  | 'CLEAR_SENTENCE'

type ActionProps = {
  type: ActionTypes
  payload?: string
}

export function keyboardReducer(state: string, action: ActionProps): string {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_LETTER': {
      const newState = state + actionPayload
      return newState
    }
    case 'DELETE_LETTER': {
      const newState = state.slice(0, state.length - 1)
      return newState
    }
    case 'ADD_SPACE': {
      const newState = state + ' '
      return newState
    }
    case 'CLEAR_SENTENCE': {
      const newState = ''
      return newState
    }
  }
}
