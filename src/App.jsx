import React, { useState } from 'react'

function App() {
  const [soles, setSoles] = useState(0)
  const [pesoArgentino, setPesoArgentino] = useState(0)
  const [pesoColombiano, setPesoColombiano] = useState(0)
  const [euros, setEuros] = useState(0)
  const [dolares, setDolares] = useState(0)

  const calcular = (e) => {
    setSoles(e.target.value)
    setPesoArgentino(e.target.value * 49.72)
    setPesoColombiano(e.target.value * 1255.29)
    setEuros(e.target.value * 0.24)
    setDolares(e.target.value * 0.26)
  }

  return (
    <div className='flex flex-col justify-center items-center text-center text-2xl gap-5'>

      <label htmlFor="Soles">
        <p>Soles</p>
        <input className='border border-black rounded-md text-center' type="number" autoFocus onChange={calcular} value={soles} />
      </label>
      <label htmlFor="Pesos argentinos">
        <p>Peso argentinos</p>
        <input className='border border-black rounded-md text-center outline-none' type="number" readOnly value={pesoArgentino} />
      </label>
      <label htmlFor="Pesos colombianos">
        <p>Peso colombiano</p>
        <input className='border border-black rounded-md text-center outline-none' type="number" readOnly value={pesoColombiano} />
      </label>
      <label htmlFor="Euros">
        <p>Euros</p>
        <input className='border border-black rounded-md text-center outline-none' type="number" readOnly value={euros} />
      </label>
      <label htmlFor="Dolares">
        <p>Dolares</p>
        <input className='border border-black rounded-md text-center outline-none' type="number" readOnly value={dolares} />
      </label>

    </div>
  )
}

export default App;
