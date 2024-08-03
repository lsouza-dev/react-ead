import React from 'react'

const App = () => {

  const formField =[
    {
      id:'nome',
      label: 'Nome',
      type: 'text', 
    },
    {
      id:'email',
      label: 'Email',
      type: 'email', 
    },
    {
      id:'senha',
      label: 'Senha',
      type: 'password', 
    },
    {
      id:'cep',
      label: 'CEP',
      type: 'text', 
    },
    {
      id:'rua',
      label: 'Rua',
      type: 'text', 
    },
    {
      id:'numero',
      label: 'Numero',
      type: 'text', 
    },
    {
      id:'bairro',
      label: 'Bairro',
      type: 'text', 
    },
    {
      id:'cidade',
      label: 'Cidade',
      type: 'text', 
    },
    {
      id:'estado',
      label: 'Estado',
      type: 'text', 
    },
  ] 

  // Para automatizar o useState de form...
  const forms = formField.reduce((acc,field) =>{
    console.log(acc)
    return{
      ...acc, [field.id]: ''
    }
  },{})

  const [form,setForm] = React.useState({
    nome:'',
    email:'',
    senha:'',
    cep:'',
    rua:'',
    numero:'',
    bairro:'',
    cidade:'',
    estado:'',
  });
  
  const [response,setResponse] = React.useState(null);

  async function handleSubmit(event){
    event.preventDefault();
    await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    })
    .then((response) => {
      setResponse(response);
      console.log(response)
    })
    ;
  }

  function handleChange({target}){
    const {id,value} = target;
    setForm({...form, [id]: value})
  }

  

  return (
    <form onSubmit={handleSubmit}>
      
      {formField.map(({id,label,type}) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {response  && response.ok && <p>Usuário criado com sucesso</p>}
      <button>Enviar</button>
    </form>
    
  )
}

export default App
