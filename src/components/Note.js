import React from 'react'
import { changeNoteStatus, deleteNote } from '../actions/NoteCollectionActions'
import { removeNoteFromList } from '../actions/ListsCollectionActions'
import { useDispatch } from 'react-redux'

function Note(props) {
  const dispatch = useDispatch()
  const { name, status, ID, listID } = props

  let checkDeletion = () => {
    let isDelete = window.confirm('Are you sure you want to delete this note?')

    if (isDelete) {
      dispatch(deleteNote(ID))
      dispatch(removeNoteFromList(ID, listID))
    }
  }

  return (
    <div className={status === 'inProgress' ? 'Note' : 'Note compleated'}>
      <h3>{name}</h3>
      <div class="Note__close" onClick={() => dispatch(changeNoteStatus(ID))}>
        &#10004;
      </div>
      <div className="Note__delete" onClick={() => checkDeletion()}>
        &#10008;
      </div>
    </div>
  )
}

export default Note
