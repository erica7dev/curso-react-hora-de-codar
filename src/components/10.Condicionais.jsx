import React from 'react'

export default function Condicionais() {
  
  function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
  }

  function limparEmail() {
    setUserEmail('')
  }

  const [email, setEmail] = React.useState()
  const [userEmail, setUserEmail] = React.useState()

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <label>E-mail:</label>
        <input
          type="email"
          placeholder='Digite seu e-mail'
          onChange={e => setEmail(e.target.value)}
        />
        <button
          type="submit"
          onClick={enviarEmail}
        >
          Enviar
        </button>
        {userEmail && (
          <div>
            <p>O e-mail cadastrado é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar email</button>
          </div>
        )}
      </form>
    </div>
  )
}
