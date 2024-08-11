import React, { useState } from 'react'
const Contato = React.lazy(() => import('./Contato'));


const App = () => {
  const [ativo,setAtivo] = useState(false);
  
  return (
    <div>
      {ativo && <React.Suspense fallback={<div>Carregando...</div>}>
        <Contato />
      </React.Suspense>}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  )
}

export default App
