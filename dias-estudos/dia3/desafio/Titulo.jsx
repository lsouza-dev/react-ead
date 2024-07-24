import React from 'react'

const Titulo = ({props,cor,size}) => {
  return (
    <h1 style={{color: cor, fontSize: size}}>{props}</h1>
  )
}

export default Titulo
