import React, { useState } from 'react'
import close from '../images/close.png'
import { connect } from 'react-redux'
import { setBoardName, addBoard } from '../actions/BoardsActions'

function CreateBoard(props) {
  const { setBoardNameAction, addBoardAction } = props

  const [isForm, setForm] = useState(false)
  const [boardNameValue, setBoardNameValue] = useState('')

  let handleChange = (e) => {
    setBoardNameValue(e.target.value)
  }

  let checkBoardName = () => {
    if (boardNameValue === '') {
      alert('Empty board name!')
    } else {
      setBoardNameAction(boardNameValue)
      addBoardAction(boardNameValue)
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
          <input type="text" onChange={handleChange} />
          <p className="createBoard-form__main__buttons">
            <input
              type="button"
              onClick={() => setForm(false)}
              value="cancel"
            />
            <input
              type="button"
              value="create"
              onClick={() => checkBoardName()}
            />
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

const mapStateToProps = (store) => {
  return {
    names: store.boards.names,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBoardNameAction: (name) => dispatch(setBoardName(name)),
    addBoardAction: (name) => dispatch(addBoard(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard)
