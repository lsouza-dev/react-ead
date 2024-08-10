import React from 'react'
import { NavLink, Route, Routes, useLocation, useParams, Outlet } from 'react-router-dom'

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search.get('cor'))
  
  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to=''>Descrição</NavLink> {' '}
        <NavLink to='avaliacao'>Avaliação</NavLink>  {' '}
        <NavLink to='customizado'>Customizado</NavLink>
        <Outlet/>
      </nav>
      
    </div>
  )
}

export default Produto
