import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';

function App() {

  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Home />} />
            <Route path="/pokedex/{num}" element={<Home />} />
            <Route path="/pokedex/{num}/evolucao" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  )
}

export default App