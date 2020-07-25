import React, { useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addNote } from '../actions/NoteCollectionActions'
import { addNoteToList } from '../actions/ListsCollectionActions'
import { v4 as uuidv4 } from 'uuid'
import Note from './Note'

function List(props) {
  const [noteValue, setNoteValue] = useState('')
  const dispatch = useDispatch()
  const allLists = useSelector((state) => state.listCollection, shallowEqual)
  const allNotes = useSelector((state) => state.noteCollection, shallowEqual)

  let handleChange = (e) => {
    setNoteValue(e.target.value)
  }
  let handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (noteValue === '') {
        alert('Empty note')
      } else {
        const noteID = uuidv4().slice(0, 8)
        dispatch(addNoteToList(noteID, props.listID))
        dispatch(addNote(noteID, noteValue))
        setNoteValue('')
      }
    }
  }
  let getNotes = () => {
    let currListNotes
    for (const key in allLists) {
      if (key === props.listID) {
        currListNotes = allLists[key].notes
        break
      }
    }
    if (currListNotes !== undefined) {
      let notes = currListNotes.map((elem) => {
        const curNote = findNote(elem)
        return (
          <Note name={curNote.name} ID={elem} status={curNote.status}></Note>
        )
      })
      return notes
    } else {
      return ''
    }
  }
  let findNote = (note) => {
    for (const key in allNotes) {
      if (key === note) {
        return allNotes[key]
      }
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
