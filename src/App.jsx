import React, { useRef } from 'react'

import atanagildo from "./assets/rey_atanagildo.png";
import sisebuto from "./assets/rey_sisebuto.png";

function App() {
  const refCaja = useRef();

  const cambio = 23.16;
  function convertir() {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  }

  function incrementar(e) {
    e.target.innerHTML = Number(e.target.innerHTML) + 1
    e.target.innerHTML >= 10 ? e.target.innerHTML = 1 : e.target.innerHTML;
    e.target.innerHTML >= 8 ? e.target.style.backgroundColor = "red" : e.target.style.backgroundColor = "transparent"

  }

  function changeImage(e) {
    e.target.src.includes('atanagildo') ? e.target.src = sisebuto : e.target.src = atanagildo
  }

  function lectura(e) {
    refCaja.current.innerHTML = e.target.value
  }
  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>  1  </div>

      <button onClick={convertir}>Aceptar</button>

      <img src={atanagildo} alt="" onClick={changeImage} />

      <input type="text" className='campo border' onChange={lectura} autoFocus />

    </>
  )
}

export default App;
