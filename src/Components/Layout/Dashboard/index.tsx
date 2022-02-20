import React, { useState } from 'react'
import './style.css'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Column } from 'Components/Column'
import { columnsMock } from 'Mocks'

export const Dashboard = () => {
  const [columns, setColumns] = useState(() => columnsMock)

  const onDragEnd = ({ source, destination }: DropResult) => {
    // Cases no need to update columns
    if (destination === undefined || destination === null) return null

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    // Case card move in same column
    if (start === end) {
      const newList = start.cardList.filter(
        (_: any, idx: number) => idx !== source.index,
      )

      newList.splice(destination.index, 0, start.cardList[source.index])

      const newCol = {
        ...start,
        cardList: newList,
      }

      setColumns(state => ({ ...state, [newCol.id]: newCol }))
      return null
    }

    // Case card move between columns
    const newStartList = start.cardList.filter(
      (_: any, idx: number) => idx !== source.index,
    )

    const newStartCol = {
      ...start,
      cardList: newStartList,
    }

    const newEndList = end.cardList

    newEndList.splice(destination.index, 0, start.cardList[source.index])

    const newEndCol = {
      ...end,
      cardList: newEndList,
    }

    setColumns(state => ({
      ...state,
      [newStartCol.id]: newStartCol,
      [newEndCol.id]: newEndCol,
    }))
    return null
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="dashboard">
        <div className="header">header</div>
        <div className="body">
          {Object.values(columns).map(col => {
            const { id, title, cardList } = col

            return <Column {...{ id, title, cardList }} key={col.id} />
          })}
        </div>
      </div>
    </DragDropContext>
  )
}
