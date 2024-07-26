import React from 'react'

const App = () => {

  const [carrinho,setCarrinho] = React.useState(0);

  const [notificacao,setNotificacao] = React.useState(null);

  // Armazena a referência
  const timeoutRef = React.useRef();

  function handleClick(){
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho.");

    // Limpa o valor anterior
    clearTimeout(timeoutRef.current);

    // Adiciona um novo valor ao timeout e executa a função
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    },2000);
    
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  )
}

export default App
