import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentBoard } from '../actions/CurrentBoardActions'
import { deleteBoard } from '../actions/ListOfBoardsActions'
import { Link } from 'react-router-dom'

function Board(props) {
  const dispatch = useDispatch()
  const { name, boardID } = props

  let checkDeletion = () => {
    let isDelete = window.confirm('Вы уверены, что хотите удалить доску?')

    if (isDelete) {
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
          onClick={() => dispatch(setCurrentBoard(boardID))}
        >
          {name}
        </h2>
      </Link>
    </div>
  )
}

export default Board
