export function findCurrentBoard(boardID) {
  return (dispatch, getState) => {
    const allBoards = [...getState().listOfBoards.boards]
    const allLists = [...getState().listCollection.allLists]

    const curBoard = { ...allBoards.find((board) => board.id === boardID) }
    let lists = [...allLists.filter((list) => list.board === boardID)]
    curBoard.lists = lists.map((list) => list.id)

    dispatch(setCurrentBoard(curBoard))
  }
}

export function addListToCurBoard(listID) {
  return (dispatch, getState) => {
    const curBoard = { ...getState().currentBoard.curBoard }

    curBoard.lists.push(listID)

    dispatch(setCurrentBoard(curBoard))
  }
}

export function removeListFromCurBoard(listID) {
  return (dispatch, getState) => {
    const curBoard = { ...getState().currentBoard.curBoard }
    const listIndex = curBoard.lists.findIndex((listId) => {
      return listId === listID
    })
    curBoard.lists.splice(listIndex, 1)

    dispatch(setCurrentBoard(curBoard))
  }
}

export const setCurrentBoard = (curBoard) => {
  return {
    type: 'SET_CURRENT_BOARD',
    payload: curBoard,
  }
}
