import { combineReducers } from 'redux'
import { boardsReducer } from './boards'
import { listReducer } from './list'

export const rootReducer = combineReducers({
  boards: boardsReducer,
  list: listReducer,
})
