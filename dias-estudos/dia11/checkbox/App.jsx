import React, { useCallback, useState } from 'react'

const App = () => {
  const [color,setColors] = useState([]);

  function handleChange({target}){
    if(target.checked){
      setColors([...color,target.value])
    }else{
      setColors(color.filter((cor) => cor !== target.value))
    }
  }
  return (
    <form>
      <label>
        <input type="checkbox" value='vermelho' checked={color.includes('vermelho')} onChange={handleChange} />
        Vermelho
      </label>
      <label>
        <input type="checkbox" value='azul' checked={color.includes('azul')} onChange={handleChange} />
        Azul
      </label>
      
    </form>
  )
}

export default App
