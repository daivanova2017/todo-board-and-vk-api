import React from 'react'
import Header from '../components/Header'
import BoardsPage from './BoardsPage'
import { connect } from 'react-redux'

import '../style/App.css'
import OneBoardPage from '../components/OneBoardPage'

function App(props) {
  const { currentPage } = props
  return (
    <div className="App">
      <Header />
      {currentPage === 'boardMenu' ? <BoardsPage /> : <OneBoardPage />}
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    currentPage: store.page.currentPage,
  }
}

export default connect(mapStateToProps)(App)
