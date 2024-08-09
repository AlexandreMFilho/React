import { Avatar } from 'primereact/avatar';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Pokedex() {

  const {pkmnSelecionado, setpkmnSelecionado} = useState(null);
  const navigate = useNavigate();

  const pokemons = [
    {
      id: 1,
      image:<Avatar image="../images/Bulbasaur.png" />,
      name: 'Bulbassaur',
      types: ['Grass', 'Poison'],
    },
    {
      id: 4,
      image:<Avatar image="../images/Charmander.png" />,
      name: 'Charmander',
      types: ['Fire'],
    },
    {
      id: 7,
      image:<Avatar image="../images/Squirtle.png" />,
      name: 'Squirtle',
      types: ['Water'],
    }
  ]

  const onRowSelect = (event) => {

    navigate("/pokedex/"+event.data.id);
    console.log("event");
  }

  const onRowUnselect = (event) => {
    console.log("event2");
  }


  return (
    <>
    <h1>Pokedex</h1>
    
    <div className="card" style={{padding:"1em"}}>
      <DataTable value={pokemons} selectionMode="single" datakey="id" onRowSelect={onRowSelect} metaKeySelection={false} tableStyle={{ minWidth: '50rem' }}>
        <Column field="id" header="ID"></Column>
        <Column field="image" header="Sprite"></Column>
        <Column field="name" header="Nome"></Column>
        <Column field="types" header="Tipos"></Column>
      </DataTable>
    </div>
    
    </>
  )
}

export default Pokedex
