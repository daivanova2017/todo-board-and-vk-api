const initialState = {
  allLists: localStorage.getItem('allLists')
    ? JSON.parse(localStorage.getItem('allLists'))
    : [],
}

export function listCollectionReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LISTS':
      localStorage.setItem('allLists', JSON.stringify(action.payload))
      return { ...state, allLists: action.payload }
    default:
      return state
  }
}
