import React from 'react'; 
import { PrimeReactProvider } from 'primereact/api';
import './App.css'
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {BrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom';
import Menu from '../components/Menu';
import Cursos from '../views/Cursos';


import Home from '../views/Home';
import Formulario from '../views/Formulario';

function App() {
  
  return (
    <>
      <PrimeReactProvider>
        {/* <Menu /> */}
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/cursos" element={<Cursos />} />
          </Routes>       
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  )
}

export default App
