import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  // Atribuindo ao global os contextos inseridos no value do GlobalContext
  const global = React.useContext(GlobalContext);

  // Acessando o contar e os métodos do GlobalContext através da variável global
  return <div>Produto: {global.contar} <button onClick={() => global.addTwo()}>Clique</button></div>  
}

export default Produto
