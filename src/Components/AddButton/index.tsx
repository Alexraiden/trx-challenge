import React, { useState } from 'react'
import './style.css'

export const AddButton = props => {
  const { onClick, id } = props
  const [title, setTitle] = useState('')

  return (
    <div className="addButton">
      <input
        className="textfield"
        type="text"
        id="addButton"
        name="addButton"
        required
        value={title}
        minLength={1}
        placeholder="Card Title"
        onChange={e => setTitle(e.target.value)}
      />
      <button
        onClick={() => onClick(id, title)}
        className="addButton"
        type="button"
        disabled={title.length < 1}
      >
        Add
      </button>
    </div>
  )
}
