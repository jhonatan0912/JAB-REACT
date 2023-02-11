import React, { useState } from 'react'
import data from './api/data'

function App() {

  const [reyes, setReyes] = useState(data)
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        className='border bg-blue-600 text-white p-3 font-bold rounded-md'
        onClick={() => { setCount(count + 1); count + 1 >= reyes.length && setCount(0) }}
      >Ver siguiente</button>

      <div>
        <p className='text-3xl'>La afición principal de <span className='text-red-500'>{reyes[count].nombre}</span> es <span className='text-green-700'>{reyes[count].aficion}</span></p>
      </div>
    </>
  )
}

export default App;
