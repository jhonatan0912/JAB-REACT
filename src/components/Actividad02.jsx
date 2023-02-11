import React from 'react'

export const Actividad02 = ({ reyes }) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center gap-5'>
      {
        reyes.filter(rey => !rey.nombre.includes("g")).map(rey =>
          <>
            <div>
              {rey.nombre}
              <button
                onClick={(e) => e.target.parentNode.remove()}
                className='border bg-red-500 text-white p-2 rounded-lg'
              >Eliminar</button>
            </div>
          </>)
      }
    </div>
  )
}
