import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  const lista = [
    "atanagildo",
    "ataulfo",
    "ervigio",
    "leovigildo",
    "recesvinto",
    "sisebuto"
  ]
  return (
    <div className='grid grid-cols-3'>
      {lista.map(rey =>
        <Link to={`/reyes/${rey}`}>
          <img src={`https://www.html6.es/img/rey_${rey}.png`} alt="" />
        </Link>)}
    </div>
  )
}

export default Home