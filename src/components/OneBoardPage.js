import React from 'react'
import { useParams } from 'react-router-dom'

function OneBoardPage() {
  let { boardName } = useParams()

  return <div>{boardName}</div>
}

export default OneBoardPage
