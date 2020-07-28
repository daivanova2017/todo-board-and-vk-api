export function addNote(id, noteName) {
  return (dispatch, getState) => {
    const newNote = {
      id: id,
      name: noteName,
      status: 'inProgress',
    }
    const newNotes = [...getState().noteCollection.allNotes, newNote]

    dispatch(setNotes(newNotes))
  }
}

export function changeNoteStatus(id) {
  return (dispatch, getState) => {
    const allNotes = [...getState().noteCollection.allNotes]
    const curNote = {
      ...allNotes.find((note) => {
        return note.id === id
      }),
    }

    if (curNote.status === 'inProgress') {
      curNote.status = 'compleated'
    } else {
      curNote.status = 'inProgress'
    }

    const noteIndex = allNotes.findIndex((note) => {
      return note.id === id
    })
    allNotes.splice(noteIndex, 1, curNote)

    dispatch(setNotes(allNotes))
  }
}

export const setNotes = (listOfNotes) => {
  return {
    type: 'SET_NOTES',
    payload: listOfNotes,
  }
}
