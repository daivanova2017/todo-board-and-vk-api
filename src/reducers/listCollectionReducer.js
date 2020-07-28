const initialState = {
  allLists: [],
}

export function listCollectionReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LISTS':
      return { ...state, allLists: action.payload }
    default:
      return state
  }
}
