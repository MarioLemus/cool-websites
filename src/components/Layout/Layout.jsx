import { Link } from 'react-router-dom'

export default function Layout ({ children }) {
  return (
    <>
      <header className='flex p-8 justify-between h-20 items-center max-w-6xl m-auto mb-6'>
        <Link to='/' className='text-white text-2xl font-bold'>Cool websites</Link>
        <nav>
          <Link to='/sites/fonts' className='m-8 text-white'>sites</Link>
          {/* <button className='bg-orange-500 py-2 px-10 rounded-sm'>Login</button> */}
        </nav>
      </header>
      <main className='px-6 m-auto'>
        {children}
      </main>
      <footer className='flex justify-center items-center max-w-6xl m-auto pt-16 pb-8'>
        <div>
          <Link to='/' className='text-xl text-white'>☕ buy me a coffee ☕</Link>
        </div>
      </footer>
    </>
  )
}
