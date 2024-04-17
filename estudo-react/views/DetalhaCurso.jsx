import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Calendar } from 'primereact/calendar';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

        
function DetalhaCurso() {

    let Curso = [
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
        <h1>Criar Curso</h1>
            <div className="card flex flex-wrap justify-content-center gap-3" style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <labe>Nome do Curso</labe>
                    <InputText  disabled placeholder={Curso[0].nome}/>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <labe>Sigla</labe>
                        <InputText disabled  placeholder={Curso[0].sigla}/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <label>Data de Inicio</label>
                        <Calendar disabled onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" placeholder={Curso[0].datainicio} />
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <label>Data de Fim</label>
                        <Calendar disabled onChange={(e) => setDate(e.value)} placeholder={Curso[0].datafim} />
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <labe>Descrição</labe>
                    <Editor  value={Curso[0].descricao} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} readOnly/>
                </div>
                <div style={{margin:10, display:"flex", justifyContent:'space-evenly'}}>
                    <Link to="/">
                        <Button label="Cancelar" severity="success" raised />
                    </Link>
                    <Link to="/listar-cursos">
                        <Button label="Submeter" severity="success" raised />
                    </Link>
                </div>
            </div>        
        </>
    )

} export default DetalhaCurso;

