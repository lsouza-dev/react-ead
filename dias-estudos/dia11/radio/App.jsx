import React, { useState } from 'react'

const App = () => {
  const [produto,setProduto] = useState('');
  const [cor,setCor] = useState('');
  const [nome,setNome] = useState('');

  function handleChange({target}){
    // Uma forma para setar os valores
    // Comparando o name do elemento

    if(target.name === 'cor'){
      setCor(target.value)
    }
    else if(target.name === 'produto'){

      setProduto(target.value)
    }

    // Outra forma de fazer a atribuição é usando
    // um Callback no onChange do elemento como usado nos nomes
    // onChange={({target}) => setNome(target.value)}

  }

  return (
    <form>

      <h2>Cores:</h2>
      <label>
        <input type="radio" name="cor" value='vermelho' onChange={handleChange} />
        Vermelho
      </label>
      <label>
        <input type="radio" name="cor" value='azul' onChange={handleChange} />
        Azul
      </label>

      <p>{cor}</p>
    

      <h2>Produtos:</h2>
      <label>
        <input type="radio" name='produto' value='notebook' onChange={handleChange} />
        Notebook        
      </label>
    
      <label>
        <input type="radio" name='produto' value='smarphone' onChange={handleChange} />
        Smarthone        
      </label>

      <p>{produto}</p>

      <h2>Nomes:</h2>
      <label>
        <input type="radio" name='nome' value='luiz' onChange={({target}) => setNome(target.value)} />
        Luiz         
      </label>
    
      <label>
        <input type="radio" name='nome' value='helena' onChange={({target}) => setNome(target.value)} />
        Helena        
      </label>
      
      <p>{nome}</p>
    </form>
  )
}

export default App
