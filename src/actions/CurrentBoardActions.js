import { store } from '../store/configureStore'

export function setCurrentBoard(id, board) {
  const allBoards = store.getState().listOfBoards
  let listsOfBoard = []
  for (const boardID in allBoards) {
    if (boardID === id) {
      listsOfBoard = allBoards[boardID].lists
      break
    }
  }
  return {
    type: 'SET_CURRENT_BOARD',
    payload: board,
    id: id,
    lists: listsOfBoard,
  }
}

export function updateCurrentBoard(listID) {
  return {
    type: 'UPDATE_CURRENT_BOARD',
    payload: listID,
  }
}
