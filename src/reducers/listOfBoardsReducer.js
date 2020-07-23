const initialState = {}

export function listOfBoardsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BOARD':
      return {
        ...state,
        [action.id]: { id: action.id, name: action.payload, lists: [] },
      }
    case 'ADD_LIST_TO_BOARD':
      const boardID = action.id
      const curBoard = state[boardID]

      curBoard.lists.push(action.payload)
      return {
        ...state,
        [boardID]: curBoard,
      }
    default:
      return state
  }
}
