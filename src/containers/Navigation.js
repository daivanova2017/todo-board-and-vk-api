import React from 'react'
import Bulb from '../images/bulb.png'
import VKLogo from '../images/VKLogo.png'

function Navigation(props) {
  const { location } = props
  if (location === 'toBoards') {
    return (
      <div className="Boards-Nav">
        <img src={Bulb} alt="To boards page" />
      </div>
    )
  } else {
    return (
      <div className="VK-Nav">
        <img src={VKLogo} alt="To VK page" />
      </div>
    )
  }
}

export default Navigation
