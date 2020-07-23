const initialState = {}

export function noteCollectionReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.payload,
          status: 'inProgress',
        },
      }
    default:
      return state
  }
}
