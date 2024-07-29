import React from 'react'
import { GlobalContext } from './GlobalContext'

const Adicionar = () => {
  const global = React.useContext(GlobalContext);

  async function getProdutos(){
    if(global.dados !== null){
      alert("Os dados já estão em tela.")
      return null
    }
    await fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then((response) => response.json())
    .then((json) => global.setDados(json))
  }
  return (
    <button onClick={getProdutos}>Recuperar</button>
  )
}

export default Adicionar
