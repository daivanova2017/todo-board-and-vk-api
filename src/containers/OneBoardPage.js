import React from 'react'
import { Redirect } from 'react-router-dom'
import AddList from './AddList'
import List from '../components/List'
import { useSelector, shallowEqual } from 'react-redux'

function OneBoardPage() {
  const currentBoard = useSelector((state) => state.currentBoard, shallowEqual)
  const allLists = useSelector((state) => state.listCollection, shallowEqual)

  let getLists = () => {
    if (currentBoard.lists !== undefined) {
      let listsOfBoard = currentBoard.lists.map((elem) => {
        return <List listName={findList(elem)} />
      })
      return listsOfBoard
    } else {
      return ''
    }
  }

  let findList = (listID) => {
    for (let id in allLists) {
      if (id === listID) {
        return allLists[id].name
      }
    }
  }

  if (currentBoard.name === '') {
    return <Redirect to="/" />
  }
  return (
    <div className="one-board-page">
      <div className="one-board-page__name">
        <h1>{currentBoard.name}</h1>
      </div>
      <div className="one-board-page__main">
        {getLists()}
        <AddList />
      </div>
    </div>
  )
}

export default OneBoardPage
