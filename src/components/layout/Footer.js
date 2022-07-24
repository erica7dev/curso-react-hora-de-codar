import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div>
      Rodapé
      <ul className={style.social_list}>
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaTwitter/></li>
      </ul>
    </div>
  )
}
