import React from 'react'
import PropTypes from 'prop-types'

export default function PropsDinamicos({ marca, ano, modelo }) {
  return (
    <>
      <li>
        {marca} - {ano} - {modelo}
      </li>
    </>
  )
}

PropsDinamicos.propTypes = {
  marca: PropTypes.string.isRequired,
  ano: PropTypes.number
}

PropsDinamicos.defaultProps = {
  marca: "Faltou a marca",
  ano: 0
}
