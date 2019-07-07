import {combineReducers} from 'redux'
import wombatReducer from './wombats'
import aardvarkReducer from './aardvarks'

const reducers = combineReducers(
  {
    wombats: wombatReducer,
    aardvarks: aardvarkReducer,
  }
)

export default reducers