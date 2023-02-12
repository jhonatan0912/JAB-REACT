import React from 'react'
import { useParams } from "react-router-dom";

const Atanagildo = () => {
  const { rey } = useParams()
  return (
    <div>
      <img src={`https://www.html6.es/img/rey_${rey}.png`} alt="" />
      <h1 className='capitalize'>{rey}</h1>
    </div>
  )
}

export default Atanagildo