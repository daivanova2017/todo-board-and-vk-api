export function setBoardName(boardName) {
  return {
    type: 'SET_BOARD_NAME',
    payload: boardName,
  }
}

export function addListToBoard(list) {
  return {
    type: 'ADD_LIST_TO_BOARD',
    payload: list,
  }
}
