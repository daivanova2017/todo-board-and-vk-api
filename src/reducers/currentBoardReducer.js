const initialState = {
  curBoard: {},
}

export function currentBoardReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_BOARD':
      return {
        ...state,
        curBoard: action.payload,
      }
    default:
      return state
  }
}
