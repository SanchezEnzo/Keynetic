import { useState } from 'react'
import { getFoneticTranscription } from '../../service/api/Searching'
import { TranscriptionInterface } from '../../typescript/Interface'
import { UnderConstructionSoon } from '../../keyboard/utils/Underconstruction'

export function Search() {
  const [transcription, setTranscription] = useState('')
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleQuery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(false)
    try {
      const { query } = Object.fromEntries(
        new FormData(e.target as HTMLFormElement)
      )
      setLoading(true)

      const value: TranscriptionInterface[] = await getFoneticTranscription(
        query as string
      )
      setQuery(query as string)

      const valueFonetic =
        value[0].phonetic === undefined
          ? (value[0].phonetics.find(a => a.text)?.text as string)
          : value[0].phonetic
      console.log('Valor dentro de la funcion: ', value)

      setTranscription(valueFonetic)
    } catch (error) {
      setError(`Error obteniendo la transcripción: ${(error as Error).message}`)
    } finally {
      setLoading(false)
    }
  }

  console.log(transcription)

  return (
    <div className='flex justify-center items-center pt-10 w-full'>
      <UnderConstructionSoon />
    </div>
  )

  return (
    <section className='w-full h-[600px] flex flex-col justify-start items-center gap-10 pt-20'>
      <form onSubmit={handleQuery} className='flex gap-5'>
        <label htmlFor='query'>
          Writte your query
          <input
            type='text'
            name='query'
            id='query'
            className='text-[#0f0f0f] ml-2'
          />
        </label>
        <button type='submit'>Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {loading ? (
        <p>...loading </p>
      ) : transcription ? (
        <div>
          <p className='text-[#f1f1f1]'>{transcription}</p>
          <a
            href={`https://www.wordreference.com/es/translation.asp?tranword=${query}`}
          >
            More info
          </a>
        </div>
      ) : null}
    </section>
  )
}
