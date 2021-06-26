import React from 'react'

const Familia = props => {
  const { children } = props
  return (
    <div>
      <h2>Familia</h2>

      {children.map((element, index) => {
        return React.cloneElement(element, {
          ...props,
          key: index
        })
      })}
    </div>
  )
}

export default Familia
