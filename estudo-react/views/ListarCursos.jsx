import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import "primereact/resources/themes/lara-dark-amber/theme.css";
        
function ListarCursos() {

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
        },
        {
            "nome": "Curso de Python",
            "sigla": "PY",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Python",
        },
        {
            "nome": "Curso de Java",
            "sigla": "JA",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Java",
        },
        {
            "nome": "Curso de JavaScript",
            "sigla": "JS",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de JavaScript",
        },
        {
            "nome": "Curso de C++",
            "sigla": "C++",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de C++",
        },
        {
            "nome": "Curso de Ruby",
            "sigla": "RB",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Ruby",
        },
        {
            "nome": "Curso de PHP",
            "sigla": "PHP",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de PHP",
        },
        {
            "nome": "Curso de HTML",
            "sigla": "HTML",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de HTML",
        },
        {
            "nome": "Curso de CSS",
            "sigla": "CSS",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de CSS",
        },
        {
            "nome": "Curso de Swift",
            "sigla": "SW",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Swift",
        },
        {
            "nome": "Curso de Kotlin",
            "sigla": "KO",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Kotlin",
        },
        {
            "nome": "Curso de Go",
            "sigla": "GO",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Go",
        },
        {
            "nome": "Curso de Rust",
            "sigla": "RS",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Rust",
        },
        {
            "nome": "Curso de TypeScript",
            "sigla": "TS",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de TypeScript",
        },
        {
            "nome": "Curso de Dart",
            "sigla": "DT",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Dart",
        },
        {
            "nome": "Curso de SQL",
            "sigla": "SQL",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de SQL",
        },
        {
            "nome": "Curso de Machine Learning",
            "sigla": "ML",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Machine Learning",
        },
        {
            "nome": "Curso de Data Science",
            "sigla": "DS",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Data Science",
        },
        {
            "nome": "Curso de Blockchain",
            "sigla": "BC",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Blockchain",
        },
        {
            "nome": "Curso de Flutter",
            "sigla": "FL",
            "datainicio": "01/01/2021",
            "datafim": "01/01/2022",
            "descricao": "Curso de Flutter",
        }

    ]


    return (
        <>
            <div>
                <h1>Cursos</h1>

                <DataTable value={products}
                
                paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}"
                
                >
                    <Column field="nome" sortable header="Nome"></Column>
                    <Column field="sigla" sortable header="Sigla"></Column>
                    <Column field="datainicio" sortable header="Data de Inicio"></Column>
                    <Column field="datafim" sortable header="Data de Fim"></Column>
                    <Column field="descricao" sortable header="Descrição"></Column>
                </DataTable>
            </div>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Link to="/criar-cursos">
                    <Button label="Criar Novo Curso" severity="success" raised />
                </Link>
            </div>
        </>
    )
}
export default ListarCursos;