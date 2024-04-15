import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        

function Cursos() {
    let products = [
        {
            "nome": "Curso de React",
            "sigla": "RE",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de React",
        },
        {
            "nome": "Curso de Angular",
            "sigla": "AN",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Angular",
        },
        {
            "nome": "Curso de Vue",
            "sigla": "VU",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Vue",
        }

    ]
    return (
        <div>
            <h1>Cursos</h1>
            
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="nome" header="Nome"></Column>
                <Column field="sigla" header="Sigla"></Column>
                <Column field="datainicio" header="Data de Inicio"></Column>
                <Column field="datafim" header="Data de Fim"></Column>
                <Column field="descricao" header="Descrição"></Column>
            </DataTable>
        </div>
    )
}
export default Cursos;