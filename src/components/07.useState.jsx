import React from 'react'
import { useState } from 'react'

export default function Form() {
  function cadastrarUsuario(e){
    e.preventDefault()
    console.log(`Usuário(a) ${name} foi cadastrado(a) com a senha ${password}c!`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Meu cadastro:</h1>

      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
        <input type="text" 
        id="name" 
        name="name" 
        placeholder='Digite seu nome:'
        value={name}
        onChange={e => setName(e.target.value)} 
        />
        </div>
        <div>
        <label htmlFor="password">Senha:</label>
        <input 
        type="text" 
        id="password" 
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Digite sua senha:' />
        </div>
        <div>
        <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}
