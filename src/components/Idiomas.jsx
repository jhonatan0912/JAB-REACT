import React, { useContext } from 'react'
import { Context } from '../context/context'

const Idiomas = () => {

  const { alumno, setAlumno } = useContext(Context)

  const cambio1 = () => {
    setAlumno(alumno.map((dato, indice) => indice == 3 ? { ...dato, idioma: 0 } : { ...dato }))
  }

  const cambio2 = () => {
    setAlumno(alumno.map((dato, indice) => indice == 3 ? { ...dato, idioma: 1 } : { ...dato }))
  }

  const cambio3 = () => {
    setAlumno(alumno.map((dato, indice) => indice == 3 ? { ...dato, idioma: 2 } : { ...dato }))
  }

  return (
    <div className='flex gap-3'>
      <div className='flag' onClick={() => cambio1()}>
        <img src="/public/images/spain.jpg" alt="" />
      </div>
      <div className='flag' onClick={() => cambio2()}>
        <img src="/public/images/uk.png" alt="" />
      </div>
      <div className='flag' onClick={() => cambio3()}>
        <img src="/public/images/francia.png" alt="" />
      </div>
    </div>
  )
}

export default Idiomas