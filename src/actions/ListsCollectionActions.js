export function addList(id, list) {
  return {
    type: 'ADD_LIST',
    payload: list,
    id: id,
  }
}

export function addNoteToList(noteID, listID) {
  return {
    type: 'ADD_NOTE_TO_LIST',
    payload: noteID,
    id: listID,
  }
}
