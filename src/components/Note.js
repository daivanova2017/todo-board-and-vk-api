import React from 'react'
import { changeNoteStatus } from '../actions/NoteCollectionActions'
import { useDispatch } from 'react-redux'

function Note(props) {
  const dispatch = useDispatch()
  const { name, status, ID } = props

  return (
    <div className={status === 'inProgress' ? 'Note' : 'Note compleated'}>
      <h3>{name}</h3>
      <div class="Note__close" onClick={() => dispatch(changeNoteStatus(ID))}>
        &#10004;
      </div>
    </div>
  )
}

export default Note
