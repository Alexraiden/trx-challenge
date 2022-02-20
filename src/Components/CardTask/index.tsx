import React, { ReactNode } from 'react'
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
  const { title, body } = props

  return (
    <div className="card">
      <div className="cardHeader">{title}</div>
      <div className="cardBody">{body}</div>
    </div>
  )
}
