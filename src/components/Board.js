import React from 'react'
import { useDispatch } from 'react-redux'
import { findCurrentBoard } from '../actions/CurrentBoardActions'
import { deleteBoard } from '../actions/ListOfBoardsActions'
import { Link } from 'react-router-dom'
import { deleteListsOfBoard } from '../actions/ListsCollectionActions'

function Board(props) {
  const dispatch = useDispatch()
  const { name, boardID } = props

  let checkDeletion = () => {
    let isDelete = window.confirm('Are you sure you want to delete this board?')

    if (isDelete) {
      dispatch(deleteListsOfBoard(boardID))
      dispatch(deleteBoard(boardID))
    }
  }

  return (
    <div className="Board">
      <div className="Board__delete" onClick={() => checkDeletion()}>
        &#10008;
      </div>
      <Link to={`/board/${boardID}`}>
        <h2
          className="Board__name"
          onClick={() => dispatch(findCurrentBoard(boardID))}
        >
          {name}
        </h2>
      </Link>
    </div>
  )
}

export default Board
