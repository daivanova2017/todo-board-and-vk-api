import { combineReducers } from 'redux'
import { currentBoardReducer } from './currentBoardReducer'
import { listOfBoardsReducer } from './listOfBoardsReducer'
import { listCollectionReducer } from './listCollectionReducer'
import { noteCollectionReducer } from './noteCollectionReducer'

export const rootReducer = combineReducers({
  currentBoard: currentBoardReducer,
  listOfBoards: listOfBoardsReducer,
  listCollection: listCollectionReducer,
  noteCollection: noteCollectionReducer,
})
