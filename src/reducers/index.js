import { combineReducers } from 'redux'
import { boardsReducer } from './boards'
import { listReducer } from './list'
import { pageReducer } from './page'

export const rootReducer = combineReducers({
  boards: boardsReducer,
  list: listReducer,
  page: pageReducer,
})
