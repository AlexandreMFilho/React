import React from 'react'; 
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import {BrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom';
import Menu from '../components/Menu';
import ListarCursos from '../views/ListarCursos';
import CriarCursos from '../views/CriarCursos';
import DetalhaCurso from '../views/DetalhaCurso';
import Error from '../views/Error';

import './App.css'

import Home from '../views/Home';
import Formulario from '../views/Formulario';

function App() {
  
  return (
    <>
      <PrimeReactProvider>
        <Menu />
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/listar-cursos" element={<ListarCursos />} />
                <Route path="/criar-cursos" element={<CriarCursos />} />
                <Route path="/detalha-curso" element={<DetalhaCurso />} />
                <Route path="*" element={<Error />} />
          </Routes>       
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  )
}

export default App
