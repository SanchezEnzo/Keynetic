const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export async function getFoneticTranscription(query: string) {
  try {
    const res = await fetch(`${URL}/${query}`)
    if (!res.ok)
      throw new Error(`Error getting transcription: ${res.statusText}`)
    const data = await res.json()
    return data
  } catch (e) {
    console.log('Error getting transcription', e)
    throw e
  }
}
