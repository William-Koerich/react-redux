import React from 'react'

const Aleatorio = props => {
  /**
   * Destructuring props.
   */
  const { minimumValue, maximumValue } = props

  /**
   * Calculate an value random.
   */
  const randomizeValue =
    parseInt(Math.random() * (maximumValue - minimumValue)) + minimumValue

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo:</strong> {minimumValue}
      </p>
      <p>
        <strong>Valor Máximo:</strong> {maximumValue}
      </p>
      <p>
        <strong>Valor Randomizado:</strong> {randomizeValue}
      </p>
    </div>
  )
}

export default Aleatorio
