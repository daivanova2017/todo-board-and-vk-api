export function addList(id, list) {
  return {
    type: 'ADD_LIST',
    payload: list,
    id: id,
  }
}
