import React from 'react'
import { useParams } from 'react-router-dom'
import AddList from './AddList'

function OneBoardPage() {
  let { boardName } = useParams()

  return (
    <div className="one-board-page">
      <div className="one-board-page__name">
        <h1>{boardName}</h1>
      </div>
      <div className="one-board-page__main">
        <AddList />
      </div>
    </div>
  )
}

export default OneBoardPage
