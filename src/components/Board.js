import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentBoard } from '../actions/CurrentBoardActions'
import { Link } from 'react-router-dom'

function Board(props) {
  const dispatch = useDispatch()
  const { name, boardID } = props
  return (
    <Link to={`/board/${boardID}`}>
      <div
        className="Board"
        onClick={() => dispatch(setCurrentBoard(boardID, name))}
      >
        <h2 className="Board__name">{name}</h2>
      </div>
    </Link>
  )
}

export default Board
