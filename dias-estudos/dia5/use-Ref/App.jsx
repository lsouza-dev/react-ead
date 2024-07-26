import React from 'react'

const App = () => {

  const [comentarios,setcomentarios] = React.useState([]);
  const [input,setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick(){
    setcomentarios([...comentarios, input] )
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input ref={inputElement} type="text" value={input} onChange={({target}) => setInput(target.value)} />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default App