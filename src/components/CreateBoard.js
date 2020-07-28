import React, { useState } from 'react'
import close from '../images/close.png'
import { useDispatch } from 'react-redux'
import { addBoard } from '../actions/ListOfBoardsActions'

function CreateBoard() {
  const dispatch = useDispatch()

  const [isForm, setForm] = useState(false)
  const [boardNameValue, setBoardNameValue] = useState('')

  let handleChange = (e) => {
    setBoardNameValue(e.target.value)
  }

  let handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      checkBoardName()
    } else if (e.key === 'Escape') {
      setForm(false)
    }
  }

  let checkBoardName = () => {
    if (boardNameValue.trim() === '') {
      alert('Empty board name!')
    } else {
      dispatch(addBoard(boardNameValue))
      setBoardNameValue('')
    }
  }

  if (isForm) {
    return (
      <div className="createBoard form">
        <div className="createBoard-form__header">
          <h3>Creating a board</h3>
          <img
            src={close}
            className="createBoard-form__header__close"
            onClick={() => setForm(false)}
            alt="close"
          />
        </div>
        <div className="createBoard-form__main">
          <h5>Name of board</h5>
          <input
            type="text"
            value={boardNameValue}
            maxLength="40"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            placeholder="Board name..."
            autoFocus
          />
          <p className="createBoard-form__main__buttons">
            <button
              className="createBoard-form__main__buttons__cancel"
              onClick={() => setForm(false)}
            >
              cancel
            </button>
            <button
              className="createBoard-form__main__buttons__create"
              onClick={() => checkBoardName()}
            >
              create
            </button>
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="createBoard" onClick={() => setForm(true)}>
        <h3>Create new board...</h3>
      </div>
    )
  }
}

export default CreateBoard
