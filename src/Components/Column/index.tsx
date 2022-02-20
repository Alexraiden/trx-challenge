import React from 'react'
import './style.css'
import { CardTask, CardTaskType } from 'Components/CardTask'

export type ColumnType = {
  id: string
  title: string
  cardList: CardTaskType[]
}

export const Column = (props: ColumnType) => {
  const { cardList, id } = props
  return (
    <div className="column">
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
    </div>
  )
}
