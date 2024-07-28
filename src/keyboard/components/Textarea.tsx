export function Textarea({ sentence }: { sentence: string }) {
  return (
    <section className='pt-5'>
      <input className='text-[#0f0f0f]' value={sentence} />
    </section>
  )
}
