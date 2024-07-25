import React from 'react'

const Produto = ({dados}) => {
    
    const prod = dados.nome;

    React.useEffect(() => {
        localStorage.setItem("produto",prod)
    },[dados])

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  )
}

export default Produto
