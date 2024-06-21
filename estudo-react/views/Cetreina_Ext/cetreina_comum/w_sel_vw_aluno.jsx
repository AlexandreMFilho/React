import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-dark-amber/theme.css";
import { Card } from 'primereact/card';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Divider } from 'primereact/divider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        
function Aluno() {
    
    return (
        <>
            <Card>
                
                <div style={{display:"flex",flexDirection:"row"}}>
                <ScrollPanel style={{ width: '100%', height: '200px' }}>
                    <div style={{display:"flex",flexDirection:"column", alignItems:"stretch",}}>
                        <DataTable  tableStyle={{ minWidth: '50rem' }} showGridlines>
                            <Column field="Matricula" header="Matricula"></Column>
                            <Column field="Nome" header="Nome"></Column>
                        </DataTable>
                    </div>
                </ScrollPanel>

                    <Divider layout="vertical" />

                    <div style={{display:"flex",flexDirection:"column", gap:"1em"}}>
                        <Button label='OK'/>
                        <Button label='Pesquisa'/>
                        <Button label='Ordena' disabled/>
                        <Button label='Filtra' disabled/>
                        <Button label='Cancela' />
                        <p>0  registro(s) encontrado(s)</p>
                        
                    </div>
                </div>
            </Card>
        </>
    )
}
export default Aluno;