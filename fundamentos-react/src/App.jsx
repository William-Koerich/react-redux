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
import Aleatorio from './components/basicos/Aleatorio'

const App = props => (
  <div>
    <Aleatorio minimumValue={10} maximumValue={100} />
    <Primeiro />
    <ComParrametro
      title="Situação do aluno"
      student="William Koerich"
      note={9.3}
    />
  </div>
)

export default App
