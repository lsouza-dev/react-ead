import React from 'react'

const App = () => {
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  const [cores,setCores] = React.useState([])

  function handleChange({target}){
    if(target.checked){
      setCores([...cores,target.value])
    }else{
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  return (
    <form>
      <section>
        {coresArray.map((item) => (
          <div key={item}>
            <label style={{textTransform:'capitalize'}}>
              <input type='checkbox' value={item} checked={cores.includes(item)} onChange={handleChange} />
              {item}
            </label>
          </div>
        ))}
      </section>
    </form>
  )
}

export default App
