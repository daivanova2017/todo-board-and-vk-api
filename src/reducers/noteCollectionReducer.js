const initialState = {
  allNotes: localStorage.getItem('allNotes')
    ? JSON.parse(localStorage.getItem('allNotes'))
    : [],
}

export function noteCollectionReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NOTES':
      return {
        ...state,
        allNotes: action.payload,
      }
    default:
      return state
  }
}
