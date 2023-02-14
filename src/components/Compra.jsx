import React, { useReducer, useState } from 'react'

const types = {
  menos: 'menos',
  mas: 'mas',
  eliminar: 'eliminar',
  comprar: 'comprar',
}

const valorInicial = [
  {
    id: 1,
    nombre: 'Agua',
    cantidad: 3
  },
  {
    id: 2,
    nombre: 'Pan',
    cantidad: 2
  }
]

const reducer = (state, action) => {
  switch (action.type) {
    case types.menos:
      return state.map(cosa => action.payload == cosa.id && cosa.cantidad > 1 ? { ...cosa, cantidad: cosa.cantidad - 1 } : cosa)
      break;
    case types.mas:
      return state.map(cosa => action.payload == cosa.id && cosa.cantidad > 1 ? { ...cosa, cantidad: cosa.cantidad + 1 } : cosa)
      break;
    case types.eliminar:
      return state.filter(valor => valor.id !== action.payload)
      break;
    case types.comprar:
      return [...state, action.payload]
      break;

    default:
      return state;
  }
  return state
}

const Compra = () => {
  const [lista, dispatch] = useReducer(reducer, valorInicial,)
  const [producto, setProducto] = useState("")

  return (
    <div>
      <label htmlFor="producto">Producto:
        <input type="text" id='producto' value={producto} onChange={(e) => setProducto(e.target.value)} className="border" />
      </label>
      <button
        onClick={() => dispatch({
          type: types.comprar, payload: {
            id: Date.now(),
            nombre: producto,
            cantidad: 1
          }
        })}
      >
        Añadir
      </button>

      {
        lista.map(producto =>
          <div key={producto.id} className="flex items-center">
            <p>{producto.nombre}(<span>{producto.cantidad}</span>)</p>
            <div className='flex'>
              <button className='button' onClick={() => dispatch({ type: types.menos, payload: producto.id })}>-</button>
              <button className='button' onClick={() => dispatch({ type: types.mas, payload: producto.id })}>+</button>
              <button className='button' onClick={() => dispatch({ type: types.eliminar, payload: producto.id })}>x</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Compra