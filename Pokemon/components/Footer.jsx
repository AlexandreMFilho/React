import { useState,useEffect  } from 'react'
import pokedex from '../images/pokedex.png'

function Footer() {
  return (
    <>
      <div style={{border:"1px solid black", display:"flex", flexDirection:"row"}}>
        <h1>Footer</h1>
        <img src={pokedex} alt="Seu avatar" style={{width:'12em'}}/>
      </div>
    </>
  )
}

export default Footer
