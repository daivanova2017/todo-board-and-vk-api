import React, { useState } from 'react'
import close from '../images/close.png'
import { useDispatch } from 'react-redux'
import { setListName } from '../actions/ListActions'
import { addListToBoard } from '../actions/BoardsActions'

function AddList(props) {
  const dispatch = useDispatch()

  const { boardName } = props
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
            console.log('click')
            dispatch(setListName(listNameValue))
            dispatch(addListToBoard(listNameValue, boardName))
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

export default AddList
