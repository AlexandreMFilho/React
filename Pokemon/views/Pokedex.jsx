import "../node_modules/primereact/resources/themes/saga-orange/theme.css";

import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
        
function Pokedex() {

  const products = [
    {
      nome: 'Bulbasaur',
      categoria: 'Seed',
      quantidade: 1
    },
    {
      nome: 'Charmander',
      categoria: 'Lizard',
      quantidade: 1
    },
    {
      nome: 'Squirtle',
      categoria: 'Tiny Turtle',
      quantidade: 1
    }
  ]

  return (
    <>
    <h1>Pokedex</h1>
    <div style={{padding:"1em"}}>
      <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
        <Column field="nome" header="Nome"></Column>
        <Column field="categoria" header="Categoria"></Column>
        <Column field="quantidade" header="Quantidade"></Column>
      </DataTable>
    </div>
    
    </>
  )
}

export default Pokedex
