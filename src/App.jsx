import React, { useState } from 'react'
import data from './api/data'
import { Actividad02 } from './components/Actividad02';
import { Actividad03 } from './components/Actividad03';
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
      <Actividad02 reyes={reyes} />
      <Actividad03 reyes={reyes} />
    </>
  )
}

export default App;
