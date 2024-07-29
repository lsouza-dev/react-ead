import React from 'react'
import { GlobalContext } from './GlobalContext'

const Limpar = () => {
  const global = React.useContext(GlobalContext)
  return (
    <button onClick={() => global.limparDados()}>Limpar</button>
  )
}

export default Limpar
