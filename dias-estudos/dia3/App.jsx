/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";

const Titulo = ({cor,texto,children}) => {
  return <h1 style={{color: cor}} >
    {texto},{children}
    </h1>
}

const App = () => {
  return (
  <div>
    <Titulo cor = "red" texto = "Meu Título 1">
      Isso é o children
      <p>Teste</p>
    </Titulo>
    <Titulo cor = "blue" texto = "Meu Título 2" />
  </div>
  );
}

export default App;