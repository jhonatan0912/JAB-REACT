import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-zinc-900 text-white p-4 flex justify-center gap-5'>
      <NavLink
        className={({ isActive }) => isActive ? "bg-white text-black p-2 font-bold" : null}
        to={'/'}>Home</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "bg-white text-black p-2 font-bold" : null}
        to={'/reyes/atanagildo'}>Atanagildo</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "bg-white text-black p-2 font-bold" : null}
        to={'/reyes/ataulfo'}>Ataulfo</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "bg-white text-black p-2 font-bold" : null}
        to={'/reyes/ervigio'}>Ervigio</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "bg-white text-black p-2 font-bold" : null}
        to={'/reyes/leovigildo'}>Leovigildo</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "bg-white text-black p-2 font-bold" : null}
        to={'/reyes/recesvinto'}>Recesvinto</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "bg-white text-black p-2 font-bold" : null}
        to={'/reyes/sisebuto'}>Sisebuto</NavLink>
    </nav>
  )
}

export default NavBar