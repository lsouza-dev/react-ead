import React from 'react'
import Titulo from './Titulo';



const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];


const Produtos = () => {
    const divStyle = {
        border:"1px solid black",
        padding: "12px",
    }
    const prodStyle = {
        fontSize: "1rem",
    }

    const sectStyle = {
        display:"flex",
        flexDirection:"column",
        gap: "12px",
    }
  return (
    <section style={sectStyle}>
      <Titulo cor="green" props="Produtos" size="1.5rem" />
      {produtos.map(({nome,propriedades}) => (
        <div key={nome} style={divStyle}>
            <p style={prodStyle}>{nome}</p>
            <ul>
                {propriedades.map((prop) => (
                    <li key={prop} style={prodStyle}>{prop}</li>
                ))}
            </ul>
        </div>
      ))}

    </section>
  )
}

export default Produtos
