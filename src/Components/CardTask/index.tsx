/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './style.css'

export type CardTaskType = {
  id: string
  parentId: string
  title: string
  body?: string | ReactNode
  index?: number
}

export const CardTask = (props: CardTaskType) => {
  console.log('props= ', props)
  const { title, body, index, id } = props

  return (
    <Draggable draggableId={id} index={index!}>
      {provided => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card">
            <div className="cardHeader">{title}</div>
            <div className="cardBody">{body}</div>
          </div>
        </div>
      )}
    </Draggable>
  )
}
