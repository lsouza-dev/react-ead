import React from 'react'
import Produto from './Produto';

const App = () => {
  const [dados,setDados] = React.useState(null);
  const [produto,setProduto] = React.useState(null);


   function handleClick(event){
    setProduto(event.target.innerText);
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`).then((response) => response.json()).then((json) => setDados(json));
  }

  return (
    <div>
      <h1>Preferências: {produto || localStorage.getItem("produto")}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {dados && <Produto dados={dados} />}
    </div>
  )
}

export default App
