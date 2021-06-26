import React from 'react'

const FamiliaMembro = props => {
  const { name, lastName } = props
  return (
    <div>
      {name} {lastName}
    </div>
  )
}

export default FamiliaMembro
