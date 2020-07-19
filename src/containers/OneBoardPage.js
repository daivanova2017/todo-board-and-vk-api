import React from 'react'
import { useParams } from 'react-router-dom'
import AddList from './AddList'
import List from '../components/List'
import { connect } from 'react-redux'

function OneBoardPage(props) {
  let { boardName } = useParams()
  const { boards } = props

  let getLists = () => {
    let curBoard = boards[boardName]

    for (const key in curBoard) {
      if (curBoard.hasOwnProperty(key) && key === 'lists') {
        if (curBoard[key] != '') {
          let listsOfBoard = curBoard[key].map((elem) => {
            return <List listName={elem.name} />
          })
          return listsOfBoard
        } else {
          return ''
        }
      }
    }
  }

  return (
    <div className="one-board-page">
      <div className="one-board-page__name">
        <h1>{boardName}</h1>
      </div>
      <div className="one-board-page__main">
        {getLists()}
        <AddList boardName={boardName} />
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    boards: store.boards,
  }
}

export default connect(mapStateToProps)(OneBoardPage)
