import React, { useState } from 'react'

function List(props) {
  const [noteValue, setNoteValue] = useState('')
  let handleChange = (e) => {
    setNoteValue(e.target.value)
  }
  return (
    <div className="List">
      <h4>{props.listName}</h4>
      <hr />
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default List
