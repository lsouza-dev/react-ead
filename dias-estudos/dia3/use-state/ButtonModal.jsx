import React from 'react'

function ButtonModal({setModal}) {

function handeClick(){
  setModal((ativo) => !ativo)
}

  return (
    <button onClick={handeClick}>
      Abrir
    </button>
  )
}

export default ButtonModal
