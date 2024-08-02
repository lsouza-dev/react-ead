import React, { useEffect } from 'react'
import useFetch from './useFetch'

const App = () => {
  const {data,loading,error,request} = useFetch();

  useEffect(() =>{
    async function fetchData(){
      const {response,json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
      console.log(response,json)
    }
    fetchData();
  },[])

  if(error) return <p>{error}</p>
  if(loading) return <p>Loading...</p>
  if(data){
    return(
      <section>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
            <p>R$ {produto.preco}</p>
            <img style={{width:'100px',height:'100px'}} src={produto.fotos[0].src} alt={produto.fotos[0].title} />
          </div>
        ))}
      </section>
    )
  }

}

export default App
