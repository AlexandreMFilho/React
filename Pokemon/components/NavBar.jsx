import { useState,useEffect } from 'react';
import avatar from '../images/avatar.png'

function NavBar(props) {
  const [nome, setNome] = useState("Não autenticado")
  const [logado, setLogado] = useState(false)

  useEffect(()=>{

  },[logado])

  return (
    <>

      <div style={{border:"1px solid black", display:"flex", flexDirection:"row", margin:"1em",alignContent:"space-around"}}>
        <div>
          <button>Pokédex</button>
        </div>
        <div>
          <button>Ginásios</button>
        </div>

        <div className='treinador' style={{display:'flex', flexDirection:'row',border:'1px solid black'}}>
          <div style={{alignContent:'center'}}>
            <img src={avatar} alt="Seu avatar" style={{width:'3em',height:'3em', borderRadius:'50%'}}/>
          </div>
          <div style={{display:'flex', flexDirection:'column',border:'1px solid black'}}>
              <p style={{fontSize:12}}>{nome}</p>
              {{logado} ?
                <button style={{height:"2em",fontSize:12}} onClick={()=>setLogado(false)}>Logout</button> :
                <button onClick={()=>setLogado(true)}>Login</button>
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
