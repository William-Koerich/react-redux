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
  </div>,
  element
)