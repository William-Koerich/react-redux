import React from 'react'

import './Card.css'

const Card = props => {
  /**
   * Destructuring.
   */
  const { title, children, color } = props

  const cardStyle = {
    borderColor: color || '#F00',
    backgroundColor: color || '#F00'
  }

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{title}</div>
      <div className="Content">{children}</div>
    </div>
  )
}

export default Card
