const initialState = {
  listNames: [],
}

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LIST_NAME':
      return { ...state, listNames: [...state.listNames, action.payload] }

    default:
      return state
  }
}
