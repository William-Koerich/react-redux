import React from 'react'

import If from './If'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <div>
      <If test={props.name}>Seja bem vindo(a) {props.name}</If>
      <If test={!props.name}>Seja bem Amigão</If>
    </div>
  )
}
