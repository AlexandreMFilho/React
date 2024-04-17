import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Calendar } from 'primereact/calendar';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

        
function CriarCursos() {

    return (
        <>
        <h1>Criar Curso</h1>
            <div className="card flex flex-wrap justify-content-center gap-3" style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <labe>Nome do Curso</labe>
                    <InputText  />
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <labe>Sigla</labe>
                        <InputText  />
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <label>Data de Inicio</label>
                        <Calendar onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" placeholder='00/00/0000' />
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <label>Data de Fim</label>
                        <Calendar onChange={(e) => setDate(e.value)} />
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <labe>Descrição</labe>
                    <Editor  onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
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

} export default CriarCursos;


//     {
//     "nome": "Curso de SQL",
//     "sigla": "SQL",
//     "datainicio": "01/01/2021",
//     "datafim": "01/01/2022",
//     "descricao": "Curso de SQL",
// },