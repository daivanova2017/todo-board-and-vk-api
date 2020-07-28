export function addList(id, listName) {
  return (dispatch, getState) => {
    const newList = {
      id: id,
      name: listName,
      notes: [],
    }
    let newLists = [...getState().listCollection.allLists, newList]

    dispatch(setLists(newLists))
  }
}

export function deleteList(listID) {
  return (dispatch, getState) => {
    const allLists = [...getState().listCollection.allLists]

    const listIndex = allLists.findIndex((list) => {
      return list.id === listID
    })
    allLists.splice(listIndex, 1)

    dispatch(setLists(allLists))
  }
}

export function addNoteToList(noteID, listID) {
  return (dispatch, getState) => {
    const allLists = [...getState().listCollection.allLists]
    const curList = allLists.find((list) => list.id === listID)

    curList.notes.push(noteID)
    const listIndex = allLists.findIndex((list) => {
      return list.id === listID
    })
    allLists.splice(listIndex, 1, curList)

    dispatch(setLists(allLists))
  }
}

export function removeNoteFromList(noteID, listID) {
  return (dispatch, getState) => {
    const allLists = [...getState().listCollection.allLists]

    const curList = allLists.find((list) => {
      return list.id === listID
    })
    const noteIndex = curList.notes.findIndex((noteId) => {
      return noteId === noteID
    })
    curList.notes.splice(noteIndex, 1)

    const listIndex = allLists.findIndex((list) => {
      return list.id === listID
    })
    allLists.splice(listIndex, 1, curList)

    dispatch(setLists(allLists))
  }
}

export const setLists = (allLists) => {
  return {
    type: 'SET_LISTS',
    payload: allLists,
  }
}
