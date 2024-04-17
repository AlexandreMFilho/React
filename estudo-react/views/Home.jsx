import React from 'react'; 
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import './Home.css'
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function Home() {

  return (
    <>
      <PrimeReactProvider>
        <h1>Home</h1>
        <h2>Bem Vindo a Página Inicial</h2>
        <div style={{display:"flex",flexDirection:"column"}}>
          <Link to="/listar-cursos">
            <Button label="Listar Cursos" severity="success" raised />
          </Link>
          <Link to="/criar-cursos">
            <Button label="Criar Cursos" severity="success" raised />
          </Link>
          {/* <Link to="/formulario">
            <Button label="Formulário" severity="success" raised />
          </Link> */}
          <Link to="/detalha-curso">
            <Button label="Detalhe Curso" severity="success" raised />
          </Link>
        </div>
      </PrimeReactProvider>
    </>
  )
}

export default Home
