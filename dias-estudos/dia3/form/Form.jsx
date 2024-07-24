import React from 'react'
import Input from './Input'
import Button from './Button'

function Form() {
  const arr = ["item 1","item 1"]
  return (
    <>        
      <Input id="email" label="Email" required />
      <Input id="senha" type="password" label="Senha" />
      <Button itens = {arr}/>
    </>
  )
}

export default Form
