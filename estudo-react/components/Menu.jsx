import React from 'react'; 
import { PrimeReactProvider } from 'primereact/api';
import { Menubar } from 'primereact/menubar';
import './Menu.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function Menu() {
  const items = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        url:'/'
    },
    {
        label: 'Criar Curso',
        icon: 'pi pi-pencil',
        url:'/criar-cursos' ,
    },
    {
        label: 'Listar Cursos',
        icon: 'pi pi-search',
        url:'/listar-cursos',
    },
    {
        label: 'Detalhar Curso',
        icon: 'pi pi-envelope',
        url:'/detalha-curso',
    }
];
  return (
    <>
      <PrimeReactProvider>
        <div className='card' >
          <Menubar model={items} />
        </div>
      </PrimeReactProvider>
    </>
  )
}

export default Menu
