/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Produto({dados}) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img style={{width: '450px',height: '450px'}} src={dados.fotos[0].src} alt={dados.fotos[0].title} />
    </div>
  )
}

export default Produto
