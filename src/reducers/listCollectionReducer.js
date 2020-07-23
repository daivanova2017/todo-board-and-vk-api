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

      listState.notes.push({ name: action.payload, status: 'inProgress' })
      return {
        ...state,
        [listID]: listState,
      }

    default:
      return state
  }
}
