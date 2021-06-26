import React from 'react'

/**
 * Styles.
 */
import './App.css'

/**
 * Components.
 */
import Primeiro from './components/basicos/Primeiro'
import ComParrametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

const App = props => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="Desafio Aleatório" color="#FA6900">
        <Aleatorio minimumValue={10} maximumValue={100} />
      </Card>

      <Card title="Componente com props" color="#E94C6F">
        <ComParrametro
          title="Situação do aluno"
          student="William Koerich"
          note={9.3}
        />
      </Card>

      <Card title="Primeiro Componente" color="#008">
        <Primeiro />
      </Card>
    </div>
  </div>
)

export default App
