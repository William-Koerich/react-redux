import React from 'react'
import produtos from '../../data/produtos'

const productList = props => {
  const content = produtos.map(produto => {
    return (
      <tr key={produto.id}>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    )
  })

  return (
    <table>
      <tbody>{content}</tbody>
    </table>
  )
}

export default productList
