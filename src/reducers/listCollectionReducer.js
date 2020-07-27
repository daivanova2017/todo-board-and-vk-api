const initialState = {
  allLists: [],
}

export function listCollectionReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LIST':
      const newList = { id: action.id, name: action.payload, notes: [] }
      return { ...state, allLists: [...state.allLists, newList] }
    case 'ADD_NOTE_TO_LIST':
      const listID = action.id
      const listState = state.allLists.find((elem) => elem.id === listID)

      listState.notes.push(action.payload)
      return {
        ...state,
        allLists: [...state.allLists, listState],
      }
    default:
      return state
  }
}
