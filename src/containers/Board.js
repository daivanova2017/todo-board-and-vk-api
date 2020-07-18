import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../actions/PageActions'
import { Link } from 'react-router-dom'

function Board(props) {
  const { setPageAction, name } = props
  return (
    <Link to={`/board/${name}`}>
      <div className="Board" onClick={() => setPageAction('OneBoardPage')}>
        <h2 className="Board__name">{name}</h2>
      </div>
    </Link>
  )
}

const mapStateToProps = (store) => {
  return {
    currentPage: store.page.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPageAction: (page) => dispatch(setPage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
