import { useEffect, useState } from 'react';
import avatar from '../images/avatar.png';
// import '../src/App.css';

function Login() {
    const [nome, setNome] = useState("Não autenticado")
    const [logado, setLogado] = useState(false)
    const [text, setText] = useState("Login")

    function changeText(){
      
    }

    useEffect(()=>{

        if(logado){
            setNome("Autenticado")
        }else{
            setNome("Não autenticado")
        }

    },[logado])
  
  return (
    <>
    <div className='treinador' style={{display:'flex', flexDirection:'column',border:'1px solid black',borderRadius:'10%',padding:'1em'}}>
        <p style={{fontSize:12}}>{nome}</p>
        <div style={{alignContent:'center'}}>
            <img src={avatar} alt="Seu avatar" style={{width:'3em',height:'3em', borderRadius:'50%'}}/>
        </div>
        <div style={{display:'flex', flexDirection:'column',}}>
            {
            {logado}?
            <button onClick={()=>setLogado(true)}>Login</button>:
            <button style={{height:"2em",fontSize:12}} onClick={()=>setLogado(false)}>Logout</button>
            }
        </div>

    </div>
    </>
  )
}

export default Login