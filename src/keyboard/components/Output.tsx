export function Output({ sentence }: { sentence: string }) {
  return (
    <section className='pt-5 flex justify-center'>
      <input
        className='text-[#f1f1f1] bg-transparent font-semibold text-3xl text-center tracking-wider focus:outline-none'
        value={sentence}
      />
    </section>
  )
}
