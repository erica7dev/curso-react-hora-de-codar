import React from 'react'
import Componente from './02component'

function Jxboladao() {
  const name = "Erica"
  function sum (y, x){
    return y + x
  }

  const url = 'https://www.ofuxico.com.br/wp-content/uploads/2021/11/angelinajolieeternals.jpg'

  return (
    <div>
      Olá, {name}, a conta deu {sum()}
      <img src={url} width="400" alt="" />
      <Componente/>
    </div>
  )
}

export default Jxboladao