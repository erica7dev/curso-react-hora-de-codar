import React from 'react'

export default function StateLift({ setNome }) {
  
  return (
    <div>
      <p>Digita seu nome aê</p>
      <input 
      type="text" 
      placeholder='Qual é o seu nome?' 
      onChange={e => setNome(e.target.value)}
      />
    </div>
  )
}
