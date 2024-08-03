import React from 'react'

const App = () => {
  const [name,setName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  
  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id='name' 
        name='name'
        value={name} 
        onChange={({target}) => setName(target.value)} 
      />
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id='email' 
        name='email'
        value={email} 
        onChange={({target}) => setEmail(target.value)} 
      />
      <label htmlFor="password">password:</label>
      <input 
        type="password" 
        id='password' 
        name='password'
        value={password} 
        onChange={({target}) => setPassword(target.value)} 
      />
      <button>Enviar</button>
    </form>
  )
}

export default App
