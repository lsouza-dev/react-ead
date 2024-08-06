import React, { useState } from 'react'
import Input from './Form/Input'

const App = () => {
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');

  return (
    <form>
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input id='email' label='Email' value={email} setValue={setEmail}/>
    </form>
  )
}

export default App
