import React, { useState } from 'react'
import data from './api/data'
import { ReyCard } from "./components/ReyCard";


function App() {
  const [reyes, setReyes] = useState(data)
  return (
    <>
      <h1 className='text-3xl'>Actividad 1:</h1>
      <div className='flex flex-wrap gap-3 '>
        {
          reyes.map(rey => <ReyCard rey={rey} key={rey.nombre} />)
        }
      </div>
    </>
  )
}

export default App;
