import React, { useState, useContext } from 'react'
import { Context } from '../context/context'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'

const Pagina = () => {

  const { alumno } = useContext(Context)

  const idioma = alumno[3].idioma;

  const [ocultar1, setOcultar1] = useState(false)
  const [ocultar2, setOcultar2] = useState(false)

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <h1>{alumno[idioma].titulo}</h1>
        <h2>{alumno[idioma].texto}</h2>
      </div>
      <div className='button flex gap-3'>
        <button
          className='border border-black p-2 font-mono font-bold rounded-lg'
          onClick={() => { setOcultar1(!ocultar1); setOcultar2(false) }}
        >
          {alumno[idioma].boton1}
        </button>
        <button
          className='border border-black p-2 font-mono font-bold rounded-lg'
          onClick={() => { setOcultar2(!ocultar2); setOcultar1(false) }}
        >
          {alumno[idioma].boton2}
        </button>
      </div>
      {
        ocultar1 ? <Profesora /> : null
      }
      {
        ocultar2 ? <Ubicacion /> : null
      }
    </div >
  )
}

export default Pagina