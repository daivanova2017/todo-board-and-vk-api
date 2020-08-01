const initialState = {
  curBoard: localStorage.getItem('curBoard')
    ? JSON.parse(localStorage.getItem('curBoard'))
    : {},
}

export function currentBoardReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_BOARD':
      localStorage.setItem('curBoard', JSON.stringify(action.payload))
      return {
        ...state,
        curBoard: action.payload,
      }
    default:
      return state
  }
}
