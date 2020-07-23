export function addNote(id, note) {
  return {
    type: 'ADD_NOTE',
    payload: note,
    id: id,
  }
}
