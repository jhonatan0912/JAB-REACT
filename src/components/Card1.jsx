import React, { useContext } from 'react'
import { Context } from "../context/Context";

const Pagina1 = () => {

  const { color } = useContext(Context)

  return (
    <div style={{ backgroundColor: color }}>
      <p>Card 1</p>
      <p>{color}</p>
    </div>
  )
}

export default Pagina1