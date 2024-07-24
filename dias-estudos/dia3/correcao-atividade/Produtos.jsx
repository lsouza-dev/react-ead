import React from 'react'
import Titulo from './Titulo'
import Produto from './Produto';

function Produtos() {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
      ];
  return (
    <section>
        <Titulo texto="Produtos" />
        {produtos.map((prod) => (
            <Produto key={prod.nome} {...prod} />
        ))}
    </section>
  )
}

export default Produtos
