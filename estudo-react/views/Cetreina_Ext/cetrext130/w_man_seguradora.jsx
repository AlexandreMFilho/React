import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
        
function Seguradora() {
    
    return (
        <>
            <Card>
                <div style={{display:"flex", flexDirection:"column",gap:"1em"}}>

                    <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", gap:"1em"}}>
                        <div style={{display:"flex", flexDirection:"row",justifyContent:"flex-start", gap:"1em"}}>
                            <label>Código</label>
                            <InputText  />
                            <label>Nome Fantasia</label>
                            <InputText  />
                        </div>
                        <div style={{display:"flex", flexDirection:"row",justifyContent:"flex-start", gap:"1em"}}> 
                            <label>Nome</label>
                            <InputText  />
                        </div>
                    </div>

                    <Divider />

                    <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", gap:"1em"}}>
                        <div style={{display:"flex", flexDirection:"row",justifyContent:"flex-start", gap:"1em"}}>
                            <label>Código</label>
                            <InputText  />
                            <label>Nome Fantasia</label>
                            <InputText  />
                        </div>
                        <div style={{display:"flex", flexDirection:"row",justifyContent:"flex-start", gap:"1em",alignItems:"stretch"}}> 
                            <label>Nome</label>
                            <InputText  />
                        </div>
                    </div>
                </div>

               
            </Card>
        </>
    )
}
export default Seguradora;