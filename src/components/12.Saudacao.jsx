import React from 'react'

export default function Saudacao({ nome }) {
  function gerarSaudacao(algumacoisa) {
    return `Olá, ${algumacoisa}. Como vai truta?`
  }
  return (
    <div>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </div>
  )
}
