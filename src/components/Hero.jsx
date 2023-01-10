
export default function Hero () {
  return (
    <section className='flex flex-col lg:flex-row rounded-md bg-zinc-900 xl:max-w-6xl m-auto shadow-lg'>

      <header className='w-full lg:w-2/4 px-8 py-8'>
        <h1 className='text-center text-4xl lg:text-left text-white sm:text-6xl font-bold leading-tight'>Websites that will boost your productivity</h1>
        <p className='text-center lg:text-left text-gray-400 mt-6'>Get to know the most useful dev sites</p>
        <div className='mt-2 flex justify-center lg:mt-4 lg:justify-start'>
          <a href='/' className=' bg-orange-500 px-8 py-2 mt-10 mb-4 rounded-sm'>See sites</a>
        </div>
      </header>

      <picture className='w-full lg:w-2/4'>
        <img src='img/electric-car.png' className='h-full object-cover rounded-md' alt='' />
      </picture>
    </section>
  )
}
