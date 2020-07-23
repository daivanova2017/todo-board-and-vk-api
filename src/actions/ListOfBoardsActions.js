export function addBoard(id, board) {
  return {
    type: 'ADD_BOARD',
    payload: board,
    id: id,
  }
}

export function addListToBoard(listID, boardID) {
  return {
    type: 'ADD_LIST_TO_BOARD',
    payload: listID,
    id: boardID,
  }
}
