import React from 'react'

const App = () => {

  const [form,setForm] = React.useState({
    name: '',
    email: '',
    password: '' ,
  });

  function handleChange({target}){
    const {id,value} = target;
    setForm({ ...form,[id]: value})
  }
  
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
        value={form.name} 
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id='email' 
        name='email'
        value={form.email} 
        onChange={handleChange}
      />
      
      <label htmlFor="password">password:</label>
      <input 
        type="password" 
        id='password' 
        name='password'
        value={form.password} 
        onChange={handleChange}
      />
      
      <button>Enviar</button>
    </form>
  )
}

export default App
