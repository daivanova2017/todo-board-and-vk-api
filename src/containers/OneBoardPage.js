import React, { useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import AddList from './AddList'
import List from '../components/List'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

function OneBoardPage() {
  let { boardName } = useParams()
  const dispatch = useDispatch()
  const curBoard = useSelector((state) => state.boards[boardName], shallowEqual)

  //TODO: Сделать action получения листов
  // useEffect(() => {
  //   getLists()
  // }, [])

  let getLists = () => {
    console.log('curBoard', curBoard)
    if (curBoard.lists !== []) {
      let listsOfBoard = curBoard.lists.map((elem) => {
        return <List listName={elem.name} />
      })
      return listsOfBoard
    } else {
      return ''
    }
  }

  if (!curBoard) {
    return <Redirect to="/" />
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

export default OneBoardPage
