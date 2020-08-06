import React from 'react'
import { changeNoteStatus, deleteNote } from '../actions/NoteCollectionActions'
import { useDispatch } from 'react-redux'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../constants/ItemTypes'

function Note(props) {
  const dispatch = useDispatch()
  const { name, status, ID } = props

  const [, drag] = useDrag({
    item: { type: ItemTypes.NOTE, id: ID },
    collect: (monitor) => ({
      item: monitor.getItem(),
      isDragging: !!monitor.isDragging(),
    }),
  })

  let checkDeletion = () => {
    let isDelete = window.confirm('Are you sure you want to delete this note?')

    if (isDelete) {
      dispatch(deleteNote(ID))
    }
  }

  return (
    <div
      ref={drag}
      className={status === 'inProgress' ? 'Note' : 'Note compleated'}
    >
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
