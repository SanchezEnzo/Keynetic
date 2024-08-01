interface KeyProps {
  letter: string
  handleKeyboard: (letter?: string) => void
}

export function Key({ letter, handleKeyboard }: KeyProps) {
  return (
    <button
      className='w-full h-full'
      onClick={() => {
        if (typeof letter === 'string') {
          return handleKeyboard(letter)
        }
        handleKeyboard()
      }}
    >
      <span>{letter}</span>
    </button>
  )
}
