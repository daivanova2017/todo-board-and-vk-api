import React from 'react'
import Header from '../components/Header'
import BoardsPage from './BoardsPage'
import OneBoardPage from './OneBoardPage'
import { Switch, Route } from 'react-router-dom'

import '../style/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={BoardsPage} />
        <Route exact path="/board/:curID" component={OneBoardPage} />
      </Switch>
    </div>
  )
}

export default App
