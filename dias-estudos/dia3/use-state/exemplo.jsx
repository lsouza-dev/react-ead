/* eslint-disable no-unused-vars */
import React from "react";

const App = () => {

    const [ativo, setAtivo] = React.useState(true);
    const [dados,setDados] = React.useState({nome: "Luiz", idade: '20'})

    const handeClick = () =>{
        setAtivo(!ativo)
        setDados({...dados,faculdade: "Análise e Desenvolvimento de Sistemas"})
    }
   
    return (
        <div>
            <p>{dados.nome}</p>
            <p>{dados.idade}</p>
            <p>{dados.faculdade}</p>
            <button onClick={handeClick}>{ativo ? "Botão Ativo" : "Botão Inativo"}</button>
        </div>
    )
    
}

export default App;