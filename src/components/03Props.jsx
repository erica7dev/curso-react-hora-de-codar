import React from 'react'

function FalaProps({nome, idade, foto}) {
  return (
    <div>
      {/** (props.algumacoisa) == ({algumacoisa})*/}
      <img src={foto} alt={nome}/>
      <h1>{nome}</h1>
      <h4>Ela tem {idade} anos</h4>
    </div>
  )
}

export default FalaProps