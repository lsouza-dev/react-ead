import React from 'react'
import Produto from './Produto'

function App() {
    const [dados,setDados] = React.useState(null);
    const [carregando,setCarregando] = React.useState(null);

    async function handleClick(event){
        setCarregando(true);
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
        const json = await response.json();
        setCarregando(false);
        setDados(json)
        console.log(json)
    }

  return (
    <>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>smartphone</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
      
    </>
  )
}

export default App
