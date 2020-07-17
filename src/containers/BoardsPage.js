import React from 'react'
import { connect } from 'react-redux'
import CreateBoard from './CreateBoard'
import Board from './Board'

function BoardsPage(props) {
  const { names } = props

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

const mapStateToProps = (store) => {
  return {
    names: store.boards.names,
  }
}

export default connect(mapStateToProps)(BoardsPage)
