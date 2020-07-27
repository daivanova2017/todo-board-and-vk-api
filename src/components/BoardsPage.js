import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import CreateBoard from './CreateBoard'
import Board from './Board'

function BoardsPage() {
  const boards = useSelector((state) => state.listOfBoards.boards, shallowEqual)

  let getListOfBoards = () => {
    if (boards.length === 0) {
      return ''
    } else {
      let showBoards = boards.map((board) => {
        return <Board key={board.id} boardID={board.id} name={board.name} />
      })
      return showBoards
    }
  }

  return (
    <div className="BoardsPage">
      <CreateBoard />
      {getListOfBoards()}
    </div>
  )
}

export default BoardsPage
