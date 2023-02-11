import React from 'react'

export const ReyCard = ({ rey }) => {
  const { nombre, reinado, vacasComidas } = rey
  const IMGURL = 'https://html6.es/img/rey_';
  return (
    <div className='border-black border rounded-lg w-2/12 p-3 text-2xl'>
      <p>
        <span className='uppercase text-red-500'> {nombre}</span> ha comido
        <span> {vacasComidas} </span>vacas
        <span> en sus {reinado} años de reinado</span>
      </p>
      <img src={`${IMGURL}${nombre}.png`} alt={nombre} />
    </div>
  )
}
