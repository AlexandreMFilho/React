import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputNumber } from 'primereact/inputnumber';
import { FileUpload } from 'primereact/fileupload';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';

import { InputText } from 'primereact/inputtext';


function Oferecido() {

    return (
        <>
            <Card>

                <TabView>
                    <TabPanel header="Estágios">
                        <div >
                            <div style={{display:"flex",flexDirection:"row",padding:"1em",justifyContent:"flex-start",gap:"1em"}}> 

                                <label style={{marginTop:"0.5em"}}>Nº: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>

                                <label style={{marginTop:"0.5em"}}>Convênio: </label>
                                <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} />

                                <input style={{height:"3em",borderRadius:"5%",width:"3em"}}></input>
                                <p style={{marginTop:"0.5em"}} >/</p>
                                <input style={{height:"3em",borderRadius:"5%",width:"3em"}}></input>

                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                                <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} />
                                <input style={{height:"3em",borderRadius:"5%"}}></input>

                            </div>
                            <div style={{display:"flex",flexDirection:"row",padding:"1em",justifyContent:"flex-start",gap:"1em"}}>
                                <label style={{marginTop:"0.5em"}}>Inicio Divulgação: </label>
                                <Calendar onChange={(e) => setDate(e.value)} />
                                <label style={{marginTop:"0.5em"}}>Fim Divulgação: </label>

                                <Calendar onChange={(e) => setDate(e.value)} />
                                <label style={{marginTop:"0.5em"}}>Total de Vagas: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",padding:"1em",justifyContent:"flex-start",gap:"1em"}}>
                                <label style={{marginTop:"0.5em"}}>Jornada: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>

                                <label style={{marginTop:"0.5em"}}>Horário: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>

                                <label style={{marginTop:"0.5em"}}>Duração: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>

                            </div>
                            <div style={{display:"flex",flexDirection:"row",padding:"1em",justifyContent:"flex-start",gap:"1em"}}>
                                <label style={{marginTop:"0.5em"}}>Bairro: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>

                                <label style={{marginTop:"0.5em"}}>Cidade: </label>
                                <Dropdown optionLabel="name" placeholder="455" className="w-full md:w-14rem" />

                            </div>

                        </div>
                        <h2>Contato</h2>
                        <div style={{border:"1px solid black",padding:"1em"}}>
                            <div  style={{display:"flex",flexDirection:"row",padding:"1em",justifyContent:"flex-start",gap:"1em"}}>
                                <label style={{marginTop:"0.5em"}}>Pessoa: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                                <label style={{marginTop:"0.5em"}}>Telefone: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                                <label style={{marginTop:"0.5em"}}>Fax: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>

                            </div>
                            <div style={{display:"flex",flexDirection:"row",padding:"1em",justifyContent:"flex-start",gap:"1em"}}> 
                                <label style={{marginTop:"0.5em"}}>Endereço: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",padding:"1em",justifyContent:"flex-start",gap:"1em"}}>
                                <label style={{marginTop:"0.5em"}}>Bairro: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                                <label style={{marginTop:"0.5em"}}>CEP: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",padding:"1em",justifyContent:"flex-start",gap:"1em"}} >
                                <label style={{marginTop:"0.5em"}}>Email: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                                <label style={{marginTop:"0.5em"}}>Site: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                            </div>

                        </div>

                        <h2>Encerramento da Divulgação</h2>
                        <div >
                            <div  style={{border:"1px solid black",padding:"1em",display:"flex",gap:"1em"}}>
                                <label style={{marginTop:"0.5em"}}>Data: </label>
                                <input style={{height:"3em",borderRadius:"5%"}}></input>
                                <label style={{marginTop:"0.5em"}}>Motivo: </label>
                                <Dropdown optionLabel="name" placeholder="" className="w-full md:w-14rem" />
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel header="Observações">

                    </TabPanel>
                    <TabPanel header="Idiomas">

                    </TabPanel>
                    <TabPanel header="Benefícios">

                    </TabPanel>
                    <TabPanel header="Documentos">

                    </TabPanel>
                    <TabPanel header="Vagas">

                    </TabPanel>
                </TabView>

            </Card>
        </>
    )
}
export default Oferecido;