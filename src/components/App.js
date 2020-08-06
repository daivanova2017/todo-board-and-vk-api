import React from 'react'
import Header from './Header'
import BoardsPage from './BoardsPage'
import OneBoardPage from './OneBoardPage'
import { Switch, Route } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import '../style/App.css'

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Switch>
          <Route exact path="/" component={BoardsPage} />
          <Route exact path="/board/:curID" component={OneBoardPage} />
        </Switch>
      </DndProvider>
    </div>
  )
}

export default App
