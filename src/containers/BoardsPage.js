import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import CreateBoard from './CreateBoard'
import Board from './Board'

function BoardsPage() {
  const names = useSelector((state) => state.boards.names, shallowEqual)

  let getListOfBoards = () => {
    let listOfBoards = names.map((elem) => {
      return <Board name={elem} />
    })
    return listOfBoards
  }
  return (
    <div className="BoardsPage">
      <CreateBoard />
      {getListOfBoards()}
    </div>
  )
}

export default BoardsPage
