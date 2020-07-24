export function addNote(id, note) {
  return {
    type: 'ADD_NOTE',
    payload: note,
    id: id,
  }
}

export function changeNoteStatus(id, status) {
  if (status === 'inProgress') {
    status = 'compleated'
  } else {
    status = 'inProgress'
  }
  return {
    type: 'CHANGE_NOTE_STATUS',
    payload: status,
    id: id,
  }
}
