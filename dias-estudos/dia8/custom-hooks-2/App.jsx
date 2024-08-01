import React from 'react'
import useFetch from './useFetch'

const App = () => {
  const {request,data,loading,error} = useFetch()

  React.useEffect(() => {
    async function fetchData(){
      const {response,json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
      console.log(response,json)
    }
    fetchData();
  },[request])

  if(error) return <p>{error}</p>
  if(loading) return <h1>Loading...</h1>
  if(data ){
    return (
      <div>
        {data.map((produto) => <div key={produto.id}>
          <h1>{produto.nome}</h1>
          <p>R$ {produto.preco}</p>
          <img style={{width:'100px',height: '100px'}} src={produto.fotos[0].src} alt={produto.fotos[0].title} />
          </div>
        )}
      </div>
    )
  }else{
    return null;
  }
}

export default App
