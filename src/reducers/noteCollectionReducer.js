const initialState = {
  allNotes: [],
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
