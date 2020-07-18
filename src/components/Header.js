import React from 'react'
import Navigation from '../containers/Navigation'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <Navigation location="toBoards" />
      </Link>
      <Link to="/vk">
        <Navigation location="toVK" />
      </Link>
    </div>
  )
}

export default Header
