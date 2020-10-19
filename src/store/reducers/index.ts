import { combineReducers } from 'redux';
import articulosReducer from '../reducers/articulosReducer'
import meReducer from '../reducers/meReducer'

export default combineReducers({
  articulosReducer,
  meReducer
});