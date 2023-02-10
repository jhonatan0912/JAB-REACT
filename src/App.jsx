import React from 'react'

import sisebuto from './assets/rey_sisebuto.png'
import leogivildo from './assets/rey_leogivildo.png'
import atanagildo from './assets/rey_atanagildo.png'
import KingCard from './components/KingCard'

function App() {
  return (
    <div className='grid grid-cols-3 gap-3 mt-5 w-11/12 m-auto'>
      <KingCard image={sisebuto} name="sisebuto" />
      <KingCard image={leogivildo} name="leogivildo" />
      <KingCard image={atanagildo} name="atanagildo" />
    </div>
  )
}

export default App;
