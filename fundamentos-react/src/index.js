import React from 'react'
import ReactDom from 'react-dom'

/**
 * Styles.
 */
import './index.css'

/**
 * Components.
 */
import Primeiro from './components/basicos/Primeiro'
import ComParrametro from './components/basicos/ComParametro'

/**
 * Get the root element.
 */
const element = document.getElementById('root')

/**
 * Render on screen.
 */
ReactDom.render(
  <div>
    <Primeiro />
    <ComParrametro
      title="Situação do aluno"
      student="William Koerich"
      note={9.3}
    />
  </div>,
  element
)