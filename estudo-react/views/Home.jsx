import React from 'react'; 
import { PrimeReactProvider } from 'primereact/api';
import './Home.css'
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function Home() {

  return (
    <>
      <PrimeReactProvider>
        <h1>Home</h1>
        <h2>Bem Vindo a Página Inicial</h2>

      </PrimeReactProvider>
    </>
  )
}

export default Home
