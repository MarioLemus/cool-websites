import Features from '../../components/Features'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'

function Home () {
  // write your code here

  return (
    <Layout>
      <Hero />
      <Features />
      <section className='bg-zinc-900 max-w-6xl m-auto rounded-md shadow-lg'>
        <header>
          <h2 className='text-4xl text-center mb-4 text-orange-500 font-bold pt-8 pb-4'>Popular sites</h2>
        </header>
        <div className='flex justify-around flex-wrap'>
          <div className='mx-2 h-64 w-80 bg-red-400 mt-2 mb-2'>
            <img src='img/allnovelist_xyz_portfolio.png' className='rounded-sm h-full object-cover w-full' alt='' />
          </div>
          <div className='mx-2 h-64 w-80 bg-red-400 mt-2 mb-2'>
            <img src='img/new_portfolio.png' className='rounded-sm h-full object-cover w-full' alt='' />
          </div>
          <div className='mx-2 h-64 w-80 bg-red-400 mt-2 mb-2'>
            <img src='img/learn_crypto_portfolio.png' className='rounded-sm h-full object-cover w-full' alt='' />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
