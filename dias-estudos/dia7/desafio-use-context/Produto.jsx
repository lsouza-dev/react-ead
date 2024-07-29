import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext);
  
  if(global.dados === null) return null
  return <section>
    {global.dados.map((produto) => <div key={produto.id}>
    <h1>{produto.nome}</h1>
    <p>R$ {produto.preco}</p>
    <img style={{width:'100px',height:'100px'}} src={produto.fotos[0].src} alt={produto.fotos[0].title} />
  </div>)}
  </section>
}

export default Produto
