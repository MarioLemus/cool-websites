import { BsClipboardData } from 'react-icons/bs'
import { VscTools } from 'react-icons/vsc'

export default function Features () {
  return (
    <section className='m-auto'>
      <header>
        {/* <h2 className='text-center text-4xl mt-14 mb-4'>Features</h2> */}
      </header>
      <div className='flex justify-center mt-20 mb-16'>
        <article className='w-64 mx-8 bg-red-700'>
          <div className='flex justify-center'>
            <BsClipboardData className='text-6xl' />
          </div>
          <p className='text-center py-5'>accesible data</p>
        </article>

        <article className='w-64 mx-8 bg-red-700'>
          <div className='flex justify-center'>
            <VscTools className='text-6xl' />
          </div>
          <p className='text-center py-5'>useful tools</p>
        </article>

        <article className='w-64 mx-8 bg-red-700 text-center'>a</article>
      </div>
    </section>
  )
}
