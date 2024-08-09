import { Avatar } from 'primereact/avatar';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Image } from 'primereact/image';



function Pokemon() {

 
    const pokemon = 
      {
        id: 1,
        image:<Avatar image="../images/Bulbasaur.png" />,
        name: 'Bulbassaur',
        types: ['Grass', 'Poison'],
        stats:[
          {
            name: 'HP',
            value: 45
          },
          {
            name: 'Attack',
            value: 49
          },
          {
            name: 'Defense',
            value: 49
          },
          {
            name: 'Special Attack',
            value: 65
          },
          {
            name: 'Special Defense',
            value: 65
          },
          {
            name: 'Speed',
            value: 45
          }
        ]
      }

  


  return (
    <>
    <h1>{pokemon.name}</h1>
    <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
      <div style={{border:"1px solid black", maxWidth:'500px'}}>
        <Image src="../images/Bulbasaur.png"></Image>
        <p>{pokemon.name}</p>    
      </div>
      <div>
        <h4>Habilidades</h4>
        <h4>Tipos</h4>
        <h4>Stats</h4>
        <DataTable value={pokemon.stats} tableStyle={{ minWidth: '10rem' }}>
          <Column field="name" header=""></Column>
          <Column field="value" header=""></Column>
        </DataTable>
          {pokemon.stats[0].name}
          {pokemon.stats[1].name}
          {pokemon.stats[2].name}
          {pokemon.stats[3].name}
          {pokemon.stats[4].name}
          {pokemon.stats[5].name}
        <p>evoluções</p>
      </div>
    </div>
    </>
  )
}

export default Pokemon

