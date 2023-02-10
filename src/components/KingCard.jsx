import React from 'react'

function KingCard({ image, name }) {
  return (
    <div key={name} className="bg-amber-500 rounded-xl w-10/12 py-10">
      <img className='m-auto' src={image} alt={name} />
      <p className='capitalize text-center text-2xl'>{name}</p>
    </div>
  )
}

export default KingCard