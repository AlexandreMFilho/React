import { useState, useEffect} from "react";

function UseStates() {
    const [name,setName] = useState("Alexandre");
    const [number,setNumber] = useState(0);

    const soma = () => {
        // setNumber(number+1);                         //Ruim pois não existe controle

        // Previous Value
        setNumber((prevNumber)=> prevNumber +1);
    }
    const subtrai = () => {
        setNumber((prevNumber)=> prevNumber -1);
    }
    const reset = () => {
        setNumber(0);
    }

    return (
        <>
            <h1>UseStates</h1>

            <p>Bem vindo {name}</p>
            <h2>{number}</h2>
            <div>
                <button onClick={soma}>+</button>
                <button onClick={subtrai}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div>
                <label>Mudar nome</label>
                <input type="text" value={name} id="val" onChange={e => setName(e.target.value)}/>
            </div>

        </>
    )
}
export default UseStates;