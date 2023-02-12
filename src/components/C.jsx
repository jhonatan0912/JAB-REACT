import React from 'react'
import { Link } from 'react-router-dom'

const C = () => {
  return (
    <div className='text-9xl mt-10'>
      <div>C</div>
      <br />
      
      <Link to={'/pagina2'} className="bg-blue-500 p-1">Ir a página 2</Link>
    </div>
  )
}

export default C