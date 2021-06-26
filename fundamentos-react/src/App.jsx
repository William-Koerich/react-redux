import React from 'react'

/**
 * Styles.
 */
import './index.css'

/**
 * Components.
 */
import Primeiro from './components/basicos/Primeiro'
import ComParrametro from './components/basicos/ComParametro'

const App = props => (
  <div>
    <Primeiro />
    <ComParrametro
      title="Situação do aluno"
      student="William Koerich"
      note={9.3}
    />
  </div>
)

export default App
