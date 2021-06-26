import React from 'react'

const Primeiro = () => {
  const message = "Adicionando JSX no componente."
  return (
    <div>
      <h2>
        Primeiro Componente
      </h2>
      <p>
        {message}
      </p>
    </div>
  )
}

export default Primeiro