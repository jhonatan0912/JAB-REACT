import React, { useState, useEffect } from 'react'
import data from './api/data'
import { ReyCard } from './components/ReyCard';

function App() {

  const [reyes, setReyes] = useState(data)
  const [total, setTotal] = useState(0)


  const buy = (nombre, precio) => {
    setTotal(total + precio)
    const newBuyes = reyes.filter(rey => rey.nombre !== nombre)
    setReyes(newBuyes)
  }

  return (
    <div>
      <h1 className='font-bold text-4xl'>Total a pagar: ${total}</h1>
      <div className='grid md:grid-cols-2 md:w-7/12 md:m-auto gap-3'>
        {
          reyes.length == 0 ?
            <h2 className='text-9xl text-center'>No quedan más reyes</h2>
            :
            reyes.map(rey => <ReyCard rey={rey} key={rey.nombre} buy={buy} />)
        }
      </div>
    </div>
  )
}

export default App;
