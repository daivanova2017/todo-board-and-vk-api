import React, { useState } from 'react'
import { closeIcon } from '../images/closeIcon.png'

function AddList() {
  const [isAddList, setAddList] = useState(false)

  if (isAddList) {
    return (
      <div className="add-list_form">
        <img src={closeIcon} alt="close" onClick={() => setAddList(false)} />
        <input type="text" placeholder="add a list" />
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
