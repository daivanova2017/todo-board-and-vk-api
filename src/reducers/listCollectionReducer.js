const initialState = {}

export function listCollectionReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        [action.id]: { id: action.id, name: action.payload, notes: [] },
      }

    case 'ADD_NOTE_TO_LIST':
      const listID = action.id
      const listState = state[listID]

      listState.notes.push(action.payload)
      return {
        ...state,
        [listID]: listState,
      }

    default:
      return state
  }
}
