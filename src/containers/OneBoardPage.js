import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import AddList from './AddList'
import List from '../components/List'
import { useSelector, shallowEqual } from 'react-redux'

function OneBoardPage() {
  const { curID } = useParams()
  const currentBoard = useSelector((state) => state.currentBoard, shallowEqual)
  const allLists = useSelector((state) => state.listCollection, shallowEqual)
  const allBoards = useSelector((state) => state.listOfBoards, shallowEqual)

  let getLists = () => {
    if (currentBoard.lists !== undefined) {
      let listsOfBoard = currentBoard.lists.map((elem) => {
        return <List listName={findList(elem)} listID={elem} />
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

  let checkURL = () => {
    let result = false
    for (const boardID in allBoards) {
      if (boardID === curID) {
        result = true
        break
      }
    }
    if (!result) {
      return <Redirect to="/" />
    }
  }

  return (
    <div className="one-board-page">
      <div className="one-board-page__name">
        <h1>{currentBoard.name}</h1>
      </div>
      <div className="one-board-page__main">
        {checkURL()}
        {getLists()}
        <AddList />
      </div>
    </div>
  )
}

export default OneBoardPage
