import { useState } from 'react'
import Footer from '../components/Footer'
import Head from '../components/Head'
import NavBar from '../components/NavBar'
import '../src/App.css'

function App() {
  const [pergunta, setPergunta] = useState()

  // useEffect(()=> {
  //   window.confirm("Deseja se tornar um mestre pokémon ?")?setPergunta(True):setPergunta(False)
  // },[])

  return (
    <>
      <div style={{display:"flex", flexDirection:"column",justifyContent:"flex-start"}}>
        <Head/>
        <NavBar pokemon={["charmander","squirtle","bulbassaur"]} />
        
        <Footer/>
      </div>
    </>
  )
}

export default App