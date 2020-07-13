import React from 'react'

function Board(props) {
  return (
    <div className="Board">
      <h2 className="boardName">{props.name}</h2>
    </div>
  )
}

export default Board
