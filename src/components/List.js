import React, { useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addNote } from '../actions/NoteCollectionActions'
import { deleteList } from '../actions/ListsCollectionActions'
import { removeListFromCurBoard } from '../actions/CurrentBoardActions'
import { v4 as uuidv4 } from 'uuid'
import Note from './Note'

function List(props) {
  const { listID, listName } = props
  const [noteValue, setNoteValue] = useState('')
  const dispatch = useDispatch()

  const allNotes = useSelector(
    (state) => state.noteCollection.allNotes,
    shallowEqual
  )
  let notes = allNotes.filter((note) => note.list === listID)

  let checkDeletion = () => {
    let isDelete = window.confirm('Are you sure you want to delete this list?')

    if (isDelete) {
      dispatch(deleteList(listID))
      dispatch(removeListFromCurBoard(listID))
    }
  }

  let handleChange = (e) => {
    setNoteValue(e.target.value)
  }

  let handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkNoteName()
    }
  }

  let checkNoteName = () => {
    let sameNote = notes.find((note) => note.name === noteValue.trim())

    if (sameNote) {
      alert('This note is already exists on this list')
    } else if (noteValue.trim() === '') {
      alert('Empty note')
    } else {
      const noteID = uuidv4().slice(0, 8)
      dispatch(addNote(noteID, noteValue, listID))
      setNoteValue('')
    }
  }

  let getNotes = () => {
    if (notes) {
      let showNotes = notes.map((note) => {
        return (
          <Note
            key={note.id}
            name={note.name}
            ID={note.id}
            status={note.status}
          />
        )
      })
      return showNotes
    } else {
      return ''
    }
  }

  return (
    <div className="List">
      <div className="List__delete" onClick={() => checkDeletion()}>
        &#10008;
      </div>
      <h4>{listName}</h4>
      <hr />
      <input
        type="text"
        maxLength="40"
        value={noteValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {getNotes()}
    </div>
  )
}

export default List
