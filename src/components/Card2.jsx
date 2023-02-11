import React, { useContext } from 'react'
import { Context } from './../context/Context';

const Card2 = () => {
  const { color } = useContext(Context);

  return (
    <div style={{ backgroundColor: color }}>
      <p>Card 2</p>
      {color}
    </div>
  )
}

export default Card2