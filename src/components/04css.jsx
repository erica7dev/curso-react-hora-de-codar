import React from 'react'
import style from './04css.module.css'

export default function CssMaroto() {
  return (
    <div>
      <h3 className={style.title}>Testando o CSS Module!</h3>
      <button className={style.meubotao}>Teste</button>
    </div>
  )
}
