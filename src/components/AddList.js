import React, { useState } from 'react'
import close from '../images/close.png'

function AddList() {
  const [isAddList, setAddList] = useState(false)

  if (isAddList) {
    return (
      <div className="add-list_form">
        <input type="text" placeholder="add a list" />
        <img src={close} alt="close" onClick={() => setAddList(false)} />
        <input type="button" value="Add" />
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
