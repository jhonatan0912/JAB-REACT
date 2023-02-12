import React from 'react'
import Idiomas from './components/Idiomas'
import Pagina from './components/Pagina'
import Provider from './context/Provider'

const App = () => {
  return (
    <Provider>
      <div className='flags'>
        <Idiomas />
      </div>
      <div className='content'>
        <Pagina />
      </div>
    </Provider>
  )
}

export default App