import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';

import { Dropdown } from 'primereact/dropdown';

function Nagent() {

    return (
        <>
            <Card>
                <div style={{ display: "flex", flexDirection: "column",gap:"1em" }}>

                    <div style={{ display: "flex", flexDirection: "row" ,gap:"1em"}}>
                        <label>CNPJ:</label>
                        <InputMask mask="99.999.999/9999-99" placeholder="99.999.999/9999-99" />
                        <label>Nome Fantasia:</label>
                        <InputText />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" ,gap:"1em"}}>
                        <label>Razão Social:</label>
                        <InputText />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" ,gap:"1em"}}>
                        <label>Categoria</label>
                        <Dropdown optionLabel="name"
                            placeholder="Select a City" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
                        <label>Órgão e No. Cat. Prof.:</label>
                        <InputText />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row",gap:"1em" }}>
                        <label>E-mail:</label>
                        <InputText />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row",gap:"1em" }}>
                        <label>Website:</label>
                        <InputText />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row",gap:"1em"}}>
                        <label>Endereço:</label>
                        <InputText />
                        <label>Bairro:</label>
                        <InputText />
                        <label>CEP:</label>
                        <InputMask mask="99999-999" placeholder="99999-999" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap:"1em"}}>
                        <div style={{ display: "flex", flexDirection: "row",padding:"1em",gap:"1em"}}>
                            <div style={{ display: "flex", flexDirection: "row", border:"1px solid black",padding:"1em",gap:"1em"}}>
                                <label>DDD:</label>
                                <InputText />
                                <label>Telefone:</label>
                                <InputText />
                                <label>Ramal:</label>
                                <InputText />
                            </div>
                            <div>
                            <label>FAX:</label>
                            <InputText />

                            </div>

                        </div>
                    </div>

                </div>

            </Card>
        </>
    )
}
export default Nagent;