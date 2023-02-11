import React from 'react'

export const ReyCard = ({ rey, buy }) => {
  const { nombre, color, precio } = rey
  const imageURL = 'http://www.html6.es/img/rey_';
  return (
    <div style={{ backgroundColor: color }} className="text-white p-5">
      <p className='font-bold text-3xl'>{nombre}</p>
      <img className='m-auto' src={`${imageURL}${nombre}.png`} alt={nombre} />
      <div className='text-2xl'>
        <p>Precio:</p>
        <p>${precio}</p>
        <button className='bg-white text-black p-2 font-bold'
          onClick={() => buy(nombre, precio)}
        >Comprar</button>
      </div>
    </div>
  )
}
