import React from 'react'
import alunos from '../../data/alunos'

const studentList = props => {
  const list = alunos.map(aluno => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.name} {aluno.note}
      </li>
    )
  })

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>{list}</ul>
    </div>
  )
}

export default studentList
