import React from 'react'

const parOuImpar = props => {
  props = props || {}
  const isPar = props.number % 2 === 0
  return <div>{isPar ? <span>Par</span> : <span>Impar</span>}</div>
}

export default parOuImpar
