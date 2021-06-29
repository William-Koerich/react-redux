import React from 'react'
import produtos from '../../data/produtos'

const productList = props => {
  const content = produtos.map(produto => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    )
  })

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  )
}

export default productList
