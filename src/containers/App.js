import React from 'react'
import Header from '../components/Header'
import BoardsPage from './BoardsPage'
import OneBoardPage from '../components/OneBoardPage'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import '../style/App.css'

function App(props) {
  const { names } = props

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={BoardsPage} />
        <Route exact path="/board/:boardName" component={OneBoardPage} />
      </Switch>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    names: store.boards.names,
  }
}

export default connect(mapStateToProps)(App)
