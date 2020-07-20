import React from 'react'

function Note(props) {
  const { name } = props
  return (
    <div className="Note">
      <h3>{name}</h3>
    </div>
  )
}

export default Note
