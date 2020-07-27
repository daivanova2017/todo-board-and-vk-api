import { store } from '../store/configureStore'

export function setCurrentBoard(id) {
  const allBoards = store.getState().listOfBoards.boards
  let curBoard = allBoards.find((board) => board.id === id)
  return {
    type: 'SET_CURRENT_BOARD',
    payload: curBoard,
  }
}

export function updateCurrentBoard(listID) {
  return {
    type: 'UPDATE_CURRENT_BOARD',
    payload: listID,
  }
}
