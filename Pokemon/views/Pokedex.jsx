import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';
        
function Pokedex() {

  const {pkmnSelecionado, setpkmnSelecionado} = useState(null);

  const pokemons = [
    {
      nome: 'Bulbasaur',
      categoria: 'Seed',
      quantidade: 1
    },
    {
      nome: 'Charmander',
      categoria: 'Lizard',
      quantidade: 1,
      link:'a'
    },
    {
      nome: 'Squirtle',
      categoria: 'Tiny Turtle',
      quantidade: 1
    }
  ]

  // useEffect(() => {
  //   pokemons.getProductsMini().then((data) => setProducts(data));
  // }, []);

  const onRowSelect = (event) => {
    console.log("event");
  }

  const onRowUnselect = (event) => {
    console.log("event2");
  }


  return (
    <>
    <h1>Pokedex</h1>
    
    <div className="card" style={{padding:"1em"}}>
      <DataTable value={pokemons} selectionMode="single" selection={pkmnSelecionado} onSelectionChange={(e)=> setpkmnSelecionado(e.value) } datakey="id" onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} metaKeySelection={false} tableStyle={{ minWidth: '50rem' }}>
        <Column field="nome" header="Nome"></Column>
        <Column field="categoria" header="Categoria"></Column>
        <Column field="quantidade" header="Quantidade"></Column>
      </DataTable>
    </div>
    
    </>
  )
}

export default Pokedex
