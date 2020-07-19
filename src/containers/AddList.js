import React, { useState } from 'react'
import close from '../images/close.png'
import { connect } from 'react-redux'
import { setListName } from '../actions/ListActions'
import { addListToBoard } from '../actions/BoardsActions'

function AddList(props) {
  const { setListNameAction, addListToBoardAction, boardName } = props
  const [isAddList, setAddList] = useState(false)
  const [listNameValue, setListNameValue] = useState('')

  let handleChange = (e) => {
    setListNameValue(e.target.value)
  }

  if (isAddList) {
    return (
      <div className="add-list_form">
        <input type="text" placeholder="add a list" onChange={handleChange} />
        <img src={close} alt="close" onClick={() => setAddList(false)} />
        <input
          type="button"
          value="Add"
          onClick={() => {
            setListNameAction(listNameValue)
            addListToBoardAction(listNameValue, boardName)
          }}
        />
      </div>
    )
  } else {
    return (
      <div className="add-list" onClick={() => setAddList(true)}>
        <h4>Add a list...</h4>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setListNameAction: (name) => dispatch(setListName(name)),
    addListToBoardAction: (name, board) =>
      dispatch(addListToBoard(name, board)),
  }
}

export default connect(null, mapDispatchToProps)(AddList)
