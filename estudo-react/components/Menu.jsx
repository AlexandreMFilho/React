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
    },
    {
        label: 'Form',
        icon: 'pi pi-pencil',
    },
    {
        label: 'About',
        icon: 'pi pi-search',
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
];
  return (
    <>
      <PrimeReactProvider>
        <div className='card'>
          <Menubar model={items} />
        </div>
      </PrimeReactProvider>
    </>
  )
}

export default Menu
