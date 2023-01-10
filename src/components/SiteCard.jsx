import { FaRegStar, FaStar } from 'react-icons/fa'

export default function SiteCard ({ data }) {
  console.log(data)
  return data.map(dataElement => {
    return (
      <article key={dataElement.id} className='mb-6'>
        <header className='bg-gray-800 rounded-md h-64'>
          <img src={dataElement.imgUrl} loading='lazy' className='h-full w-full object-cover rounded-md border-4 border-zinc-700' alt={dataElement.name} />
        </header>
        <div className='flex items-center justify-between py-4'>
          <p className='text-white'>{dataElement.name}</p>
          <FaStar className='fill-yellow-300' />
        </div>
      </article>
    )
  })
}
