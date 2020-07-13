const initialState = {
  name: '',
  notes: [],
}

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LIST_NAME':
      return { ...state, name: action.payload }

    default:
      return state
  }
}
