import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-dark-amber/theme.css";
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
        
function Empr_estag() {

    return (
        <>
            <Card style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>

                <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",margin:"1em"}}>
                    <Checkbox name="todasEmpresas" value="Todas as Empresas"></Checkbox>
                    <label>Todas as Empresas</label>
                </div>

                <div  style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",padding:"1em"}} >
                    <Checkbox  name="todasEmpresas" value="Todas as Empresas"></Checkbox>
                    <label>Empresas de um Agente</label>
                    <Dropdown style={{marginTop:"-0.5em",gap:"10em",marginLeft:"2em"}}  ooptionLabel="Todas as Empresas" placeholder="" className="w-full md:w-14rem" />
                </div>

                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"1em"}}>
                    <Checkbox name="todasEmpresas" value="Todas as Empresas"></Checkbox>
                    <label>Por categoria de Empresa</label>
                    <Dropdown style={{marginTop:"-0.5em", gap:"10em",marginLeft:"1em"}}  ooptionLabel="Todas as Empresas" 
                    placeholder="" className="w-full md:w-14rem" />
                </div>

                <div style={{display:"flex",flexDirection:"row", justifyContent:"space-around"}}>
                    <Button>OK</Button>
                    <Button>Cancelar</Button>
                    
                </div>
               
            </Card>
        </>
    )
}
export default Empr_estag;