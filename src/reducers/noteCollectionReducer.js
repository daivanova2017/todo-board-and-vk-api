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
    case 'CHANGE_NOTE_STATUS':
      const noteID = action.id

      return {
        ...state,
        [noteID]: {
          ...state[noteID],
          status: action.payload,
        },
      }
    default:
      return state
  }
}
