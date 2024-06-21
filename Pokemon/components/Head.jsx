import { useState,useEffect  } from 'react'
import logo from '../images/logo.png'

function Head() {
  return (
    <>
      <div style={{border:"1px solid black", display:"flex", flexDirection:"row"}}>
            <img src={logo} alt="Seu avatar" style={{width:'15em'}}/>
            <h1>Pokédex</h1>
      </div>
    </>
  )
}

export default Head
