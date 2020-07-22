import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentBoard } from '../actions/PageActions'
import { Link } from 'react-router-dom'

function Board(props) {
  const dispatch = useDispatch()
  const boardInfo = useSelector((state) => state.boards)
  const { name } = props
  return (
    <Link to={`/board/${name}`}>
      <div
        className="Board"
        onClick={() => dispatch(setCurrentBoard('OneBoardPage'))}
      >
        <h2 className="Board__name">{name}</h2>
      </div>
    </Link>
  )
}

export default Board
