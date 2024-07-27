import React from 'react'

// Criando o context
export const GlobalContext = React.createContext();

// Exportando o global Storage, passando como parâmetro o children (filhos desse elemento)
export const GlobalStorage = ({children}) => {
  const [contar,setContar] = React.useState(0);

  function addOne(){
    setContar(contar => contar + 1)
  }

  function addTwo(){
    setContar(contar => contar + 2)
  }

  // Retornando o Provider passando os values que desejo disponibilizar aos filhos do context
  return <GlobalContext.Provider value={{nome: 'Luiz',contar, addOne,addTwo}}>
    {children}
    </GlobalContext.Provider>
}
