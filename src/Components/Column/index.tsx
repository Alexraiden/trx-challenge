import React from 'react'
import './style.css'
import { Droppable } from 'react-beautiful-dnd'
import { CardTask, CardTaskType } from 'Components/CardTask'
import { AddButton } from 'Components/AddButton'

export type ColumnType = {
  id: string
  title: string
  cardList: CardTaskType[]
  addCard: (columnId: string, title: string) => void
}

export const Column = (props: ColumnType) => {
  const { cardList, id, addCard } = props
  return (
    <>
      <Droppable droppableId={id!}>
        {provided => (
          <div
            className="column"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cardList?.length > 0 &&
              cardList.map((card: CardTaskType, index) => (
                <CardTask
                  {...{ index }}
                  title={card.title}
                  parentId={id}
                  id={card.id}
                  key={card.id}
                  body={card.body}
                />
              ))}
            {provided.placeholder}
            <AddButton onClick={addCard} id={id}/>
          </div>
        )}
      </Droppable>
    </>
  )
}
