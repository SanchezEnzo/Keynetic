interface KeyProps {
  letter: string
  handleKeyboard: (letter?: string) => void
}

export function Key({ letter, handleKeyboard }: KeyProps) {
  return (
    <button
      className='h-10 w-full outline outline-[#f1f1f1] outline-[.1px] flex justify-center items-center rounded-sm'
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
