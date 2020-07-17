import React from 'react'
import Bulb from '../images/bulb.png'
import VKLogo from '../images/VKLogo.png'
import { connect } from 'react-redux'
import { setPage } from '../actions/PageActions'

function Navigation(props) {
  const { location, setPageAction } = props
  if (location === 'toBoards') {
    return (
      <div className="Boards-Nav" onClick={() => setPageAction('boardMenu')}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setPageAction: (page) => dispatch(setPage(page)),
  }
}

export default connect(null, mapDispatchToProps)(Navigation)
