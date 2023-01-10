import { NavLink } from 'react-router-dom'

export default function SiteCategoryNav () {
  return (
    <nav className='bg-gray-100 lg:mb-9 lg:max-w-4xl m-auto rounded-md'>
      <ul className='m-4 flex justify-between items-center h-12 '>
        <NavLink to='/sites/fonts'>Fonts</NavLink>
        <NavLink to='/sites/design'>Design</NavLink>
        <NavLink to='/sites/learning'>Learning</NavLink>
        <NavLink to='/sites/tools'>Tools</NavLink>
        <NavLink to='/sites/job-interview'>Job interview</NavLink>
      </ul>
    </nav>
  )
}
