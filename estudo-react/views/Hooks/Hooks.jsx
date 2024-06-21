import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

function Hooks() {

  return (
    <>
        <h1>React Hooks</h1>
        <div style={{display:"flex",flexDirection:"column"}}>
          <Link to="/_useState">
            <Button label="UseState" severity="success" raised />
          </Link>
          {/* <Link to="/criar-cursos">
            <Button label="Criar Cursos" severity="success" raised />
          </Link>
          <Link to="/hooks">
            <Button label="ReactHooks" severity="success" raised />
          </Link>
          <Link to="/detalha-curso">
            <Button label="Detalhe Curso" severity="success" raised />
          </Link> */}
        </div>
    </>
  );
}export default Hooks;
