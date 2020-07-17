import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../actions/PageActions'

function Board(props) {
  const { setPageAction } = props
  return (
    <div className="Board" onClick={() => setPageAction('OneBoardPage')}>
      <h2 className="Board__name">{props.name}</h2>
    </div>
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
