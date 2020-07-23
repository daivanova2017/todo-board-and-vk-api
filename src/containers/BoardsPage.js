import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import CreateBoard from './CreateBoard'
import Board from './Board'

function BoardsPage() {
  const boards = useSelector((state) => state.listOfBoards, shallowEqual)

  let getListOfBoards = () => {
    if (boards === {}) {
      return ''
    } else {
      let showBoards = []
      for (const key in boards) {
        showBoards.push(<Board boardID={key} name={boards[key].name} />)
      }
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
