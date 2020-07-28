import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import AddList from './AddList'
import List from './List'
import { useSelector, shallowEqual } from 'react-redux'

function OneBoardPage() {
  const { curID } = useParams()
  const currentBoard = useSelector((state) => state.currentBoard, shallowEqual)
  const allLists = useSelector(
    (state) => state.listCollection.allLists,
    shallowEqual
  )
  const allBoards = useSelector(
    (state) => state.listOfBoards.boards,
    shallowEqual
  )

  let getLists = () => {
    if (currentBoard.lists !== []) {
      let listsOfBoard = currentBoard.lists.map((listID) => {
        let curList = allLists.find((list) => list.id === listID)
        return <List key={listID} listName={curList.name} listID={listID} />
      })
      return listsOfBoard
    } else {
      return ''
    }
  }

  let checkURL = () => {
    let result = allBoards.filter((board) => {
      return board.id === curID
    })
    if (result === []) {
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
