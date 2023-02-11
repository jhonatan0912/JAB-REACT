import React from 'react'

import Colores from './components/Colores';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import { Datos } from "./context/Context";


function App() {
  return (
    <>
      <Datos>
        <div className='grid grid-cols-3 h-40'>
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <Colores />
      </Datos>
    </>
  )
}

export default App;
