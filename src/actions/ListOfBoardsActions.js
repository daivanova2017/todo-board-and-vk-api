import { v4 as uuidv4 } from 'uuid'

export function addBoard(boardName) {
  return (dispatch, getState) => {
    const newBoard = {
      id: uuidv4().slice(0, 8),
      name: boardName,
      lists: [],
    }
    let newListOfBoards = [...getState().listOfBoards.boards, newBoard]

    dispatch(setBoards(newListOfBoards))
  }
}

export function addListToBoard(listID, boardID) {
  return (dispatch, getState) => {
    const listOfBoards = [...getState().listOfBoards.boards]
    const curBoard = listOfBoards.find((board) => {
      return board.id === boardID
    })
    curBoard.lists.push(listID)
    const boardIndex = listOfBoards.findIndex((board) => {
      return board.id === boardID
    })
    listOfBoards.splice(boardIndex, 1, curBoard)
    dispatch(setBoards(listOfBoards))
  }
}

export const setBoards = (listOfBoards) => {
  return {
    type: 'SET_BOARDS',
    payload: listOfBoards,
  }
}
