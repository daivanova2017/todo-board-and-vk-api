import React, { useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addNote } from '../actions/NoteCollectionActions'
import { addNoteToList } from '../actions/ListsCollectionActions'
import { v4 as uuidv4 } from 'uuid'
import Note from './Note'

function List(props) {
  const [noteValue, setNoteValue] = useState('')
  const dispatch = useDispatch()
  const allLists = useSelector(
    (state) => state.listCollection.allLists,
    shallowEqual
  )
  const allNotes = useSelector(
    (state) => state.noteCollection.allNotes,
    shallowEqual
  )
  const curList = allLists.find((list) => list.id === props.listID)

  let handleChange = (e) => {
    setNoteValue(e.target.value)
  }

  let handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkNoteName()
    }
  }

  let checkNoteName = () => {
    let sameNote = curList.notes.find((noteID) =>
      allNotes.find(
        (note) => note.id === noteID && note.name === noteValue.trim()
      )
    )

    if (sameNote) {
      alert('This note is already exists on this list')
    } else if (noteValue.trim() === '') {
      alert('Empty note')
    } else {
      const noteID = uuidv4().slice(0, 8)
      dispatch(addNoteToList(noteID, props.listID))
      dispatch(addNote(noteID, noteValue))
      setNoteValue('')
    }
  }

  let getNotes = () => {
    if (curList.notes !== undefined) {
      let notes = curList.notes.map((noteID) => {
        const curNote = allNotes.find((note) => note.id === noteID)
        return (
          <Note
            key={noteID}
            name={curNote.name}
            ID={noteID}
            status={curNote.status}
          />
        )
      })
      return notes
    } else {
      return ''
    }
  }

  return (
    <div className="List">
      <h4>{props.listName}</h4>
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
