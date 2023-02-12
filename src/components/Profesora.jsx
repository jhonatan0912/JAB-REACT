import React, { useContext } from 'react'
import { Context } from '../context/context'

const Profesora = () => {

  const { alumno } = useContext(Context)
  const idioma = alumno[3].idioma

  return (
    <div className='bg-sky-700 w-96 text-white font-bold text-3xl flex flex-col gap-3 rounded-md p-3'>
      <h1>{alumno[idioma].boton1}:</h1>
      <div>
        <img src={`/public/images/${alumno[idioma].foto}`} />
      </div>
      <div className='text-center'>{alumno[idioma].nombre}</div>
    </div>
  )
}

export default Profesora