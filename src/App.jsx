import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

import Rey from "./components/reyes/Rey";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reyes/:rey' element={<Rey />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
