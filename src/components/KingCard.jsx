import React, { useRef } from 'react'

import incognito from "./../assets/rey_incognito.png";

function KingCard({ image, name }) {

  const kingCard = useRef()

  const changeImage = (e) => {

    // kingCard.current.style.backgroundColor = "transparent"
    e.target.src.includes('incognito') ? e.target.style.visibility = "hidden" : e.target.src = incognito
    e.target.parentNode.style.backgroundColor = "transparent"
  }

  const changeText = (e) => {
    e.target.innerHTML == "Visto" ? e.target.innerHTML = "" : e.target.innerHTML = "Visto"
  }
  return (
    <div ref={kingCard} key={name} className="bg-amber-500 rounded-xl w-10/12 py-10">
      <img className='m-auto' src={image} alt={name} onClick={changeImage} />
      <p className='capitalize text-center text-2xl' onClick={changeText}>{name}</p>
    </div>
  )
}

export default KingCard