import React from 'react'
import { GlobalContext, GlobalStorage } from './GlobalContext'
import Produto from './Produto'
import Limpar from './Limpar'
import Adicionar from './Adicionar'

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
      <Adicionar />
    </GlobalStorage>
  )
}

export default App
