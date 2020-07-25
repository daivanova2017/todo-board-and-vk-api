import React, { useState, useEffect } from 'react'
import close from '../images/close.png'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addList } from '../actions/ListsCollectionActions'
import { addListToBoard } from '../actions/ListOfBoardsActions'
import { v4 as uuidv4 } from 'uuid'

function AddList() {
  const dispatch = useDispatch()

  const currentBoardID = useSelector(
    (state) => state.currentBoard.id,
    shallowEqual
  )
  const [isAddList, setAddList] = useState(false)
  const [listNameValue, setListNameValue] = useState('')

  let handleChange = (e) => {
    setListNameValue(e.target.value)
  }

  let checkListName = () => {
    if (listNameValue.trim() === '') {
      alert('Empty list name!')
    } else {
      const listID = uuidv4().slice(0, 8)
      dispatch(addList(listID, listNameValue))
      dispatch(addListToBoard(listID, currentBoardID))
      setListNameValue('')
    }
  }

  if (isAddList) {
    return (
      <div className="add-list_form">
        <input
          type="text"
          placeholder="add a list"
          value={listNameValue}
          onChange={handleChange}
          autoFocus
        />
        <img
          src={close}
          alt="close"
          maxLength="40"
          onClick={() => setAddList(false)}
        />
        <input type="button" value="Add" onClick={() => checkListName()} />
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

export default AddList
