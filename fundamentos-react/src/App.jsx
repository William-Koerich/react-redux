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
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

const App = props => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="#04 - Componentes com filhos" color="#F00">
        <Familia lastName="Koerich">
          <FamiliaMembro name="Nelsi" lastName="da Silva" />
          <FamiliaMembro name="Elmo" />
          <FamiliaMembro name="William" />
          <FamiliaMembro name="Johann" />
        </Familia>
      </Card>

      <Card title="#03 - Desafio Aleatório" color="#FA6900">
        <Aleatorio minimumValue={10} maximumValue={100} />
      </Card>

      <Card title="#02 - Componente com props" color="#E94C6F">
        <ComParrametro
          title="Situação do aluno"
          student="William Koerich"
          note={9.3}
        />
      </Card>

      <Card title="#01 - Primeiro Componente" color="#008">
        <Primeiro />
      </Card>
    </div>
  </div>
)

export default App
