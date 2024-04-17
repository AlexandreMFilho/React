import React from 'react'; 
import { PrimeReactProvider } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

function Formulario() {

  return (
    <>
      <PrimeReactProvider>
      <Accordion activeIndex={0}>
        <AccordionTab header="Formulário">
        <div className='Formulario'>
          <FloatLabel className="item">
            <InputText id="Nome" onChange={(e)=>setValue(e.target.value)}/>
            <label for="Nome">Nome</label>
          </FloatLabel>
        

          <FloatLabel className="item">
            <InputText id="Email" onChange={(e)=>setValue(e.target.value)}/>
            <label for="Email">Email</label>
          </FloatLabel>
          <FloatLabel className="item">
            <InputText id="Matricula" onChange={(e)=>setValue(e.target.value)}/>
            <label for="Matricula">Matricula</label>
          </FloatLabel>
          <FloatLabel className="item">

            <InputText id="DataNascimento" onChange={(e)=>setValue(e.target.value)}/>
            <label for="DataNascimento">Data de Nascimento</label>
          </FloatLabel>

          
          {/* <Button label="Cancelar" severity="secondary" />
          <Button label="Submeter" severity="success" /> */}
           
           
        </div>


        </AccordionTab>
      </Accordion>

      </PrimeReactProvider>
    </>
  )
}

export default Formulario;