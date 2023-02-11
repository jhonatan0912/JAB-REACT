import React from 'react'

export const Actividad03 = ({ reyes }) => {

  const result = reyes.find(rey => rey.nombre.substring(0, 1).toLowerCase() == 'e')
  console.log(result);
  return (
    <div>
      {

        result ? <h2>{result.nombre}</h2> : <h2>No se encontro resultados</h2>
      }
    </div>
  )
}
