import React, { useReducer } from 'react'

const types = {
  masM: "masM",
  menosM: "menosM",
  masA: "masA",
  menosA: "menosA",
}

const currentTime = new Date()
const month = currentTime.getMonth()
const year = currentTime.getFullYear()
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

const valorInicial = {
  m: month,
  a: year
}

const reducer = (state, action) => {
  let newMonth = state.m;
  let newYear = state.a;
  switch (action.type) {
    case types.masM:
      newMonth = newMonth == 11 ? 0 : newMonth + 1
      return { m: newMonth, a: state.a }
      break;
    case types.menosM:
      newMonth = newMonth == 0 ? 11 : newMonth - 1
      return { m: newMonth, a: state.a }
      break;
    case types.masA:
      newYear = newYear + 1
      break;
    case types.menosA:
      newYear = newYear - 1
      break;
  }
  return { m: newMonth, a: newYear }
}

const Calendario = () => {
  const [fecha, dispatch] = useReducer(reducer, valorInicial)
  return (
    <>
      <p className='capitalize font-bold text-3xl' style={fecha.m < month || fecha.a < year ? { color: "red" } : { color: "green" }}>{meses[fecha.m]} ({fecha.a})</p>
      <div>
        <p>Meses:</p>
        <button
          className='border border-black p-2 w-10'
          onClick={() => dispatch({ type: types.masM })}
        >+</button>
        <button
          className='border border-black p-2 w-10'
          onClick={() => dispatch({ type: types.menosM })}
        >-</button>
      </div>
      <div>
        <p>Años:</p>
        <button
          className='border border-black p-2 w-10'
          onClick={() => dispatch({ type: types.masA })}
        >+</button>
        <button
          className='border border-black p-2 w-10'
          onClick={() => dispatch({ type: types.menosA })}
        >-</button>
      </div>
    </>
  )
}

export default Calendario