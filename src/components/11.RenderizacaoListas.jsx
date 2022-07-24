import React from 'react'
import OutraLista from './11.OutraLista'

export default function MeusItens() {
  const variosItens = ['Angular', 'React', 'Vue']

  return (
    <div>
      <h1>Renderização de Listas</h1>
      <OutraLista itens={variosItens}/>
    </div>
  )
}
