import React from "react"

const App = () => {

  const livros = [
    { nome: "A game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ]

// Retornando uma UL, dentro dela ocorre um filtro do array e captura apenas os objetos que o ano é maior que o valor definido.

// Após realizar o filtro, é feito um mapeamento passando o nome e o ano do objeto, e logo após, criando um li passando o nome como key e valor do li,juntamente ao ano do livro

const valorMinimo = 1996;

  return(
    <>
    <ul> 
      {livros.filter(({ano}) => ano > valorMinimo)
      .map(({nome,ano}) =>
      <li key={nome}>{nome}, {ano}</li>)}
    </ul>
    </>
  )
}

export default App;