import React, { useContext } from 'react'
import Context from '../context/Context'

const Card3 = () => {
  const { color } = useContext(Context)
  return (
    <div style={{ backgroundColor: color }}>
      <p>Card3</p>
      {color}
    </div>
  )
}

export default Card3