export function addNote(noteID, noteName, listID) {
  return (dispatch, getState) => {
    const newNote = {
      id: noteID,
      name: noteName,
      list: listID,
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

export function deleteNote(noteID) {
  return (dispatch, getState) => {
    const allNotes = [...getState().noteCollection.allNotes]

    const noteIndex = allNotes.findIndex((note) => {
      return note.id === noteID
    })
    allNotes.splice(noteIndex, 1)

    dispatch(setNotes(allNotes))
  }
}

export function deleteNotesOfList(listID) {
  return (dispatch, getState) => {
    const allNotes = [...getState().noteCollection.allNotes]

    for (let i = 0; i < allNotes.length; i++) {
      if (allNotes[i].list === listID) {
        allNotes.splice(allNotes[i], 1)
        i--
      }
    }

    dispatch(setNotes(allNotes))
  }
}

export const setNotes = (listOfNotes) => {
  return {
    type: 'SET_NOTES',
    payload: listOfNotes,
  }
}
