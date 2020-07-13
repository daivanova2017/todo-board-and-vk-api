import React from 'react'
import Navigation from './Navigation'

function Header() {
  return (
    <div className="Header">
      <Navigation location="toBoards" />
      <Navigation location="toVK" />
    </div>
  )
}

export default Header
