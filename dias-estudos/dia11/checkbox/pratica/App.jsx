import React from 'react'
import { useState } from 'react'

const App = () => {
 
  
  const colorsField = [
    {
      type: 'checkbox',
      value: 'red',
    },
    {
      type: 'checkbox',
      value: 'blue',
    },
    {
      type: 'checkbox',
      value: 'green',
    },
    {
      type: 'checkbox',
      value: 'purple',
    },
    {
      type: 'checkbox',
      value: 'lightBlue',
    },
    {
      type: 'checkbox',
      value: 'yellow',
    },
    {
      type: 'checkbox',
      value: 'brown',
    },
    {
      type: 'checkbox',
      value: 'gray',
    },
    {
      type: 'checkbox',
      value: 'pink',
    },
    {
      type: 'checkbox',
      value: 'orange',
    },
  ]

  const [colors,setColors] = useState([]);

  function handleChange({target}){
    if(target.checked){
      setColors([...colors,target.value])
    }else{
      setColors(colors.filter((cor) => cor !== target.value))
    }
  }

  return (
    <form>
      <h2>Select your favorite colors:</h2>

      {colorsField.map(({type,value}) => (
        <label key={value} style={{backgroundColor: value}}>
          <input 
            type={type} 
            value={value} 
            checked={colors.includes(value)} 
            onChange={handleChange} />
          {value}
        </label>
      ))}
      <section style={{display:'flex', alignItems:'center', gap:'5px'}}>
        <p style={{margin:'0',padding:'0'}}>Colors:</p>
      {colors.map((color) => <div key={color} style={{width:'20px',height:'20px', backgroundColor:color}}></div>)}
      </section>
      
    </form>
  )
}

export default App


