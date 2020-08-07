import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import CreateBoard from './CreateBoard'
import Board from './Board'

import '../style/Boards.css'

function BoardsPage() {
  const boards = useSelector((state) => state.listOfBoards.boards, shallowEqual)

  let getListOfBoards = () => {
    let showBoards = boards.map((board) => {
      return <Board key={board.id} boardID={board.id} name={board.name} />
    })
    return showBoards
  }

  return (
    <div className="BoardsPage">
      <CreateBoard />
      {getListOfBoards()}
    </div>
  )
}

export default BoardsPage
