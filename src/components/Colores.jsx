import React, { useContext } from 'react'
import { Context } from './../context/Context';

const Colores = () => {

  const { setColor } = useContext(Context)

  return (
    <div className='flex gap-4'>
      <button className="color w-5 h-5 border border-black rounded active:scale-95 cursor-pointer" style={{ backgroundColor: "#4285f4" }}
        onClick={() => setColor('#4285f4')}
      ></button>
      <button className="color w-5 h-5 border border-black rounded active:scale-95 cursor-pointer" style={{ backgroundColor: "#ea4335" }}
        onClick={() => setColor('#ea4335')}
      ></button>
      <button className="color w-5 h-5 border border-black rounded active:scale-95 cursor-pointer" style={{ backgroundColor: "#fbbc05" }}
        onClick={() => setColor('#fbbc05')}
      ></button>
      <button className="color w-5 h-5 border border-black rounded active:scale-95 cursor-pointer" style={{ backgroundColor: "#34a853" }}
        onClick={() => setColor('#34a853')}
      ></button>
    </div>
  )
}

export default Colores