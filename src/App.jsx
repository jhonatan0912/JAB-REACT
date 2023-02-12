import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import Error404 from './components/Error404';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<A />} />
        <Route path='/pagina1' element={<Navigate to={'/'} />} />
        <Route path='/pagina2' element={<B />} />
        <Route path='/pagina3' element={<C />} />
        <Route path='/pagina4/:letra' element={<D />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
