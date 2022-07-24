import React from 'react'
import Button from './09.buttonProps'

export default function EventosProps() {
    function meuEvento(){
      console.log(`Opa, fui ativado!`)
    }
  
  return (
    <div>
      <p>Clique pra disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro evento"/>
    </div>
  )
}
