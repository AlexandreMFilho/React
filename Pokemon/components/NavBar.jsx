import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <PrimeReactProvider>
      <div style={{border:"1px solid black", display:"flex", flexDirection:"row",margin:"0em 1em",justifyContent:'flex-start',gap:'1em'}}>
        <Link to="/Home">
          <Button label="Home" severity="success" raised />
        </Link>
        <Link to="/pokedex">
          <Button label="Pokédex" severity="success" raised />
        </Link>
        <Link to="/ginasios">
          <Button label="Ginasios" severity="success" raised />
        </Link>
      </div>
    </PrimeReactProvider>
  )
}

export default NavBar
