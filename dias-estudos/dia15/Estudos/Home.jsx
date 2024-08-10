import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Head from './Head'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      {<Head title='home' description='Essa é a descrição da Home' /> }
      
      
      <h1>Home</h1>
      <p>Essa é a Home</p>
      <Link to={'produto/notebook'}>Notebook</Link> {' '}
      <Link to={'produto/smartphone'}>Smartphone</Link> {' '}
    </div>
  )
}

export default Home
