import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Atanagildo from './components/reyes/Atanagildo';
import Ataulfo from './components/reyes/Ataulfo';
import Ervigio from './components/reyes/Ervigio';
import Leovigildo from './components/reyes/Leovigildo';
import Recesvinto from './components/reyes/Recesvinto';
import Sisebuto from './components/reyes/Sisebuto';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/atanagildo' element={<Atanagildo />} />
        <Route path='/ataulfo' element={<Ataulfo />} />
        <Route path='/ervigio' element={<Ervigio />} />
        <Route path='/leovigildo' element={<Leovigildo />} />
        <Route path='/leogivildo' element={<Navigate to={'/leovigildo'} />} />
        <Route path='/recesvinto' element={<Recesvinto />} />
        <Route path='/sisebuto' element={<Sisebuto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
