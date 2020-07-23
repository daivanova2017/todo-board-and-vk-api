const initialState = {
  id: null,
  name: '',
  lists: [],
}

export function currentBoardReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_BOARD':
      return {
        ...state,
        id: action.id,
        name: action.payload,
        lists: action.lists,
      }
    case 'UPDATE_CURRENT_BOARD':
      return {
        ...state,
        lists: [...state.lists, action.payload],
      }
    default:
      return state
  }
}
