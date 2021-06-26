import React from 'react'

const comParametro = props => {
  /**
   * Destructuring props.
   */
  const { title, student, note } = props

  /**
   * Check if the student has passed.
   */
  const status = note >= 6 ? 'Aprovado!' : 'Reprovado!'

  return (
    <div>
      <h2>{title}</h2>
      <h3>
        <strong> {student} </strong>
        tem nota
        <strong> {note} </strong> e está
        <strong> {status} </strong>
      </h3>
    </div>
  )
}

export default comParametro
