import { v4 as uuidv4 } from 'uuid'

export function addBoard(boardName) {
  return (dispatch, getState) => {
    const newBoard = {
      id: uuidv4().slice(0, 8),
      name: boardName,
    }
    let newListOfBoards = [...getState().listOfBoards.boards, newBoard]

    dispatch(setBoards(newListOfBoards))
  }
}

export function deleteBoard(boardID) {
  return (dispatch, getState) => {
    const listOfBoards = [...getState().listOfBoards.boards]

    const boardIndex = listOfBoards.findIndex((board) => {
      return board.id === boardID
    })
    listOfBoards.splice(boardIndex, 1)

    dispatch(setBoards(listOfBoards))
  }
}

export const setBoards = (listOfBoards) => {
  return {
    type: 'SET_BOARDS',
    payload: listOfBoards,
  }
}
