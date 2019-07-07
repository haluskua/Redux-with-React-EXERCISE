import {combineReducers} from 'redux'
import wombatsReducer from './wombats'

const reducers = combineReducers({
  wombats: wombatsReducer
})

export default reducers
