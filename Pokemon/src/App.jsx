import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Head from '../components/Head'

function App() {
  const [pergunta, setPergunta] = useState()

  // useEffect(()=> {
  //   window.confirm("Deseja se tornar um mestre pokémon ?")?setPergunta(True):setPergunta(False)
  // },[])

  return (
    <>
      <div style={{display:"flex", flexDirection:"column",justifyContent:"flex-start"}}>
        <Head/>
        <NavBar 
        // pokemon={["charmander","squirtle","bulbassaur"]}
        />
        {/* <Body/> */}
        <Footer/>
      </div>
    </>
  )
}

export default App
