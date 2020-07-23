import { combineReducers } from 'redux'
import { currentBoardReducer } from './currentBoardReducer'
import { listOfBoardsReducer } from './listOfBoardsReducer'
import { listCollectionReducer } from './listCollectionReducer'

export const rootReducer = combineReducers({
  currentBoard: currentBoardReducer,
  listOfBoards: listOfBoardsReducer,
  listCollection: listCollectionReducer,
})
