export function setBoardName(boardName) {
  return {
    type: 'SET_BOARD_NAME',
    payload: boardName,
  }
}

export function addBoard(board) {
  return {
    type: 'ADD_BOARD',
    payload: board,
  }
}

export function addListToBoard(list, id) {
  return {
    type: 'ADD_LIST_TO_BOARD',
    payload: list,
    id: id,
  }
}
