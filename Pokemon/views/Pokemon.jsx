
function Pokemon() {

  const products = 
    {
      nome: 'Bulbasaur',
      categoria: 'Seed',
      quantidade: 1,
    }
  


  return (
    <>
    <h1>{products.nome}</h1>
    <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
      <div style={{border:"1px solid black", maxWidth:'500px'}}>
        <p>imagem</p>    
      </div>
      <div>
        <p>informações</p>
        <p>habilidades</p>
        <p>tipos</p>
        <p>estatísticas</p>
        <p>evoluções</p>
      </div>
    </div>
    </>
  )
}

export default Pokemon

