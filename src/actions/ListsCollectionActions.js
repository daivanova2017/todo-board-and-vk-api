import { deleteNotesOfList } from './NoteCollectionActions'

export function addList(listID, listName, boardID) {
  return (dispatch, getState) => {
    const newList = {
      id: listID,
      name: listName,
      board: boardID,
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

export function deleteListsOfBoard(boardID) {
  return (dispatch, getState) => {
    const allLists = [...getState().listCollection.allLists]

    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].board === boardID) {
        dispatch(deleteNotesOfList(allLists[i].id))
        allLists.splice(allLists[i], 1)
        i--
      }
    }

    dispatch(setLists(allLists))
  }
}

export const setLists = (allLists) => {
  return {
    type: 'SET_LISTS',
    payload: allLists,
  }
}
