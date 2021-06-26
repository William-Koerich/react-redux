import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

/**
 * Get the root element.
 */
const element = document.getElementById('root')

/**
 * Create message to show on screen.
 */
const message = <strong>Olá React!!</strong>

/**
 * Render on screen.
 */
ReactDom.render(
  <div>
    {message}
  </div>,
  element
)