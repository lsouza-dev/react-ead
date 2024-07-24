/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./desafio/Header";
import Home from "./desafio/Home";
import Produtos from "./desafio/Produtos";
 

const App = () => {

  const {pathname} = window.location;
  let Component;
  if(pathname == '/produtos'){
    Component = Produtos;
  }
  else{
    Component = Home;
  }
  return(
    <>
      <Header />
      <Component />
    </>

  );
}

export default App;