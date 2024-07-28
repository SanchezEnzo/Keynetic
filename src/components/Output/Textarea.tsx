export function Textarea({ sentence }: { sentence: string }) {
  return (
    <section>
      <input className='text-[#0f0f0f]' value={sentence} />
    </section>
  )
}
