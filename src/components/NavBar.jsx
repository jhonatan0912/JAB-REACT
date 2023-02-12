import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-zinc-900 text-white font-bold text-3xl flex gap-5 justify-center p-3'>
      <NavLink
        className={({ isActive }) => isActive ? "bg-red-600 text-yellow-300 p-1 rounded" : ""}
        to={"/"}>Pagina1</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "bg-red-600 text-yellow-300 p-1 rounded" : ""}
        to={"/pagina2"}>Pagina2</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "bg-red-600 text-yellow-300 p-1 rounded" : ""}
        to={"/pagina3"}>Pagina3</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "bg-red-600 text-yellow-300 p-1 rounded" : ""}
        to={"/pagina4/Z"}>Pagina4</NavLink>
    </nav>
  )
}

export default NavBar