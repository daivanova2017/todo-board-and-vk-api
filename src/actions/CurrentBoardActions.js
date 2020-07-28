export function findCurrentBoard(id) {
  return (dispatch, getState) => {
    const allBoards = [...getState().listOfBoards.boards]
    const curBoard = allBoards.find((board) => board.id === id)

    dispatch(setCurrentBoard(curBoard))
  }
}

export const setCurrentBoard = (curBoard) => {
  return {
    type: 'SET_CURRENT_BOARD',
    payload: curBoard,
  }
}
