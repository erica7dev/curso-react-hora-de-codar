import React from 'react'

export default function Evento() {
  function msgDoida(){
    alert('Achou otário!')
  }

  function vejaOQueDigitei(e){
    e.preventDefault()//para comportamento padrão do html de enviar pro servidor
    console.log(e)
  }

  return (
    <div>
      <p>Clique aqui embaixo para ver uma msg!</p>
      <button onClick={msgDoida}>Clique</button>
      <br/>
      <br/>
      <form onSubmit={vejaOQueDigitei}>
        <input type="text" placeholder='Digite seu nome...' />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}
