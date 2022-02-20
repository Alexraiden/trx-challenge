import React, { useState } from 'react'
import './style.css'
import { Column } from 'Components/Column'
import { columnsMock } from 'Mocks'

export const Dashboard = () => {

  const [columns, setColumns] = useState(() => columnsMock)
  

  return (
    <div className="dashboard">
      <div className="header">header</div>
      <div className="body">
        {Object.values(columns).map(col => {
          const { id, title, cardList } = col

          return <Column {...{ id, title, cardList }} key={col.id} />
        })}
      </div>
    </div>
  )
}
