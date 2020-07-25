import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
